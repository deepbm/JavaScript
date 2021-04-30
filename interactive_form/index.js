$('#option1').on('change', () => {
  if ($('#option1').val() === '바지') {
    $('.select-size').show();
  } else {
    $('.select-size').hide();
  }
});