
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
    var gridWidth = $(".post-image").width();
    var winHeight = ($.waypoints('viewportHeight')-65);
    
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
            width: gridWidth
          });
          siderow.css({
            //height: row.height(),
            width: gridWidth
          });
        }
        else if (direction === 'up') {
          sidebar.css({
            position:"absolute",
            top: "0",
            bottom: "auto",
            width: gridWidth
          });
          siderow.css({
            //height: row.height(),
            width: gridWidth
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
            width: gridWidth
          });
          siderow.css({
            //height: row.height(),
            width: gridWidth
          });
        }
        else
        if (direction === 'up') {
          sidebar.css({
            position:"fixed",
            top: "65px"
          });
        }
      },{
        offset: $.waypoints('viewportHeight')-row.height()-65
      });
    }
  }
}

$(window).bind('resize',function() {
  winResized();
});
$(document).ready(function(){
  winResized();
});
  

//Stick the imdb sidebar to the top when reached

var rowheight = $("#review-copy");
var filmRow = $("#film-row");
//var side = $("#side-column");
var reviewSidebar = $("#review-sidebar");
if (reviewSidebar.height() > rowheight.height()){
  rowheight.css({
    height: reviewSidebar.height()
  });
  var fixSidebar = false;
}
else{
  var fixSidebar = true;
}
filmRow.css({
  height: rowheight.height()
});
$(window).resize(function(){
reviewSidebar.css({
  width: filmRow.width()
  });
});


//If the viewport minus the top bar is taller than the sidebar, fix it in place

if ($("#film-info").height() < ($.waypoints('viewportHeight')-65) && (fixSidebar)) {
  $('#review-copy').waypoint(function(direction) {
  //alert(sidebar.width());
   if (direction === 'down') {
      reviewSidebar.css({
        top: "65px",
        width: reviewSidebar.width(),
        height: $.waypoints('viewportHeight')-65
        
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
    }
  },{
    offset: $.waypoints('viewportHeight')-rowheight.height()-65
  });
}