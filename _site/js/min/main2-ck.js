$(document).ready(function(){function t(){var t=$("#story-title");if(t.size()){var n=$(window).width(),i=$(window).height(),o=t.width(),e=t.height(),a=Math.max(n/o,i/e),s=Math.round(o*a),d=Math.round(e*a);t.css({width:s,height:d})}}$(window).load(function(){t()}).bind("resize",function(){t()}),$(function(){$("#story-title").css({height:$(window).height()+"px",width:$(window).width()+"px"}),$(function(){$("#main-title").css({width:$(window).width()+"px",overflow:"hidden","padding-left":"145px"}),$("#down-arrow").css({left:$(window).width()/2+"px"}),$("#main-title").css({width:$(window).width()+"px"}),$(window).resize(function(){$("#story-title").css({height:$(window).height()+"px"}),$("button.down-arrow").css({left:$(window).width()/2+"px"}),$(window).width()<=960&&$("#main-title").css({"padding-left":"145px"}),$("#main-title").css({width:$(window).width()+"px"}),$("#main-title").css({left:"0px"}),$("#body-text").css({width:$(window).width()+"px"}),$("#body-text").css({left:"0px"})})})}),$("#down-arrow").on("click",function(){$("html, body").animate({scrollTop:$("#body-text").offset().top},500)}),$("#body-text").waypoint(function(t){"down"===t&&($("#main-title").removeClass("main-title"),$("#main-title").css({display:"none"}),$("#main-title").addClass("main-title-top mm-fixed-top"),$("h1.hero").addClass("top"),$("h2.hero").addClass("top"),$("h1.hero").removeClass("hero"),$("h2.hero").removeClass("hero"),$("p.article-share").css({display:"block"}),$("#menu-toggle-top").css({display:"block"}),$("#nav-button-container").css({display:"none"}),$("#main-title").slideDown(400))}),$("#down-arrow").waypoint(function(t){"up"===t&&($("#main-title").removeClass("main-title-top animated slideInDown"),$("h1.top").addClass("hero"),$("h2.top").addClass("hero"),$("h1.top").removeClass("top"),$("h2.top").removeClass("top"),$("#main-title").addClass("main-title"),$("p.article-share").css({display:"none"}),$("#menu-toggle-top").css({display:"none"}),$("#nav-button-container").fadeIn("fast"),$("#main-title").fadeIn(800))}),$("p").contentshare({shareIcons:["fa-facebook","fa-twitter"],shareLinks:["http://www.facebook.com/sharer.php?s=100&p[url]="+document.URL+"&p[title]="+document.title+"&p[summary]={{text}}","http://twitter.com/intent/tweet?text={{text}}%0a"+window.location.href],minLength:1}),$.fn.contentshare.defaults.shareable.on("mouseup",function(){$.fn.contentshare.showTooltip()}),$("#main-container").waypoint(function(){$("div.navbar").css("height","50px"),$("a.navbar-link").css("height","50px"),$("a.navbar-brand").css("height","50px"),$("a.navbar-brand").css("background","url('../img/logo-sm.png') 10px 15px no-repeat")},{offset:25}),$("#main-container").waypoint(function(){$("div.navbar").css("height","125px"),$("a.navbar-link").css("height","125px"),$("a.navbar-brand").css("height","125px"),$("a.navbar-brand").css("background","url('../img/logo.png') 15px 15px no-repeat")},{offset:120})});