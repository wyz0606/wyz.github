$(document).ready(function() {
    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#background1").offset().top
        }, 800);
    }); 
    $("#project").click(function() {
        $('html, body').animate({
            scrollTop: $("#background2").offset().top
        }, 800);
    }); 
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#background3").offset().top
        }, 800);
    }); 
});