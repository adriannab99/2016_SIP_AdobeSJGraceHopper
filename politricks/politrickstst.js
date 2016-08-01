function Democrat(){
		var elem = document.getElementById("relativeSlider");
		var var1 = window.getComputedStyle(elem, null).getPropertyValue("left");
		var1 = var1.replace("px", "");
		console.log(var1);
		var1 = parseInt(var1);
		console.log(var1);
		var1 -= 20;
		console.log(var1);
		var1 = String(var1);
		console.log(var1);
		var1 = var1 + "px"; 
		var x = sessionStorage.setItem('x', var1); 
		document.getElementById("relativeSlider").style.left = x; 
	}

function Republican(){
		var elem = document.getElementById("relativeSlider");
		var var1 = window.getComputedStyle(elem, null).getPropertyValue("left");
		var1 = var1.replace("px", "");
		console.log(var1);
		var1 = parseInt(var1);
		console.log(var1);
		var1 += 20;
		console.log(var1);
		var1 = String(var1);
		console.log(var1);
		var1 = var1 + "px"; 
		var x = sessionStorage.setItem('x', var1); 
		document.getElementById("relativeSlider").style.left = x; 
	}

function Independent(){
	var elem = document.getElementById("relativeSlider");
		var var1 = window.getComputedStyle(elem, null).getPropertyValue("left");
		var1 = var1.replace("px", "");
		console.log(var1);
		var1 = parseInt(var1);
		console.log(var1);
		if (var1 < 0)
		{
			var1 += 20;
		}
		else if (var1 > 0)
		{
			var1 -= 20;
		}
		console.log(var1);
		var1 = String(var1);
		console.log(var1);
		var1 = var1 + "px"; 
		var x = sessionStorage.setItem('x', var1); 
		document.getElementById("relativeSlider").style.left = x; 
}
