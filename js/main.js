document.getElementById('addToCartBtn').addEventListener('click', function (e) {
  e.preventDefault();
  alert('您已將商品加入購物車');
  gtag('event', 'add_to_cart', {
    currency: '新台幣',
    value: 1234,
    items: [
      {
        item_id: 'SKU_12345',
        item_name: 'Stan and Friends Tee',
        affiliation: 'Google Merchandise Store',
        coupon: 'SUMMER_FUN',
        discount: 2.22,
        index: 0,
        item_brand: 'Google',
        item_category: 'Apparel',
        item_category2: 'Adult',
        item_category3: 'Shirts',
        item_category4: 'Crew',
        item_category5: 'Short sleeve',
        item_list_id: 'related_products',
        item_list_name: 'Related Products',
        item_variant: 'green',
        location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        price: 10.01,
        google_business_vertical: 'retail',
        quantity: 3
      }
    ]
  });
  window.location.href = 'goal.html';
});
