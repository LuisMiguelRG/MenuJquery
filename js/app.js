$(document).ready(function () {
  $('a').hover(function () {
    $(this).css({ 'color': '#ea178c' });
  }, function () {
    $(this).css({ 'color': '' });
  });

  $('li a').click(function () {
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
});