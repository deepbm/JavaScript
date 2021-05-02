$('.btn').click(() => {
  $.ajax({
    url: 'https://codingapple1.github.io/hello.txt',
    type: 'GET'
  }).done(data => {
    $('#greeting').html(data);
  });
});