$("#arrow").click(function(){
	$('html, body').animate({
		scrollTop: $("#out").offset().top
	}, 1000);
});

$(".overlay overlayFade").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});