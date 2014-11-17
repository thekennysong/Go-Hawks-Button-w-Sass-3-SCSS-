$('[data-js="btn"]').hover(function(e){
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('body').addClass('blur');
  } else {
    $('body').removeClass('blur');
  }
  e.preventDefault();
});