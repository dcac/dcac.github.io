
//Stop hashes from jumping the page to the top

( function( $ ) {
   $( 'a[href="#"]' ).click( function(e) {
      e.preventDefault();
   } );
} )( jQuery );

//Stick the home sidebar to the top when reached

var row = $("#row-height");
var siderow = $("#side-row");
//var side = $("#side-column");
var sidebar = $("#home-sidebar");

siderow.css({
  height: row.height()
});
  if (sidebar.height() < ($.waypoints('viewportHeight')-65)) {
  $('#row-height').waypoint(function(direction) {
  //alert(sidebar.width());
    if (direction === 'down') {
      sidebar.css({
        position:"fixed",
        top: "65px",
        width: sidebar.width()
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
        bottom: "auto",
        width: sidebar.width()
      });
      siderow.css({
        height: row.height()
      });
    }
  },{
    offset: 65 // Apply "stuck" when element 75px from top
  });
  $("#row-height").waypoint(function(direction){
    if (direction === 'down') {
      sidebar.css({
        position:"absolute",
        bottom: "0",
        top: "auto",
        width: sidebar.width()
      });
      siderow.css({
        height: row.height()
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


//Stick the imdb sidebar to the top when reached

var rowheight = $("#review-copy");
var filmRow = $("#film-row");
//var side = $("#side-column");
var reviewSidebar = $("#review-sidebar");

filmRow.css({
  height: rowheight.height()
});
$(window).resize(function(){
reviewSidebar.css({
  width: filmRow.width()
  });
});

//If the viewport minus the top bar is arger than the sidebar, fix it in place

if ($("#film-info").height() < ($.waypoints('viewportHeight')-65)) {
  $('#review-copy').waypoint(function(direction) {
  //alert(sidebar.width());
   if (direction === 'down') {
      reviewSidebar.css({
        top: "65px",
        width: reviewSidebar.width()
        
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