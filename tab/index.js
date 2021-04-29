const tabBtn = $('.tab-button');
const tabContent = $('.tab-content');

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn.eq(i).click(() => {
    tabBtn.removeClass('active');
    tabContent.removeClass('show');

    tabBtn.eq(i).addClass('active');
    tabContent.eq(i).addClass('show');
  });
}