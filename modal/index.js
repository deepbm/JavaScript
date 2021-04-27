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

$('.btn-slide1').click(() => {
  $('.slide-container').removeClass('slide-100 slide-200')
});

$('.btn-slide2').click(() => {
  $('.slide-container').addClass('slide-100')
});

$('.btn-slide3').click(() => {
  $('.slide-container').addClass('slide-200')
});

// let p = 0;
// $('.btn-right').click(() => {
//   if (p === 0) {
//     p = 100;
//     $('.slide-container').addClass('slide-100')
//   } else if (p === 100) {
//     p = 200;
//     $('.slide-container').addClass('slide-200');
//   }
// });

// $('.btn-left').click(() => {
//   if (p === 100) {
//     p = 0;
//     $('.slide-container').removeClass('slide-100')
//   } else if (p === 200) {
//     $('.slide-container').removeClass('slide-200')
//     $('.slide-container').addClass('slide-100');
//     p = 100;
//   }
// });

let n = 0;
$('.btn-left').click(() => {
  $('.slide-container').css('transform', `translateX(-${n-1}00vw)`);
  n -= 1
});

$('.btn-right').click(() => {
  if (n < 2) {
    $('.slide-container').css('transform', `translateX(-${n+1}00vw)`)
    n += 1
  }
});