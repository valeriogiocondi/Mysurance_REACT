export function hidePopup() {

  document.getElementById("background-popup").classList.remove("fade-in");

  for (var i=0,n=document.getElementsByClassName("popup").length; i<n; i++)
    document.getElementsByClassName("popup")[i].classList.remove("fade-in");
}

export function handleListenerPopup() {

	document.getElementById("background-popup").addEventListener("click", function(e) {

	  hidePopup();
	});

		
	document.addEventListener("keydown", function(e) {

	  if (e.which == 27)
	    hidePopup();
	});
}	