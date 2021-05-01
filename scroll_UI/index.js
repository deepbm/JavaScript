$(window).scroll(() => {
  let windowHeight = $(window).scrollTop();

  // y = ax + b (y축 - opacity, x축 - windowHeight)
  let cardOpacity = -1/574 * windowHeight + 996/574;
  $('.card-box').eq(0).css('opacity', cardOpacity);

  cardOpacity = -1/543 * windowHeight + 1731/543;
  $('.card-box').eq(1).css('opacity', cardOpacity);

});