function winResized(){var t=640;if($(window).width()>t){var i=$("#row-height"),o=$("#side-row"),s=$("#home-sidebar"),e=$(".post-image-home").width(),h=$.waypoints("viewportHeight")-65;o.css({height:i.height(),width:e}),s.css({width:e}),s.height()<h&&($("#row-height").waypoint(function(t){"down"===t?(s.css({position:"fixed",top:"65px",width:$(".post-image-home").width()}),o.css({width:$(".post-image-home").width()})):"up"===t&&(s.css({position:"absolute",top:"0",bottom:"auto",width:$(".post-image-home").width()}),o.css({width:$(".post-image-home").width()}))},{offset:65}),$("#row-height").waypoint(function(t){"down"===t?(s.css({position:"absolute",bottom:"0",top:"auto",width:$(".post-image-home").width()}),o.css({width:$(".post-image-home").width()})):"up"===t&&(s.css({position:"fixed",top:"65px",width:$(".post-image-home").width()}),o.css({width:$(".post-image-home").width()}))},{offset:$.waypoints("viewportHeight")-i.height()-65}))}var w=$("#review-copy"),n=$("#film-row"),p=$("#film-info"),d=$("#review-sidebar");d.height()>w.height()&&w.css({height:d.height()}),n.css({height:w.height()});var a=$("#film-info").height()-$("#review-copy").height()+65,c;c=$("#film-info").height()>$.waypoints("viewportHeight")-65?!1:!0,$(window).resize(function(){d.css({width:n.width()}),p.css({width:n.width()})}),c&&($("#review-copy").waypoint(function(t){"down"===t?(d.css({top:"65px",width:d.width(),height:$.waypoints("viewportHeight")-110}),d.css($(window).width()<=640?{position:"relative"}:{position:"fixed"})):"up"===t&&(d.css({position:"absolute",top:"0",bottom:"auto",width:d.width()}),p.css({position:"absolute",top:"0",bottom:"auto",width:d.width()}))},{offset:65}),$("#review-copy").waypoint(function(t){"down"===t?(d.css({position:"absolute",bottom:"0",top:"auto",width:d.width()}),p.css({position:"absolute",bottom:"0",top:"auto",width:d.width()})):"up"===t&&(d.css({top:"65px"}),d.css($(window).width()<=640?{position:"relative"}:{position:"fixed"}),$("#film-info").height()>$("#film-info").height()-w.height()+65?p.css({position:"absolute",top:"0",bottom:"auto",width:d.width()}):$("#film-info").css({position:"absolute",top:"auto",bottom:"0",width:d.width()}))},{offset:a}))}!function($){$('a[href="#"]').click(function(t){t.preventDefault()})}(jQuery),$(window).bind("resize",function(){winResized()}),$(document).ready(function(){winResized()});var share=$("#share-links");$("#share-links").waypoint(function(t){"down"===t?share.css({position:"fixed",top:"85px"}):"up"===t&&share.css({position:"absolute",top:"702px",bottom:"auto"})},{offset:85}),$("#up-next").waypoint(function(t){"down"===t?share.css({position:"absolute",top:702+$("#review-copy").height()-share.height()+"px",bottom:"auto"}):"up"===t&&(share.css({top:"85px"}),share.css({position:"fixed"}))},{offset:240});
//# sourceMappingURL=./onload.actions-min.js.map