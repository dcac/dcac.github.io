$(document).ready(function () {
  $(function() {
  //$(document).ready(function() {
    var random_entry;
    // Load the JSON file containing all URLs
    $.getJSON('/film-roles.json', function(data) {
    var entry = data["entries"];
      var random_entry = entry[Math.floor(Math.random() * entry.length)];
      random_entry.current = 5;
      //$.each(data, function(entryIndex, entry) {
        var html = '<h1>DC&C Random Role</h1>';
        html += '<article>';
        html += '<h1 class=film-credits-title>' + random_entry['Credit'] + '</h1>';
        html += '<h2 class="film-credits-description">' + random_entry['Definition'] + '</h2>';
        html += '<div class="film-credits-nav clearfix">';
        html += '<a role="button" href="' + random_entry['Link'] + '">See an example</a>';
/*
        html += '<ul>';
          html += '<li class="film-credits-nav-prev"></li>';
          html += '<li class="film-credits-nav-next"></li>';
        html += '</ul>';
*/
        html += '</div>';
        html += '</article>';
        $('#film-credits').append(html);
  //      showNextRole(entry,index);
      //});;
    });
  /*  function showNextRole(entries, index) {
      ++index;
      if (index >= entries.length) {
          index = 0;
      }
      showVideo(entries[index]);
  }*/
  });
});