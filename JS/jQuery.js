$(document).ready(function(){

	$("#upload").click(function() {
		$("#modal").show();
		$("#form").show();
	});

	$("#modal").click(function() {
		$("#modal").hide();
		$("#form").hide();
	});

});