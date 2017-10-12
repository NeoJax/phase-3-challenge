$(document).ready(() => {
  let count = /\d/.exec($('#cart-item-count').text());
  let total = parseFloat($('#total-cost').text().slice(1));
  $('#cart-button').click(function() {
    $('#cartModal').show();
    $('.cart').show();
  });
  $('.add-cart-btn').click(function() {
    count++;
    $('#cart-item-count').text(`(${count})`);
    $('.cartItems').append(`${$(this).siblings('.item-name').text()}
     <span class="cartItemCost">${$(this).siblings('.item-price').text()}
     </span><br>`);
     total += parseFloat($(this).siblings('.item-price').text().slice(1));
     $('#total-cost').text(`$${total}`);
  });
  $('#closeModal').click(function() {
    $('#cartModal').css('display', 'none');
    $('.cart').hide();
  });
  $('#cartModal').click(function(event) {
    if (event.target.id === 'cartModal') {
      $('#cartModal').css('display', 'none');
      $('.cart').hide();
    }
  });
  $('#clearButton').click(function() {
    $('.cartItems').text('');
    $('#total-cost').text('$0.00');
  });
});
