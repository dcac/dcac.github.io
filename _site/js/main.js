$(document).ready(function () {

    $(window).scroll(function () {
      if ($(document).scrollTop() > $(window).height()*.9) {
          $("article img").addClass("scrolled");
    } else {
          $("img").removeClass("scrolled");
    }
  });
  $(window).scroll(function () {
      if ($(document).scrollTop() > $(window).height()*.9) {
          $("#menu-toggle.site-nav").addClass('sidebar-active');
    } else {
          $("#menu-toggle.site-nav").removeClass('sidebar-active');
    }
  });
 
  function winResized() {
  	var $image=$('#story-title');
  	if ($image.size()) {
  		var ww=$(window).width();
  		var wh=$(window).height();
  		var iw=$image.width();
  		var ih=$image.height();
  		var f=Math.max(ww/iw,wh/ih);
  		var iwr=Math.round(iw*f);
  		var ihr=Math.round(ih*f);
  		$image.css({
  			'width': iwr,
  			'height': ihr,
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
        'height':(($(window).height()))+'px',
        'width':(($(window).width()))+'px',
    });
    $(function(){
      $('#title').css({
        'height':(($(window).height()))+'px',
        'width':(($(window).width()))+'px',
        'overflow':'hidden'
    });
      
          $('button.down-arrow').css({'left':(($(window).width()/2))+'px'});
 // This is used to create a 145px gutter on the left side for the DC&C logo - not necessary with title bar.
/*
        if ($(window).width() < 960){
        $('#title').css({'width':(($(window).width())-145)+'px'});
          $('#title').css({'left':'145px'});
        $('#body-text').css({'width':(($(window).width())-145)+'px'});
          $('#body-text').css({'left':'145px'});
      }
      else { 
*/     
        $('#title').css({'width':(($(window).width()))+'px'});
        $('#body-text').css({'width':(($(window).width()))+'px'});
/*
      }
*/  
      $(window).resize(function(){
        $('#title').css({'height':(($(window).height()))+'px'});
        $('button.down-arrow').css({'left':(($(window).width()/2))+'px'});
       
        if ($(window).width() <= 960){
/* 
          $('#title').css({'width':(($(window).width())-145)+'px'});
          $('#title').css({'left':'145px'});
          $('#body-text').css({'width':(($(window).width())-145)+'px'});
          $('#body-text').css({'left':'145px'});
*/
          $('#main-title').css({'padding-left':'145px'});
        }
/*
        else{  
*/    

          $('#title').css({'width':(($(window).width()))+'px'});
          $('#title').css({'left':'0px'});
          $('#body-text').css({'width':(($(window).width()))+'px'});
          $('#body-text').css({'left':'0px'});
/*
        }
*/   
      });

    });
  
  })
  $( '.down-arrow' ).on('click', function(event) {
    $("html, body").animate({ scrollTop: $('#body-text').offset().top }, 500);
  });
  
 
 // Change the h1,h2 CSS when waypoint #body-text is reached   
   $('#body-text').waypoint(function() {
     $('#main-title').addClass('title-top animated slideInDown');
     $('h1').addClass('top');
     $('h2').addClass('top');
     $('h1').removeClass('hero');
     $('h2').removeClass('hero');
     $('section.title').removeClass('title');
     $('p.article-share').css({'display':'block'});
     $('#menu-toggle-top').css({'display':'block'});
    });

// Revert h1, h2 CSS when #main-title is scrolled up to
    $('.down-arrow').waypoint(function() {
     $('#main-title').removeClass('title-top animated slideInDown');
     $('h1').removeClass('top');
     $('h2').removeClass('top');
     $('h1').addClass('hero');
     $('h2').addClass('hero');
     $('#main-title').addClass('title');
     $('p.article-share').css({'display':'none'});
     $('#menu-toggle-top').css({'display':'none'});
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
 
// Change the main navbar on scroll
    //$(document).scroll(function() {
        //var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
        //var channel = Math.round(alpha * 255);
        //$("div.navbar").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
       // $("div.navbar").css('height', '50px');
    //});
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
 
 //The folllowing is to get the right side bar to become hwne it hits the viewport top 
    

 
    var row = $("#row-height");
    var siderow = $("#side-row");
    var side = $("#side-column");
    var sidebar = $("#home-sidebar");
    //Stick the home sidebar to the top when reached
    $('#home-sidebar').waypoint(function(direction) {
      if (direction === 'down') {
        sidebar.css({
          position:"fixed",
          top: "75px"
        });
        siderow.css({
          height: row.height()
        });
       //alert("size="+scrollDifferential)
      }
      else if (direction === 'up') {
        sidebar.css({
          position:"absolute",
          top: "0",
          bottom: "auto"
        });
        siderow.css({
          height: row.height()
        });
      }
    },{
      offset: 75 // Apply "stuck" when element 75px from top
    });
    $("#row-height").waypoint(function(direction){
      if (direction === 'down') {
        sidebar.css({
          position:"absolute",
          bottom: "0",
          top: "auto"
        });
        siderow.css({
          height: row.height()
        });
      }
      else 
      if (direction === 'up') {
        sidebar.css({
          position:"fixed",
          top: "75px"
        });
      }
    },{
      offset: $.waypoints('viewportHeight')-row.height()-110
    });
    
    // Display the small top nav when the large header scrolls offscreen
    $("#top-nav").waypoint(function(direction){
      $('#mini-top-nav').addClass('fixed slideInDown');
      $(".mini-top-nav").css('display', 'block');
    },{
      offset: function() { return $(this).height() * -1; }
    });
    
});