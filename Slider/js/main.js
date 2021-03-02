
var image = ["./img/minons1.jpg","./img/minons2.jpg","./img/minons3.jpg","./img/minons4.jpg"];




//header
function header(){
	document.querySelector("header").style.backgroundImage =  "url(./img/banner.jpg)";
}
header();
// end header

// main
document.querySelector("main").style.backgroundImage =  "url(./img/pozadina.jpg)";

// section for slide img
function slider(){
	var sec = document.createElement("section");
	sec.setAttribute('id', "slide");
	document.querySelector("main").prepend(sec);

	for(var i = 0; i < image.length; i++){
		var img = document.createElement("img");
		img.setAttribute("class", "img");
		document.querySelector("#slide").prepend(img);
		img.setAttribute("src",image[i]);
		img.setAttribute("alt", "image_of_minions");
	}

}
slider();


// section for tumbnails
function tumbnails(){
	var sec = document.createElement("section");
	sec.setAttribute('id', "tumb");
	document.querySelector("main").append(sec);

	for(var i = 0; i < image.length; i++){
		var img = document.createElement("img");
		img.setAttribute("class", "imgTumb");
		document.querySelector("#tumb").prepend(img);
		img.setAttribute("src",image[i]);
		img.setAttribute("alt", "image_of_minions");
	}

}
tumbnails();


// switching images

// function switchSlides() {
// 	var conteiner = document.getElementById("slide");
// 	var firstPlace = conteiner.firstElementChild;
// 	var secondImg = firstPlace.nextElementSibling;

// 	conteiner.append(firstPlace);

// 	// tumbnails
// 	var conteinerSecond = document.getElementById("tumb");
// 	var tumbSlide = conteinerSecond.childNodes;

// 		tumbSlide.forEach(function(e,i){
// 			if(secondImg.getAttribute("src") == e.getAttribute("src")) {
				
// 				e.style.border = "thick solid #0000FF";
// 				e.style.filter = "grayscale(0)";
// 			} else {
// 				e.style.border = "none";
// 				e.style.filter = "grayscale(1)" + "drop-shadow(2px 4px 5px blue)";
// 			}
// 	})
	
	
// }
// setInterval(switchSlides, 5000);

//////////////////////////////////////////////////////////////////////////////////////
// sliding images


function setAnimation(){
	var conteiner = document.querySelectorAll(".img");

	conteiner.forEach(function(e,i){e.style.animation = "3s linear 1s 1 normal forwards running mymove";})
setTimeout(slidingImage,4000);
}


function slidingImage() {

	var conteiner = document.getElementById("slide");
	var firstPlace = conteiner.firstElementChild;

	setTimeout(slideTumbnails,3500);
	var conteiner2 = document.querySelectorAll(".img");
	conteiner2.forEach(function(e,i){e.style.animation = "none";})

	conteiner.append(firstPlace);
}


function slideTumbnails(){
	var conteiner = document.getElementById("slide");
	var firstPlace = conteiner.firstElementChild;
	var secondImg = firstPlace.nextElementSibling;

	var conteinerSecond = document.getElementById("tumb");
	var tumbSlide = conteinerSecond.childNodes;

	tumbSlide.forEach(function(e,i){
		if(secondImg.getAttribute("src") == e.getAttribute("src")) {
				
				e.style.border = "thick solid #0000FF";
 				e.style.filter = "grayscale(0)";
 			} else {
 				e.style.border = "none";
				e.style.filter = "grayscale(1)" + "drop-shadow(2px 4px 5px blue)";
			}
	});
}


setInterval(setAnimation,5000);




// footer
function footer(){
var firstF = document.createElement("p");
var secondF = document.createElement("h5");
firstF.innerHTML = "&copy; Copyright 2021, All Rights Reserved. Designed by <b>Stojanovic Marko</b>.";
secondF.innerHTML = "&#128526";
document.getElementById("footer").prepend(firstF,secondF);
}
footer();
//end footer
