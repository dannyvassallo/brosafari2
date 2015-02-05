function analyticsClick(el){
  $(el).on('click', function(){
    ga('send', 'event',  'Footer Link', el );
  });
}

$(function(){
  analyticsClick('#facebook')
  analyticsClick('#twitter')
  analyticsClick('#instagram')
  analyticsClick('#spotify')
  analyticsClick('#youtube')
  analyticsClick('#itunes')
});
