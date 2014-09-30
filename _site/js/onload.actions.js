
//Stop hashes from jumping the page to the top

( function( $ ) {
   $( 'a[href="#"]' ).click( function(e) {
      e.preventDefault();
   } );
} )( jQuery );

//Stick the home sidebar to the top when reached


function winResized() {
  var mobileWidth = 640;

  if ($(window).width() > mobileWidth){  
    //Attach the sidebar to the top if it's smaler than the
    var row = $("#row-height");
    var siderow = $("#side-row");
    //var side = $("#side-column");
    var sidebar = $("#home-sidebar");
    var gridWidth = $(".post-image-home").width();
    var winHeight = ($.waypoints('viewportHeight')-65);
    //alert(gridWidth);
    //Make sure the sidebar width is tied to the grid on resize
  
    siderow.css({
      height: row.height(),
      width: gridWidth
    });
    sidebar.css({
      width: gridWidth
    });
    
    if (sidebar.height() < winHeight) {
      $('#row-height').waypoint(function(direction) {
        if (direction === 'down') {
          sidebar.css({
            position:"fixed",
            top: "65px",
            width: $(".post-image-home").width()
          });
          siderow.css({
            //height: row.height(),
            width: $(".post-image-home").width()
          });
        }
        else if (direction === 'up') {
          sidebar.css({
            position:"absolute",
            top: "0",
            bottom: "auto",
            width: $(".post-image-home").width()
          });
          siderow.css({
            //height: row.height(),
            width: $(".post-image-home").width()
          });
        }
      },{
        offset: 65 // Apply "stuck" when element 65px from top
      });
      $("#row-height").waypoint(function(direction){
        if (direction === 'down') {
          sidebar.css({
            position:"absolute",
            bottom: "0",
            top: "auto",
            width: $(".post-image-home").width()
          });
          siderow.css({
            //height: row.height(),
            width: $(".post-image-home").width()
          });
        }
        else
        if (direction === 'up') {
          sidebar.css({
            position:"fixed",
            top: "65px",
            width: $(".post-image-home").width()
          });
          siderow.css({
            //height: row.height(),
            width: $(".post-image-home").width()
          });
        }
      },{
        offset: $.waypoints('viewportHeight')-row.height()-65
      });
    }
  }
  //Stick the imdb sidebar to the top when reached

  var rowheight = $("#review-copy");
  var filmRow = $("#film-row");
  var filmInfo = $('#film-info');
  //var side = $("#side-column");
  var reviewSidebar = $("#review-sidebar");
  
  if (reviewSidebar.height() > rowheight.height()){
    rowheight.css({
      height: reviewSidebar.height()
    });
  }
  filmRow.css({
    height: rowheight.height()
  });
  
  //set the offset for releasing the IMDB sidebar when the bottom of the article text is reached.
  var scrollOffest = ($("#film-info").height()-$("#review-copy").height())+65;
  //alert(scrollOffest);
  
  // determine if the viewport is higher than the IMB information, and if so, allow the sidebar to fix itself to the top when scrolled to.
  var fixSidebar;
  if ($('#film-info').height() > $.waypoints('viewportHeight')-65){
      fixSidebar = false;
    //alert(fixSidebar);
    }
    else{
      fixSidebar = true;
    }
  $(window).resize(function(){
    reviewSidebar.css({
      width: filmRow.width()
    });
    filmInfo.css({
      width: filmRow.width()
    });
  });


  //If the viewport minus the top bar is taller than the sidebar, fix it in place
  
  if (fixSidebar) {
    $('#review-copy').waypoint(function(direction) {
    //alert(sidebar.width());
     if (direction === 'down') {
        reviewSidebar.css({
          top: "65px",
          width: reviewSidebar.width(),
          height: $.waypoints('viewportHeight')-110
          
        });
        if ($(window).width() <= 640){
            reviewSidebar.css({'position':'relative'});
          }
          else{
            reviewSidebar.css({'position':'fixed'});
          }
       //alert("size="+scrollDifferential)
      }
      else if (direction === 'up') {
        reviewSidebar.css({
          position:"absolute",
          top: "0",
          bottom: "auto",
          width: reviewSidebar.width()
        });
        filmInfo.css({
          position:"absolute",
          top:"0",
          bottom: "auto",
          width: reviewSidebar.width()
        });
      }
    },{
      offset: 65 // Apply "stuck" when element 65px from top
    });
    $("#review-copy").waypoint(function(direction){
      if (direction === 'down') {
        reviewSidebar.css({
          position:"absolute",
          bottom: "0",
          top: "auto",
          width: reviewSidebar.width()
        });
        filmInfo.css({
          position:"absolute",
          bottom:"0",
          top: "auto",
          width: reviewSidebar.width()
        });
      }
      else
      if (direction === 'up') {
        reviewSidebar.css({
          top: "65px"
        });
        if ($(window).width() <= 640){
           reviewSidebar.css({'position':'relative'});
        }
        else{
          reviewSidebar.css({'position':'fixed'});
        }
        if ($("#film-info").height() > (($("#film-info").height()-rowheight.height())+65)){
          filmInfo.css({
            position:"absolute",
            top:"0",
            bottom: "auto",
          width: reviewSidebar.width()
          });
        }
        else {
          $('#film-info').css({
            position:"absolute",
            top:"auto",
            bottom: "0",
          width: reviewSidebar.width()
          });
        }
      }//alert($.waypoints('viewportHeight')-$("#film-row").height()-765);
    },{
      offset: scrollOffest
    });
  }

}

$(window).bind('resize',function() {
  winResized();
});
$(document).ready(function(){
  winResized();
});
  


//share-icons -fix them when necessary too
var share = $('#share-links');
  $('#share-links').waypoint(function(direction) {
    if (direction === 'down') {
      share.css({
        position:"fixed",
        top: "85px"
      });
     //alert("size="+scrollDifferential)
    }
    else if (direction === 'up') {
      share.css({
        position:"absolute",
        top:  "702px",
        bottom: "auto"
      });
    }
  },{
    offset: 85 // Apply "stuck" when element 75px from top
  });
  $("#up-next").waypoint(function(direction){
  if (direction === 'down') {
    share.css({
      position:"absolute",
      top: 702+$('#review-copy').height()-share.height() + "px",
      bottom: "auto",
    });
  }
  else
  if (direction === 'up') {
    share.css({
      top: "85px"
    });
      share.css({'position':'fixed'});
  }
},{
   offset: 240
});