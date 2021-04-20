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
const menus = menuArr('hamburger', 'sandwich', 'pizza');

// 랜덤으로 메뉴 하나 선택
function pickMenu(menu) {
  const p = new Promise((resolve, reject) => {
    if (menu.length === 0) {
      reject(new Error('메뉴가 없습니다.'))
    } else {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * menu.length)
        resolve(menu[randomIndex])
      }, 2000)
    }
  });
  return p;
}

pickMenu(menus)
  .then((menu) => {
    console.log(`오늘의 점심메뉴는 ${menu.name}!!`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log('매일 새로운 메뉴로 변경됩니다.');
  });


// async/await 함수
async function pickMenu(menu) {
  const p = new Promise((resolve, reject) => {
    if (menu.length === 0) {
      reject(new Error('메뉴가 없습니다.'))
    } else {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * menu.length)
        resolve(menu[randomIndex])
      }, 2000)
    }
  });
  return p;
}

async function getMenu() {
  try {
    const menu = await pickMenu(menus);
    console.log(`오늘의 점심메뉴는 ${menu.name}!!`)
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('매일 새로운 메뉴로 변경됩니다.');
  }
}

getMenu();