function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}

$('.ui.basic.modal')
  .modal('hide')
;

$("#imp_img").click(function(){
    $('.ui.basic.modal').modal('show');
  });

  $("#icon1").click(function(){
    $('.ui.basic.modal').modal('hide');
  });