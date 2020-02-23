/*jquery starts*/
$(document).ready(function(){
  /*animation effect starts*/
  $("#image .row .content #clickMe")
  .slideUp(2000).slideDown(2000)
  .slideUp(2000).slideDown(2000)
  .slideUp(2000).slideDown(2000)
  .slideUp(2000).slideDown(2000)
  .slideUp(2000).slideDown(2000);
  /*animation effect ends*/
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
/*jquery ends*/
/*javascript starts*/
  function myFunction()
  {
/*check input validity*/
    var message=document.getElementById("message").value;
    var checkName = document.getElementById("names").value;
    var checkEmail = document.getElementById("email").value;
        if (checkName == "")
           {
              alert("Name must be filled out");
              return false;
           }
          else if (checkEmail == "")
          {
              alert("Email must be filled out");
              return false;
          }
          else if (message == "")
          {
              alert("please write a message");
              return false;
          }
          else
          {
            alert(checkName+" we have received your message. Thank you for reaching out to us. ");
          }


  };
/*javascript ends*/
