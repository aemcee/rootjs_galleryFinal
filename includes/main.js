/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/

	$('#gallery').sortable({
	});

	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	// <figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
	// 		<figcaption>landscape-1.jpg</figcaption>
	// </figure>

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable
	for(var i = 0; i <= (imageArray.length - 1); i++){
		var figure = $('<figure>');
		figure.addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css("background-image","url(" + imageArray[i] +")");
		var caption = $('<figcaption>');
		caption.text(imageArray[i].slice(7));
		//attach a click handler to the figure you create.  call the "displayImage" function.  
		$(figure).click(displayImage);
		//append the element to the #gallery section
		$(figure).append(caption);
		$('#gallery').append(figure);
		//debugger;
	}
}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
	$('#galleryModal').click(function(){
		$('#galleryModal').modal('hide');
	});
}


function displayImage(){
	console.log('wakawaka');
	//find the url of the image by grabbing the background-image source, store it in a variable
	var back_img_source = $(this).css("background-image");
	
	console.log('hello',back_img_source);
	//grab the direct url of the image by getting rid of the other pieces you don't need
	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
	var modal_title = back_img_source.slice(back_img_source.lastIndexOf('images')+7,back_img_source.lastIndexOf('.jp'));
	var modal_link = back_img_source.slice(back_img_source.lastIndexOf('images'),-2);
	console.log('modal title',modal_title);
	console.log('modal link',modal_link);

	//change the modal-title text to the name you found above
	$('.modal-title').text(modal_title);
	//change the src of the image in the modal to the url of the image that was clicked on

	$('img').attr('src',modal_link);
	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	//debugger;
	$(this).click(function(){
		$('#galleryModal').modal();
	});
}





