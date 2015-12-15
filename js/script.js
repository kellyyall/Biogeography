$(function() {
new WOW().init();
$('#map').height($('.loc').height);
	$('section :first-child').each(function(){
		$(this).addClass("title");
	});

	$('section :nth-child(3) ').each(function(){
		$(this).addClass("title");
	});

	function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(-41.5591743,145.8636745),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);


});






