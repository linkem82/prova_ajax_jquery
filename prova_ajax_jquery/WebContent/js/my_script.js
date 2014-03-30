$(document).ready(function() {
	var list = $('.list');
	list.on("keyup", '.helloTxt', getName);
	list.on("click", '.helloBtn', hideShow);
});
function getName() {
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

function hideShow() {
	var button = $(this);
	var list = $(this).parent();
	var par = list.find('p');
	var input = list.find('.helloTxt');
	par.slideToggle('slow');
	input.slideToggle('slow');
	if(button.text() == 'Hide') {		
		$(this).text('Show');
	} else {		
		$(this).text('Hide');
	}
}
