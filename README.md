# Introduction
javascript를 공부하면서 기억하고 싶은 코드

<br />

# Contents
- [Todolist](#to-do-list)
- [random_menu](#random-menu)
- [alert](#close-alert)
<br />
<br />
<br />

<a name="to-do-list"></a>

# Todolist
이벤트 위임을 활용해 리스트를 클릭하면 취소선이 생기는 이벤트 기능 구현

### > 기억하고 싶은 부분
리스트 각각에 이벤트 리스너를 추가하지 않고 부모 요소에 이벤트 리스너 추가 (이벤트 위임) <br />
대신 정확하게 리스트를 클릭할 시 작동하도록 조건을 걸어줘야 한다. ⭐️

<br />

<a name="random-menu"></a>

# random_menu
오늘의 점심 메뉴를 랜덤으로 선택해주는 기능을 Promise 객체를 이용하여 구현

### > 기억하고 싶은 부분
- 배열 중에서 랜덤으로 한 요소 선택하기
  ```js
  const randomIndex = Math.floor(Math.random() * arr.length);
  arr[randomIndex];
  ```
- async/await 구문 활용하여 동기 실행 스타일로 표현

<br />

<a name="close-alert"></a>

# alert
부트스트랩에 있는 alerts 컴포넌트 중 하나를 가져와, 닫기 버튼을 누르면 alert 창이 사라지는 기능 구현

### > 기억하고 싶은 부분
- 부트스트랩 CDN 방식으로 적용하기
  ```html
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  ```