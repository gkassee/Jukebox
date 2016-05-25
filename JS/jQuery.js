$(document).ready(function(){

	$("#upload").click(function() {
		$("#modal").show();
		$("#form").show();
	});

	$("#modal").click(function() {
		$("#modal").hide();
		$("#form").hide();
	});


	// $("#next").click(function(){
 //    $("#contentWrapper").slideUp(500);
 //    $("#contentWrapper").slideDown(500);

	// });

	// $("#next").click(function(){
 //    $("#infoWrapper").animate({width:'toggle'},500);
 //    $("#AlbumArt").animate({width:'toggle'},500);
 //    $("#infoWrapper").animate({width:'toggle'},500);
 //    $("#AlbumArt").animate({width:'toggle'},500);
 //    // $("#contentWrapper").slideDown(500);

	// });

});