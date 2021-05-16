# Introduction
javascript를 공부하면서 기억하고 싶은 코드

<br />

# Contents
- [alert](#close-alert)
- [Todolist](#to-do-list)
- [random_menu](#random-menu)
- [modal](#modal-login)
- [carousel](#slide-image)
- [tab](#tab-UI)
- [interactive_form](#interactive-form)
- [scroll_navbar](#scroll-navbar)
- [scroll_UI](#scroll-UI)
- [typing_animation](#typing-animation)
- [Ajax](#ajax-get)
<br />
<br />
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

<a name="modal-login"></a>

# modal
로그인 버튼을 누르면 로그인 모달창이 위에서 내려오는 기능을 jQuery를 통해 구현

### > 기억하고 싶은 부분
- jQuery CDN 방식으로 적용하기
  ```html
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="index.js"></script>
  ```
- 로그인 버튼을 누르면 로그인 모달창이 위에서 내려오는 애니메이션 추가 (CSS 애니메이션 이용)
  ```css
  .modal {
    transform: translateY(-100%);
    transition: transform 1s;
  }

  .slide-down {
    transform: translateY(0);
  }
  ```
  ```js
  $('.btn-login').click(() => {
    $('.modal').addClass('slide-down');
  });
  ```
- input 값을 입력하지 않고 제출 버튼을 누르면 입력하라는 메시지 출력
  ```js
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
  ```

<br />

<a name="slide-image"></a>

# carousel
carousel 기능을 jQuery를 통해 구현

### > 기억하고 싶은 부분
- 슬라이드 이미지를 감싸는 박스의 총너비를 '이미지갯수 * 100vw' 로 지정해주고, 각 이미지 너비를 100vw로 지정
  ```css
  .carousel-container {
    overflow: hidden;
  }

  .carousel-box {
    width: 300vw;
  }

  .corousel-image1 {
    width: 100vw;
    float: left;
  }
  ```
- 반복되는 코드를 변수를 활용함으로써 코드의 확장성을 높인다.

<br />

<a name="tab-UI"></a>

# tab
tab 버튼을 클릭하면 각 tab에 맞는 내용이 보여지는 기능 구현

### > 기억하고 싶은 부분
- 어떤 탭의 클래스를 제거해야 할 지 모르니 우선 탭 전체의 클래스를 제거한 후, 클릭한 탭에 클래스를 추가한다.
- 반복되는 코드를 반복문으로 작성해 코드의 가독성을 높임

<br />

<a name="interactive-form"></a>

# interactive_form
선택한 값에 따라 다음 선택창 내용이 달라지는 기능 구현

### > 기억하고 싶은 부분
- 먼저 변경되는 선택창 부분의 내용을 없애고, 자바스크립트로 option 태그를 생성해서 추가해준다.

<br />

<a name="scroll-navbar"></a>

# scroll_navbar
아래로 스크롤하면 navbar UI가 변경되는 애니메이션 구현

### > 기억하고 싶은 부분
- block element의 navbar가 position 속성값으로 fixed를 부여받으면서, 인라인 요소와 같이 width 값이 content에 맞게 조절된다.
  ```css
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  ```
- 현재 스크롤바 수직 위치를 가져오는 법
  ```js
  $(window).scrollTop()
  ```

<br />

<a name="scroll-UI"></a>

# scroll_UI
스크롤하면 요소가 특정 위치에서 멈추고 다른 요소가 덮어지면서 점점 투명해지는 기능 구현

### > 기억하고 싶은 부분
- 특정 위치인 두 지점에서의 불투명도가 각각 0과 1이면 그 사이의 중간값이 존재하는데, 이를 1차함수를 통해 알아낼 수 있다.
  ```
  y = ax + b (y축 - opacity, x축 - 현재 스크롤 수직 위치)

  1 = a * 불투명도가 1일 때 위치 + b
  0 = a * 불투명도가 0일 때 위치 + b

  👉🏻 위의 방정식을 통해 a와 b 값을 구하면, 스크롤 위치에 따라 변하게 될 opacity 값을 알아낼 수 있다.
  ```
  ```js
  let opacity = a * height + b
  ```

<br />

<a name="typing-animation"></a>

# typing_animation
글자가 타이핑되는 애니메이션 기능 구현

### > 기억하고 싶은 부분
- setTimeout 함수를 이용해 글자를 하나씩 추가하면서 나타나게 한다.
- 다른 글자에도 적용할 수 있게 함수로 기능 구현

<br />

<a name="ajax-get"></a>

# Ajax
ajax 통신으로 새로고침없이 데이터 가져오는 기능 구현

### > 기억하고 싶은 부분
- jQuery ajax 함수를 사용하면 받아온 json 데이터를 알아서 object로 변환해준다.