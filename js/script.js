$(function() {
  var refNum;
  var refContents;

  $('span#refer').each(function(){
    refNum = parseInt($(this).text()[1]);
    refContents = $('#ref li').eq(refNum-1).text();
    $(this).attr("title", refContents );
  });
  $('[data-toggle="tooltip"]').tooltip();

  $('#map').height($('.loc').height);
	$('section :first-child').each(function(){
		$(this).addClass("title");
	});

	$('section :nth-child(3) ').each(function(){
		$(this).addClass("title");
	});

  map = new GMaps({
        el: '#map',
        lat: -41.5591743,
        lng: 145.8636745,
        zoom: 9
      });
  map.addMarker({
        lat: -41.5591743,
        lng: 145.8636745,
      });


});