// make menu Array data
function menuArr(...foods) {
  const menu = foods.map((el, i) => { 
    const tmp = {};
    tmp.id = i
    tmp.name = el
    return tmp;
    });
  return menu
}

// 원하는 메뉴를 파라미터에 입력하세요
const menu = menuArr('hamburger', 'sandwich', 'pizza');