//client.js
console.log("hi from client.js");

//Initial function fired once page loaded
//Could use $(document).ready(function() {})
$(function () {

	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/files',
		success: function (data){
			console.log('ajax worked');
			console.log(data);
			var j=0;
			for (i of data) {
				var img = new Image();
				img.src = "./turnercontemporary/"+i;
				//img.width = 100//$(window).width();
				img.alt = "matt's alt text";
				$('<div class="grid-item" data-i="'+(j+1)+'">')
				.append(img)
				.appendTo('#thegrid');
				j=j+1
			}
		}
	});
})

$(document).ready(function() {
	console.log('ready');
})