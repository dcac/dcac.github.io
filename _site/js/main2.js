$(document).ready(function () {

  /*$('#down-arrow').waypoint(function(direction) {
  if (direction ==="down"){
    $("#main-title").fadeOut();
    $("#story-title").css({'opacity':'0'});
    }
  });*/

  function winResized() {
    var $image=$('#story-title');
    if ($image.size()) {
      var ww=$(window).width();
      var wh=$(window).height();
      $image.css({
      'width': ww,
      //'height': wh
      //'height': '500px'
      });
    }
  }
  $(window).load(function() {
    winResized();
  }).bind('resize',function() {
    winResized();
  });
  $(function () {
    $('#story-title').css({
      //'height':(($(window).height()))+'px',
      'width':(($(window).width())) +'px',
    });
    /*
$(function(){
      $('#main-title').css({
        //'height':(($(window).height()))+'px',
        'width':(($(window).width()))+'px',
        'overflow':'hidden',
        'padding-left':'145px'
      });
      $('#down-arrow').css({'left':(($(window).width()/2))+'px'});
      $('#main-title').css({'width':(($(window).width()))-145+'px'});
     // $('#body-text').css({'width':(($(window).width()))+'px'});
      $(window).resize(function(){
        //$('#story-title').css({'height':(($(window).height()))+'px'});
        $('button.down-arrow').css({'left':(($(window).width()/2))+'px'});
        if ($(window).width() <= 960){
          $('#main-title').css({'padding-left':'145px'});
        }
        $('#main-title').css({'width':(($(window).width()))+'px'});
        $('#main-title').css({'left':'0px'});
        $('#body-text').css({'width':(($(window).width()))+'px'});
        $('#body-text').css({'left':'0px'});
      });
    });
*/
  });
  $( '#down-arrow' ).on('click', function() {
    $("html, body").animate({ scrollTop: $('#body-text').offset().top }, 500);
  });

 // Change the h1,h2 CSS when waypoint #body-text is reached   
/*
   $('#body-text').waypoint(function(direction) {
     if (direction === "down"){
       $('#main-title').removeClass('main-title');
       $('#main-title').css({'display':'none'});
       $('#main-title').addClass('main-title-top mm-fixed-top');
       $('h1.hero').addClass('top');
       $('h2.hero').addClass('top');
       $('h1.hero').removeClass('hero');
       $('h2.hero').removeClass('hero');
       $('p.article-share').css({'display':'block'});
       $('#menu-toggle-top').css({'display':'block'});
       $('#nav-button-container').css({'display':'none'});
       $('#main-title').slideDown(400);
     }
    });

// Revert h1, h2 CSS when #main-title is scrolled up to
  $('#down-arrow').waypoint(function(direction) {
    if (direction === "up"){
       $('#main-title').removeClass('main-title-top animated slideInDown');
       $('h1.top').addClass('hero');
       $('h2.top').addClass('hero');
       $('h1.top').removeClass('top');
       $('h2.top').removeClass('top');
       $('#main-title').addClass('main-title');
       $('p.article-share').css({'display':'none'});
       $('#menu-toggle-top').css({'display':'none'});
       $('#nav-button-container').fadeIn('fast');
       $('#main-title').fadeIn(800);
      }
  });
*/
// Initialize contentshare.js variables
    $("p").contentshare({
        shareIcons : ["fa-facebook","fa-twitter"],
      shareLinks : ["http://www.facebook.com/sharer.php?s=100&p[url]="+document.URL+"&p[title]="+document.title+"&p[summary]={{text}}" , "http://twitter.com/intent/tweet?text={{text}}%0a" + window.location.href],
      minLength  : 1,
    });
    $.fn.contentshare.defaults.shareable.on('mouseup',function(){
        $.fn.contentshare.showTooltip();
    });
    
    
//Home Page scripts
    
// Change the main navbar on scroll
/*
    $('#main-container').waypoint(function() {
      $("div.navbar").css('height', '50px');
      $("a.navbar-link").css('height', '50px');
      $("a.navbar-brand").css('height', '50px');
      $("a.navbar-brand").css('background', 'url(\'../img/logo-sm.png\') 10px 15px no-repeat');
    }, { offset: 25 });
    $('#main-container').waypoint(function() {
      $("div.navbar").css('height', '125px');
      $("a.navbar-link").css('height', '125px');
      $("a.navbar-brand").css('height', '125px');
      $("a.navbar-brand").css('background', 'url(\'../img/logo.png\') 15px 15px no-repeat');
    }, { offset: 120 });
*/
    
    // Display the small top nav when the large header scrolls offscreen
    $("#top-nav").waypoint(function(direction){
      if (direction === "down"){
        $('#mini-top-nav').addClass('fixed');
        $('#mini-top-nav').addClass('mini-top-nav-visible');
        $('#mini-top-nav').removeClass('mini-top-nav-hidden');
        $('#mini-top-nav.mini-top-nav-visible').slideDown(250);
      }
      else if (direction === "up"){
        $('#mini-top-nav').removeClass('fixed');
        $('#mini-top-nav').removeClass('mini-top-nav-visible');
        $('#mini-top-nav').addClass('mini-top-nav-hidden');
        $('#mini-top-nav.mini-top-nav-visible').slideUp(250);
      }
    },{
      //offset: function() { return $(this).height() * -1; }
      offset:-500
    });
//  $('.svg-inject').svgInject();
});