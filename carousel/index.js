let n = 0;

$('.slide-left').click(() => {
  $('.carousel-box').css('transform', `translateX(-${n-1}00vw)`);
  n -= 1;
});

$('.slide-right').click(() => {
  if (n < 2) {
    $('.carousel-box').css('transform', `translateX(-${n+1}00vw)`);
    n += 1;
  }
});