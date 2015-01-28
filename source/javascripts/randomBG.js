$(function(){
  var images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'];
   
  $('body').animate().css({'background-image': 'url(https://s3.amazonaws.com/myfangate.com/brosafari2/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
});
