const alert = document.querySelector('.alert');
const btn = document.querySelector('.close');

btn.addEventListener('click', closeAlert);

function closeAlert() {
  alert.classList.add('disappear')
}