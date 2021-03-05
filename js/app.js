$(document).ready(function(){
  $('li').click(function(){
    $(this).addClass('active')  
  })
  $('li').mouseleave(function(){
    $(this).removeClass('active')  
  })
  $('a').mouseenter(function(){
    $(this).addClass('active')
  })
  $('a').mouseleave(function(){
    $(this).removeClass('active')
  })
});



