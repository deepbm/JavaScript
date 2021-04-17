const toDoList = document.querySelector('#to-do-list');

function updateToDo(event) {
  // 정확히 자식 요소만 클릭했을때 이벤트 주기 위해 조건을 걸어준다.
  if (event.target.classList.contains('item')) {  // 또는 if (evnet.target.tagName === 'LI')
    event.target.classList.toggle('done');
  }
}

toDoList.addEventListener('click', updateToDo);

// 리스트를 추가해도 잘 동작하는지 확인
const newList = document.createElement('li');
newList.textContent = "추가 리스트";
newList.classList.add('item');
toDoList.append(newList);  // 리스트의 맨 마지막에 "추가 리스트" 추가