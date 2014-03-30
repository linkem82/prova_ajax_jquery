$(document).ready(function() {
	$('#helloBtn').on("click", GetName);
});
function GetName() {
	var name = $('#helloTxt').val();
	$.ajax('hello1.jsp', {
		success : function(response, textStatus, jqXHR) {
			$('#helloTitle').text("Hello, " + response.name);
		},
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
