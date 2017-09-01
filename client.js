//client.js

//use jquery to add images
//example below from milan on bitbucket
function addImage(imgStr, inc) {
	var img = document.createElement("img");
	var browserWidth = $(window).width();
	var browserHeight = $(window).height();

	img.src = ;
	img.alt = "alt text";
	img.width = 200/(1+(inc%3/3));

	$('<div id="item.w" data-i="'+(i+1)+'">')
		.append(img)
		.appendTo('#thegrid') //a div
}
//a function
function loadGridImages(numImages) {
	i=0;
	for(i=0;i<numImages;i++){
		var imgStr = "images/p"+(i+1)+".png"; //this should cycle through the file list sent from server.js
		addImage(imgStr, i);
	}
}

$('#thegrid').masonry();