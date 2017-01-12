$(function() {
    var $target = $('body');
    var landing_bg = "radial-gradient(circle, #2C4158 0%, rgba(31,35,53,0.5) 100%), radial-gradient(circle, #0A1A2F 0%, #12114F 100%)";
    var proj1_bg = "radial-gradient(circle, #E6EAF0 0%, #D3D9E1 100%)";
    var contact_bg_color = "#fff";
    
    // Whenever a section enters the viewport
    $(window).on('scroll touchmove', function() {
        
        if ($(document).scrollTop() >= $("#landing").position().top) {
            $target.css('background', landing_bg);
        }
        else if ($(document).scrollTop() > $("#proj1").position().top) {
            $target.css('background', proj1_bg);
        }
        else if ($(document).scrollTop() > $("#contact").position().top) {
            $target.css('background', contact_bg_color);
        }
    });
});