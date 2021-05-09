/*
  1. hello.txt GET 요청 (https://codingapple1.github.io/hello.txt)
  2. 완료시 hello2.txt GET 요청 (https://codingapple1.github.io/hello2.txt)
  3. 완료시 hello2.txt 결과를 콘솔창에 출력
*/

// state: fulfilled, result: '안녕하세요 반갑습니다요.'\n
const hello = new Promise((resolve, rejected) => {
  $.get('https://codingapple1.github.io/hello.txt').done(response => {
    resolve(response);
  });
});

hello.then(response => {
  console.log(response);

  const hello2 = new Promise((resolve, rejected) => {
    $.get('https://codingapple1.github.io/hello2.txt').done(response => {
      resolve(response);
    });
  });

  // state: fulfilled, result: '두번째 인삿말입니다'\n
  return hello2;

}).then(result => {
  console.log(result);
});