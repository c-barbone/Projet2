var animating = false;

$('.hamburger-box').on('click touch', function() {
  if(!animating) {
    animating = true;
    $(this).toggleClass('open');
    $('.loop-glass-box').toggleClass('disable');
    $('.cp').toggleClass('open open-menu');
    setTimeout(function() {
      animating = false;
    }, 300);
  }
});
$('.loop-glass-box').on('click touch', function() {
  if(!animating) {
    animating = true;
    $(this).toggleClass('open');
    $('.hamburger-box').toggleClass('disable');
    $('.cp').toggleClass('open open-search');
    setTimeout(function() {
      animating = false;
    }, 300);
  }
});