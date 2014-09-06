$(document).ready(function () {

  function winResized() {
    var $image=$('#story-title');
    if ($image.size()) {
      var ww=$(window).width();
      //var wh=$(window).height();
      $image.css({
      'width': ww,
      //'height': wh
      //'height': '500px'
      });if($(window).width() < 1200){
        $('#title-img').addClass('title-img');
        $('#title-img').removeClass('title-img-fade');
        $('#story-title').css({'background-color':'transparent'});
        //$.stellar('refresh');
      } 
      else{
          $('#title-img').addClass('title-img-fade');
          $('#title-img').removeClass('title-img');
          $('#story-title').css({'background-color':'#000'});
          //$.stellar('refresh');
      } 
    }
    var $imageHome=$('#home-feature');
    if ($imageHome.size()) {
      var hww=$(window).width();
      //var wh=$(window).height();
      $imageHome.css({
      'width': hww,
      //'height': wh
      //'height': '500px'
      });if($(window).width() < 1200){
        $('#home-feature-img').addClass('home-feature-img');
        $('#home-feature-img').removeClass('home-feature-img-fade');
        $('#home-feature').css({'background-color':'transparent'});
        //$.stellar('refresh');
      } 
      else{
          $('#home-feature-img').addClass('home-feature-img-fade');
          $('#home-feature-img').removeClass('home-feature-img');
          //$.stellar('refresh');
      } 
    }
    //hide and show the mini nav bar for desktop and tablet layouts
    $("#top-nav").waypoint(function(direction){
      if ((direction === "down") && ($(window).width() > 640)){
        $('#mini-top-nav.mini-top-nav-hidden').css({'position':'fixed'});
        $('#mini-top-nav.mini-top-nav-hidden').css({'display':'block'});
        $('#mini-top-nav.mini-top-nav-hidden').css({'top':'0'});
      }
      else if ((direction === "up") && ($(window).width() > 640)){
        $('#mini-top-nav.mini-top-nav-hidden').css({'top':'-50px'});
      }
    },{
      offset:-100
    });
    if($(window).width() > 640){ 
      $(window).stellar({
        horizontalScrolling: false,
        verticalOffset: 0,
        horizontalOffset: 0,
    		hideDistantElements: false,
    		responsive: true
      });
      $('#title-img').attr("data-stellar-background-ratio",".25");
      $('#home-feature-img').attr("data-stellar-background-ratio",".25");
      $('.status-row').attr("data-stellar-ratio","1.1");
      $('.people-row').attr("data-stellar-ratio","1.1");
    }
    else{
      //alert('hi');
      $('#title-img').removeAttr("data-stellar-background-ratio");
      $('#home-feature-img').removeAttr("data-stellar-background-ratio");
      $('.status-row').removeAttr("data-stellar-ratio");
      $('.people-row').removeAttr("data-stellar-ratio");

    }
  }
  $(window).load(function() {
    winResized();
    
  }).bind('resize',function() {
    winResized();
    $('#mini-top-nav.mini-top-nav-hidden').removeAttr('style');
    $("#top-nav").waypoint(function(){
        $('#mini-top-nav.mini-top-nav-hidden').css({'top':'0'});
    },{
      offset:-100
    });
  });
  $(function () {
    $('#story-title').css({
      //'height':(($(window).height()))+'px',
      'width':(($(window).width())) +'px',
    });
  });

// Initialize contentshare.js variables
    $("p").contentshare({
        shareIcons : ["fa-facebook","fa-twitter"],
      shareLinks : ["http://www.facebook.com/sharer.php?s=100&p[url]="+document.URL+"&p[title]="+document.title+"&p[summary]={{text}}" , "http://twitter.com/intent/tweet?text={{text}}%0a" + window.location.href],
      minLength  : 1,
    });
    $.fn.contentshare.defaults.shareable.on('mouseup',function(){
        $.fn.contentshare.showTooltip();
    });
    
    $(window).resize();
});