$(document).ready(function() {
	var list = $('.list');
	list.on("keyup", '.helloTxt', GetName);
});
function GetName() {
	var list = $(this).parent();
	var name = list.find('.helloTxt').val();
	var nameCont = this;
	$.ajax('hello1.jsp', {
		success : function(response, textStatus, jqXHR) {
			list.find('.helloTitle').text("Hello, " + response.name);
		},
		context : nameCont,
		data : {
			'name' : name
		},
		dataType : 'json',
		contentType : 'application/json',
		error : function(request, errorType, errorMessage) {
			alert("An error occured: " + errorType + " " + errorMessage)
		}
	});
}
