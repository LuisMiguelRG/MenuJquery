$(document).ready(function(){
  $('li').click(function(){
    $(this).addClass('active a:after')  
  })
  $('li').mouseover(function(){
    $(this).removeClass('active a:after')  
  })
  $('a').mouseover(function(){
    $(this).addClass('active')
  })
  $('a').click(function(){
    $(this).addClass('active')
  })
});



