//client.js
console.log("hi from client.js");

//Initial function fired once page loaded
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
				img.width = $(window).width()/5;
				//img.height= $(window).height()/4;
				img.alt = i;
				$('<div id="grid-item" data-i="'+(j+1)+'">')
				.append(img)
				.appendTo('#thegrid')
				.imagesLoaded(function () {
					updateGrid();
				})
				j=j+1
			}
		},
		stop: function() {
			console.log("image done");
		}
	});
})

function updateGrid() {
	$('#thegrid').masonry('layout');
}

$(window).on("load", function() {
	console.log("Loaded");
	$('#thegrid').masonry({
		itemSelector: '#grid-item',
		columnWidth: 50,
		gutter: 100
	});
})

$(document).ready(function() {
	console.log('ready');
})