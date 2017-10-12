$(document).ready(() => {
  let count = /\d/.exec($('#cart-item-count').text());
  $('#cart-button').click(function() {
    $('#cartModal').show();
    $('.cart').show();
  });
  $('.add-cart-btn').click(function() {
    count++;
    $('#cart-item-count').text(`(${count})`);
    $('.cartItems').append(`${$(this).siblings('.item-name').text()} ${$(this).siblings('.item-price').text()}<br>`);
  });
  $('#cartModal').click((e) => {
    if (e.target.id === 'cartModal') {
      $('#cartModal').css('display', 'none');
      $('.cart').hide();
    }
  });
});
