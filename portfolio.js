// This is a JavaScript document.


// Author: Marina Lazaridou
// Subject: Portfolio
// File Format: JavaScript


// Start script



// Modal image

window.onload = function() {
	var modal = document.getElementById('myModal');
	var images = document.getElementsByClassName('myImages');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	for (var i = 0; i < images.length; i++) {
		images[i].onclick = function() {
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none";
	}
};
