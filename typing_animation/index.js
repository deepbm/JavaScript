const tag = document.querySelector('h1');
const letter = document.querySelector('h1').innerHTML;

$('.btn').click(() => {
  // tag.innerHTML = '';

  // for (let i = 0; i < letter.length; i++) {
  //   setTimeout(() => {
  //     tag.innerHTML = tag.innerHTML + letter[i];
  //   }, 500 * i);
  // }

  typingAnimation(tag, letter);
  
});

function typingAnimation(tag, letter) {
  tag.innerHTML = '';

  for (let i = 0; i < letter.length; i++) {
    setTimeout(() => {
      tag.innerHTML = tag.innerHTML + letter[i];
    }, 500 * i);
  }
}