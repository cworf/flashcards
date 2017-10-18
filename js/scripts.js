$(document).ready(function() {
  // $('.card').click(function(){
  //   $('.card').not(this).removeClass('show');
  //   $(this).toggleClass('show');
  // });

  $('.btn').click(function(){
    $('.btn').not(this).parent().next().removeClass('show');
    $(this).parent().next().toggleClass('show');
  });
});
