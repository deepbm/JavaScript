// $('#option1').on('change', () => {
//   if ($('#option1').val() === '바지') {
//     $('.select-size').show();
//   } else {
//     $('.select-size').hide();
//   }
// });


// make HTML
// $('#option1').on('change', () => {
//   if ($('#option1').val() === '셔츠') {
//     $('#option2').html('');
//     let shirtsSize = `<option>95</option>
//     <option>100</option>
//     <option>105</option>`
//     $('#option2').append(shirtsSize);
//   } else if ($('#option1').val() === '바지') {
//     $('#option2').html('');
//     let pantsSize = `<option>28</option>
//     <option>30</option>
//     <option>32</option>`
//     $('#option2').append(pantsSize);
//   }
// });


// forEach
$('#option1').on('change', () => {
  if ($('#option1').val() === '셔츠') {
    $('#option2').html('');
    let shirtsSize = [95, 100, 105];
    shirtsSize.forEach(size => {
      $('#option2').append(`<option>${size}</option>`);
    });
  } else if ($('#option1').val() === '바지') {
    $('#option2').html('');
    let pantsSize = [28, 30, 32, 34, 36];
    pantsSize.forEach(size => {
      $('#option2').append(`<option>${size}</option>`);
    });
  }
});