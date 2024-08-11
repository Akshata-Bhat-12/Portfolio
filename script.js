$(document).ready(function(){
    // Toggle navigation menu
    $(".navbar-toggler").click(function(){
        $(".nav-links").toggleClass("active");
    });

    // Close navigation menu when a link is clicked
    $(".nav-links a").click(function(){
        $(".nav-links").removeClass("active");
    });
});
