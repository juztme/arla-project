$(document).ready(function () {
    $(".hoverli").hover(
  function () {
     $('ul.file_menu').slideDown('medium');
  }, 
  function () {
     $('ul.file_menu').slideUp('medium');
  }
);

});