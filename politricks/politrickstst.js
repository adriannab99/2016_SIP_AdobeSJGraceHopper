var elem = document.getElementById("relativeSlider");
var var1 = window.getComputedStyle(elem, null).getPropertyValue("left");


function Democrat(){
		var1 = var1.replace("px", "");
		console.log(var1);
		var1 = parseInt(var1);
		console.log(var1);
		var1 -= 50;
		console.log(var1);
		var1 = String(var1);
		console.log(var1);
		var1 = var1 + "px"; 
		var x = localStorage.setItem('x', var1); 
		document.getElementById("relativeSlider").style.left = x; 
	}

function Republican(){
		var1 = var1.replace("px", "");
		console.log(var1);
		var1 = parseInt(var1);
		console.log(var1);
		var1 += 50;
		console.log(var1);
		var1 = String(var1);
		console.log(var1);
		var1 = var1 + "px"; 
		var x = localStorage.setItem('x', var1); 
		document.getElementById("relativeSlider").style.left = x; 
	}
