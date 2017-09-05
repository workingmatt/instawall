//client.js
console.log("hi from client.js");
var fileList = new Array();
var imageArray = new Array();
var displayArray = new Array();
var count = 0;
var index = 0;

//Initial function fired once page loaded
$(function () {
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/files',
		success: function (data){
			console.log('ajax worked');
			console.log(data);
			fileList = data;
			console.log(fileList);
			fetchImages();
		},
		stop: function() {
			console.log("image done");
		}
	});
})
function buttonClicked() {
	const numPix = 5
	if (index>=imageArray.length) {
		index = 0;
	}

	if (displayArray.length<numPix) {
		displayArray.push(imageArray[index]);
	} else {
		displayArray.push(imageArray[index]);
		displayArray.shift();
	}

	console.log("pushing: ");
	console.log(displayArray);

	if (displayArray.length<numPix){
		$('<div id="grid-item" data-i="'+(index%numPix)+'">')
		.append(displayArray[index%numPix])
		.appendTo('#thegrid');
		$('#thegrid').masonry('layout');
	} else {
		console.log('removing data-i="'+(index%numPix)+'"');
		$('#thegrid div[data-i="'+(index%numPix)+'"').remove();$('#thegrid').masonry('layout');
		
		$('<div id="grid-item" data-i="'+(index%numPix)+'">')
		.append(displayArray[index%numPix])
		.appendTo('#thegrid');
		$('#thegrid').masonry('layout');
	}
	console.log("index: "+index+" mod"+numPix+": "+index%numPix+" displayArray["+index%numPix+"] is "+displayArray[index%numPix].src);
	index++;
}

function fetchImages() {
	if (fileList.length > 0) {
		for (var i = 0; i < fileList.length; i++) {
			imageArray[i] = new Image();
			imageArray[i].width = $(window).width()/10;
			imageArray[i].alt = i;
			imageArray[i].src = "./turnercontemporary/"+fileList[i];
		}
//				$('<div id="grid-item" data-i="'+(j+1)+'">')
//				.append(img)
//				.appendTo('#thegrid')
//				.imagesLoaded(function () {
//					updateGrid();
//				})
	} else {
		console.log("fileList empty");
	}
}

function updateGrid() {
	console.log('In updateGrid');
	$('#thegrid').masonry('layout');
	for (img of imageArray) {
		console.log('**: '+img.src);
	}
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
