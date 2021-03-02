$(document).ready(function(){
    $('li').on('click', function(){
      $(this).addClass('active')
    })
    $('a').on('mouseover',function(){
      $(this).addClass('active')
    })
});