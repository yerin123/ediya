$(function(){

setInterval(function(){
  $(".imgs").animate({"left":"-1920px"},1000,function(){
    $(this).append($(".imgs > li:first")).css("left",0);
  })
},4500);



})