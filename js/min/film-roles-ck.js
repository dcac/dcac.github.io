$(document).ready(function(){$(function(){var i;$.getJSON("/film-roles.json",function(i){var d=i.entries,r=d[Math.floor(Math.random()*d.length)];r.current=5;var a="<h1>DC&C Glossary</h1>";a+="<article>",a+="<h1 class=film-credits-title>"+r.Credit+"</h1>",a+='<h2 class="film-credits-description">'+r.Definition+"</h2>",a+='<a role="button" href="'+r.Link+'">More</a>',a+="</article>",a+='<div class="film-credits-nav"><i class="fa fa-chevron-left film-credit-previous"></i><i class="fa fa-chevron-right film-credit-next"></i></div>',$("#film-credits").append(a)})}),$.ajax({url:"http://omdbapi.com/?i=tt2771372",dataType:"jsonp",success:function(i){var d=i.Title;$("#imdb-title").append(d);var r='<div class="row imdb-info-row">';r+='<div class="imdb-category large-4 medium-4 columns">Directed by:</div><div class="imdb-data large-8 medium-8 columns">'+i.Director+"</div>",r+="</div>",r+='<div class="row imdb-info-row">',r+='<div class="imdb-category large-4 medium-4 columns">Written by:</div><div class="imdb-data large-8 medium-8 columns">'+i.Writer.replace(/\,/g,"<br />")+"</div>",r+="</div>",r+='<div class="row imdb-info-row">',r+='<div class="imdb-category large-4 medium-4 columns">Starring:</div><div class="imdb-data large-8 medium-8 columns">'+i.Actors.replace(/\,/g,"<br />")+"</div>",r+="</div>",r+='<div class="row imdb-info-row">',r+='<div class="imdb-img large-12 medium-12 columns"><img class="imdb-img" src="'+i.Poster+'" /></div>',$("#film-info").append(r),r+="</div>"}})});