function onLoad(){
	var y = sessionStorage.getItem("x")
	document.getElementById("relativeSlider").style.left = y;
	console.log(y);
	}