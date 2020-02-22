$(document).ready(function(){

  $('.clickable').click(function(){
      $("#show1").toggle();
      $("#hide1").toggle();
    });


    $('.clickable1').click(function(){
        $("#show2").toggle();
        $("#hide2").toggle();
      });
      $('.clickable2').click(function(){
          $("#show3").toggle();
          $("#hide3").toggle();
        });
  $(".portfolio .jumbotron .row #moja img").hover(function(){
    $("#moja .dis1").slideUp();

  });
  $(".portfolio .jumbotron .row #mbili img").hover(function(){
    $("#mbili .dis2").slideUp();

  });
});
