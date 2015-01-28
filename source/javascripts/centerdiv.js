function centerDiv(){
var winH = $(window).height();
var mastH = $('#masthead').height();
var paddMath = ((winH - mastH)/2)-100;
$('#masthead').css('margin-top', paddMath);
}

setInterval(function(){
  centerDiv();
}, 10);

$(window).resize(function(){
  centerDiv();
});
