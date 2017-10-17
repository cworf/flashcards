$(document).ready(function() {
  $('.card').click(function(){
    $('.card').not(this).removeClass('show');
    $(this).toggleClass('show');
  });
});
