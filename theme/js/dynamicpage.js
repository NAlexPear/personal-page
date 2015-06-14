$(function() {

    $("nav").delegate("a", "click", function() {

      _href = $(this).attr("href");

      // change the url without a page refresh and add a history entry.
      history.pushState(null, null, _href);

      // load the content
      loadContent(_href); // fear not! we're going to build this function in the next code block

    });
    
    var $mainContent = $("#content-wrapper"),
    $pageWrap    = $("#page-wrap"),
    baseHeight   = 0,
    $el;

// calculate wrapper heights to prevent jumping when loading new content
$pageWrap.height($pageWrap.height());
baseHeight = $pageWrap.height() - $mainContent.height();

function loadContent(href) {

  $mainContent
    .find("#content")
    .fadeOut(200, function() { // fade out the content of the current page
      $mainContent
        .hide()
        .load(href + " #content", function() { // load the contents of whatever href is
          $mainContent.fadeIn(200, function() {
            $pageWrap.animate({
              height: baseHeight + $mainContent.height() + &quot;px&quot;
            });
         });
      
      $("nav a").removeClass("current");

      $("nav a[href$='" + href + "']").addClass("current");

    });

  });

}

$(window).bind("popstate", function() {
    link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
    loadContent(link);
});

});