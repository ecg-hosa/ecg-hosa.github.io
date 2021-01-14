"use strict";

function openNav() {
	document.getElementById("menu").style.width = "25%";
}

function closeNav() {
	document.getElementById("menu").style.width = "0%";
}

var form = document.querySelector("form");
form.addEventListener("submit", function(e) {
	e.preventDefault();
	var search = form.querySelector("input[type=search]");
	search.value = "site:ecg-hosa.github.io" + search.value;
	form.submit();
});
