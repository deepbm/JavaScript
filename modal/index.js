// login modal
$('.btn-login').on('click', () => {
  $('.alert-email').hide();
  $('.alert-pw').hide();
  $('.black-background').addClass('slide-down');
});

$('.btn-close').on('click', () => {
  $('.black-background').removeClass('slide-down');
});

// alert message
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


// menu trigger
$('.btn-nav-sub').on('click', () => {
  $('.nav-sub').slideToggle();
});