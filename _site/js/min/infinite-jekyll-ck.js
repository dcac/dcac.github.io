$(function(){function t(){if(s){i=!0;var t=0,e=$("#load-posts-area").children().length,h=function(){t++;var c=e+t;return c>s.length-1?void o():void(a>t?n(c,h):i=!1)};n(e+t,h)}}function n(t,n){var o=s[t];$.get(o,function(t){$(t).find(".post").appendTo("#load-posts-area").fadeIn();var o=0;$(".post").each(function(){o=$(this).height()>o?$(this).height():o}),$(".post").css({display:"block"}),$(".post").css({height:"350px"}),n()})}function o(){e=!1,i=!1,$(".infinite-spinner").fadeOut(),$("#load-posts").fadeOut(),$("#goto-posts").fadeIn()}var s,i=!1,e=!0,a=6,h=18;$.getJSON("/all-posts.json",function(t){s=t.posts,s.length<=a&&o()}),$("#load-posts").click(function(){t()});var c=0;$(".post").each(function(){c=$(this).height()>c?$(this).height():c}),$(".post").css({height:c+20})});