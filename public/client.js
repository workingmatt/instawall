//client.js
console.log("hi from client.js");
var fileList = new Array();
var imageArray = new Array();
var displayArray = new Array();
var timer;
var index = 0;
const itemWidth = 150;
const numPix = 30;
//Initial function fired once page loaded
$(function () {
	console.log("Carmen: "+numPix);
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/files',
		success: function (data){
			console.log('ajax worked');
			fileList = data;
			console.log(fileList);
			fetchImages();
		},
		stop: function() {
			console.log("image done");
		}
	});
	setTimeout(function() {buttonClicked();timer = setInterval(buttonClicked,1000)}, 5000);
})

function stopTimer() {
	clearInterval(timer);
}

function startTimer() {
	timer = setInterval(buttonClicked,1000);
}

function buttonClicked() {
	if (index>=imageArray.length) {
		index = 0;
	}

	if (displayArray.length<numPix) {
		displayArray.push(imageArray[index]);
	} else {
		displayArray.push(imageArray[index]);
		displayArray.shift();
	}

	if (displayArray.length<numPix){
		$('<div id="grid-item" data-i="'+(index%numPix)+'">')
		.append(displayArray[index%numPix])
		.appendTo('#thegrid');
		$('#thegrid').masonry('layout');
	} else {
		$('#thegrid div[data-i="'+(index%numPix)+'"').remove();
		$('<div id="grid-item" data-i="'+(index%numPix)+'">')
		.append(displayArray[index%numPix])
		.appendTo('#thegrid');
		$('#thegrid').masonry('layout');
	}
	index++;
}

function fetchImages() {
	if (fileList.length > 0) {
		for (var i = 0; i < fileList.length; i++) {
			imageArray[i] = new Image();
			imageArray[i].height = itemWidth//$(window).width()/10;
			imageArray[i].alt = i;
			imageArray[i].src = "./turnercontemporary/"+fileList[i];
		}
	} else {
		console.log("fileList empty");
	}
}

$(window).on("load", function() {
	console.log("Loaded");
	$('#thegrid').imagesLoaded(function() {
		$('#thegrid').masonry({
			columnWidth: (itemWidth+50),//300,
			gutterWidth: 1,
			itemSelector: '#grid-item',
			isAnimated: true,
			animationOptions: {
				duration: 500,
				easing: 'linear',
				queue: false
			}
	});

	});
})

$(document).ready(function() {
	console.log('ready');
})

