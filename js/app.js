$(document).ready(function(){
  $('li').click(function(){
    $(this).addClass('active')  
  })
  $('a').mouseover(function(){
    $(this).addClass('active')
  })
  $('a').mouseleave(function(){
    $(this).removeClass('active')
  })
});




