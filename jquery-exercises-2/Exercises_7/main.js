$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:first").click(function() {
      $("ol li:first").css("font-size", "120%");
    });

    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").click(function() {
      $("ol li:nth-child(2)").css("font-size", "80%");
    });

    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").click(function() {
      $(".green").css("font-weight", "bold");
      $("ol li:nth-child(3)").click(function() {
        $(".green").css("font-weight", "100");
      });
    });

    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(4)").click(function() {
      $(".red").css("text-decoration", "underline");
      $("ol li:nth-child(4)").click(function() {
        $(".red").css("text-decoration", "none");
      });
    });

    /* On click: Replace the logo with another image */
    $("ol li:nth-child(5)").mouseenter(function() {
      $("img").attr('src', 'images/koala.jpg');
    });
    $("ol li:nth-child(5)").mouseleave(function() {
      $("img").attr('src', 'images/jquery-logo.png');
    });

    /* On hover: Display the URL of links in a tooltip when hovering over links */

    //skipped

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("ol li:nth-child(7)").click(function() {
      $("h2:first").prepend("Chapter 1: ");
      $("h2:nth-child(5)").prepend("Chapter 2: ");
    });
});
