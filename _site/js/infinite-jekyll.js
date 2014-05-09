$(function() {
  
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      //postsToLoad = $(".posts").children().length,
      postsToLoad = 6,
      loadNewPostsThreshold = 18;
  
  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function(data) {
    postURLs = data["posts"];
    
    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });
	
/*  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;
	
  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();
    
    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
      fetchPosts();
    }
  });
  */
  $("#load-posts").click(function() {
    fetchPosts();
  });
  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;
    
    isFetchingPosts = true;
    
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $("#load-posts-area").children().length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;
          
          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }
          
          if (loadedPosts < postsToLoad) {
            
            fetchPostWithIndex(postIndex, callback);
          } 
          else {
            isFetchingPosts = false;
          }
        };
		
    fetchPostWithIndex(postCount + loadedPosts, callback);
    
  }
	
  function fetchPostWithIndex(index, callback) {
    var postURL = postURLs[index];
		
    $.get(postURL, function(data) {
      //if (index % 3 === 0){ 
        // string =$(data).find(".post").appendTo("#load-posts-area");
         //$(".post").append('<hr style="clear:both" /><p>hi</p>');
     // }
      //else{
        
      $(data).find(".post").appendTo("#load-posts-area").fadeIn();
    
    var maxHeight = 0;
    $('.post').each(function(){
       maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
    });
      $('.post').css({'display':'block'});
      $('.post').css({'height': '350px'});
      callback();
    });
  }
  
  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
    $('#load-posts').fadeOut();
    $('#goto-posts').fadeIn();
  }
  
  //Set maxheight on load
    var maxHeight = 0;
    $('.post').each(function(){
       maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
    });
      $('.post').css({'height':maxHeight + 20});
	
});
