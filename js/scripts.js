$(document).ready(function(){
/*what we do toogle starts*/
  $('.clickable').click(function(){
      $("#show1").toggle(800);
      $("#hide1").toggle(800);
    });


    $('.clickable1').click(function(){
        $("#show2").toggle(800);
        $("#hide2").toggle(800);
      });

      $('.clickable2').click(function(){
          $("#show3").toggle(800);
          $("#hide3").toggle(800);
        });
  /*what we do toogle ends*/

});
/*javascript starts*/
  function myFunction()
  {
    var name=document.getElementById("names").value;
    alert(name+" we have received your message. Thank you fro reaching out to us. ");
  };
/*javascript ends*/
