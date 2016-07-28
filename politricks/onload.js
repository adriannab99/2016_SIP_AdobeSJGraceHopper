function onLoad(){
	var y = localStorage.getItem("x")
	document.getElementById("relativeSlider").style.left = y;
	console.log(y);
	}