$(document).ready(function(){
  $("#hrefStep1").click(function(){
    $("#step1").css("display","block");
    $("#step2,#step3,#step4").css("display","none");
    return false;
  });
  $("#runStep2,#hrefStep2").click(function(){
    $("#step2").css("display","block");
    $("#step1,#step3,#step4").css("display","none");
    return false;
  });
  $("#runStep3,#hrefStep3").click(function(){
    $("#step3").css("display","block");
    $("#step1,#step2,#step4").css("display","none");
    return false;
  });
  $("#runStep4,#hrefStep4").click(function(){
    $("#step4").css("display","block");
    $("#step1,#step2,#step3").css("display","none");
    return false;
  });
  // $("#btnSendForm").click(function(){
  //     $("#step1,#step2,#step3,#step4").show();
  // });
})