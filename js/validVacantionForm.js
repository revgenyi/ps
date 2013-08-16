$(document).ready(function(){
  $("#runStep2").click(function(result){
    $('#step2 > input[required="required"]').each(function(){
    if(!$(this).val().length){
      // event.preventDefault();
      $(this).css('border', '2px solid #e03229');
      return false;
      }
    });
    if (result = false) {
      return false;
    };
  });
});