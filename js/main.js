

window.addEventListener("scroll",function(){
	var header = document.querySelector("header");
	header.classList.toggle("Stikey", window.scrollY > 0);
});
