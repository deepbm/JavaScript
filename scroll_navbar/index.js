$(window).on('scroll', () => {
  if ($(window).scrollTop() >= 100) {
    $('.nav-menu').addClass('nav-black');
  } else {
    $('.nav-menu').removeClass('nav-black');
  }
});