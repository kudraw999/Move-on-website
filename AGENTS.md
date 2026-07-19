# AGENTS.md

## 專案概述

本專案為「動起來 LET'S MOVE!」運動網站首頁切版，使用 Bootstrap 5 本地檔案作為版面框架，所有圖片、CSS、JS 皆以本地端檔案引用，不使用 CDN。

主要頁面：`index.html`

頁面由上到下包含：

1. 選單 / Header
2. 輪播圖 5 張 / Hero Carousel
3. 關於我們 / About
4. 運動項目 4 張 Card / Programs
5. 聯繫我們 / Footer Contact
6. 公司資訊
7. 版權宣告

## 目錄結構

```text
website/
├── index.html
├── AGENTS.md
├── css/
│   ├── bootstrap.min.css
│   ├── icons.css
│   └── style.css
├── js/
│   └── bootstrap.bundle.min.js
└── images/
    ├── LOGO去背.png
    ├── img-1.jpg
    ├── img-2.png
    ├── img-3.png
    ├── img-4.png
    ├── img-5.jpg
    ├── img-10.png
    ├── img6.png
    ├── img7.jpg
    ├── img8.jpg
    └── img9.jpg
```

## HTML 載入順序

`index.html` 的 CSS 載入順序請維持如下：

```html
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/icons.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
```

原因：

- `bootstrap.min.css`：Bootstrap 5 基礎框架。
- `icons.css`：本地圖標樣式。
- `style.css`：網站自訂樣式，需放最後以覆蓋 Bootstrap 預設樣式。

JS 請放在 `</body>` 前：

```html
<script src="js/bootstrap.bundle.min.js"></script>
```

`bootstrap.bundle.min.js` 已包含 Carousel、Collapse 等 Bootstrap 元件需要的 JS。

## 圖片配置

目前首頁圖片對應如下：

### Logo

- Header Logo：`images/LOGO去背.png`
- Footer Logo：`images/LOGO去背.png`

### 輪播圖

1. `images/img-3.png`：自行車隊海岸公路
2. `images/img-2.png`：城市夜跑團隊
3. `images/img-4.png`：戶外瑜珈團課
4. `images/img-5.jpg`：泳池蝶式游泳
5. `images/img-10.png`：健身房體能訓練

### 關於我們

- `images/img-2.png`：城市夜跑團隊

### 運動項目 Card

- 路跑 & 晨跑：`images/img-1.jpg`
- 單車 & 自行車：`images/img7.jpg`
- 瑜伽 & 伸展：`images/img8.jpg`
- 游泳 & 水中運動：`images/img9.jpg`

## 樣式維護規範

自訂 CSS 請統一寫在：

```text
css/style.css
```

不要再把自訂樣式寫回 `index.html` 的 `<style>` 區塊，避免後續多頁共用時難以維護。

建議維持目前命名方向：

- `.site-header`：網站頁首
- `.brand-logo-img`：Logo 圖片
- `.hero-carousel`：首頁輪播
- `.section-title`：區塊標題
- `.about-section` / `.about-image` / `.about-copy`：關於我們
- `.program-section` / `.program-card`：運動項目卡片
- `.site-footer`：頁尾
- `.info-row` / `.info-item` / `.info-icon`：公司資訊列
- `.back-top`：回到頂部按鈕

## 圖標維護

目前頁尾公司資訊圖標使用內嵌 SVG，不依賴 CDN。若未來要改回 Bootstrap Icons，請確認：

1. 已將 Bootstrap Icons 字型與 CSS 放到本地端。
2. `index.html` 有正確載入本地 icons CSS。
3. 不要引用 `https://cdn.jsdelivr.net/...`。

社群圖標目前由 `css/icons.css` 和 HTML icon class 控制，若圖標不顯示，請優先檢查：

- `css/icons.css` 是否存在。
- `index.html` 是否有載入 `css/icons.css`。
- icon class 是否與 `icons.css` 內定義一致。

## 圖片更新規範

新增或替換圖片時：

1. 圖片請放入 `images/` 資料夾。
2. 使用相對路徑，例如 `images/new-banner.jpg`。
3. 不要使用外部圖片網址。
4. 輪播圖建議使用橫式圖片，比例接近 16:9 或 1408x768。
5. Card 圖片建議使用清楚主體，避免過度裁切。
6. 替換圖片後請同步更新 `alt` 文字。

## Bootstrap 維護注意事項

本專案使用本地 Bootstrap 5 檔案，不使用 CDN。

請勿刪除：

- `css/bootstrap.min.css`
- `js/bootstrap.bundle.min.js`

Navbar 手機版收合與 Carousel 輪播都依賴 `bootstrap.bundle.min.js`。

## 測試檢查清單

每次修改後請確認：

- 首頁可正常開啟。
- Header Logo 正常顯示。
- Navbar 手機版可展開 / 收合。
- Carousel 可自動輪播，左右按鈕可切換。
- 所有圖片沒有破圖。
- 產品 Card 在桌機為 4 欄，手機可自動換行。
- 頁尾電話、信箱、地址圖標正常顯示。
- 頁尾公司資訊不重疊。
- 不存在 CDN 連結。

可用搜尋確認是否還有外部連結：

```powershell
Select-String -Path .\index.html -Pattern "https://|cdn"
```

若沒有必要，應保持查詢結果為空。

## 編碼與語言

- HTML 語言：`zh-Hant`
- 檔案建議使用 UTF-8
- 文字內容以繁體中文為主
- 公司英文名稱目前為：`Move information Co., Ltd.`

## 自訂 JavaScript

自訂互動腳本統一寫在：

```text
js/main.js
```

請在 `index.html` 中於 `bootstrap.bundle.min.js` 之後載入：

```html
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/main.js"></script>
```

### 已實作事件

| 元素 | id | 事件 | 說明 |
|------|----|------|------|
| 加入購物車按鈕 | `addToCartBtn` | `click` | 顯示 alert，並發送 GA4 `add_to_cart` 事件 |

GA4 事件規格（`add_to_cart`）依 Google Analytics 4 電商事件標準，包含 `currency`、`value`、`items` 陣列等參數。`gtag` 函式由 `index.html` 頭部的全域 GA4 腳本提供，`main.js` 可直接呼叫。

## 交接備註

本網站目前為靜態頁面，可直接用瀏覽器開啟 `index.html` 預覽，不需要啟動開發伺服器。

若未來要新增其他頁面，建議沿用：

```html
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/icons.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
```

並在頁面底部載入：

```html
<script src="js/bootstrap.bundle.min.js"></script>
```

##github

### HTTPS
https://github.com/kudraw999/Move-on-website.git
### SSH
git@github.com:kudraw999/Move-on-website.git

##對外發佈網址

https://kudraw999.github.io/Move-on-website/

