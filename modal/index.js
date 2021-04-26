$('.btn-login').on('click', () => {
  $('.black-background').addClass('slide-down');
});

$('.btn-close').on('click', () => {
  $('.black-background').removeClass('slide-down');
});

$('.btn-menu').click(() => {
  $('.side-menu').animate({
    marginLeft: '0px'
  })
});

$('.btn-close-side').click(() => {
  $('.side-menu').animate({
    marginLeft: '-150px'
  })
});

$('.btn-nav-sub').on('click', () => {
  $('.nav-sub').slideToggle();
});

$('form').on('submit', e => {
  if ($('.input-email').val() === '') {
    e.preventDefault();
    $('.alert-email').show();
  }
  if ($('.input-pw').val() === '') {
    e.preventDefault();
    $('.alert-pw').show();
  }
});