$(document).ready(function () {
  $('a[href^="#"]').click(function() {    // Change to needed selector
    $("html, body").animate({    // Need both for full browser support
        scrollTop: $( $(this).attr("href") ).offset().top - 100 // Extra 100px
    }, 500);    // Change to desired scroll time in ms
    return false;    // Prevents the dreaded jump/flash
   });
})
