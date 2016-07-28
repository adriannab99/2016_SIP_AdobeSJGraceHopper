function onLoad(){
	var var3 = localStorage.getItem("var3name")
	var3 = window.getComputedStyle(document.getElementById("relative"), null).getPropertyValue("left");
	console.log(var3);
	}
	
	document.getElementById("relative").style.left = "200px";

	var var1 = window.getComputedStyle(document.getElementById("relative"), null).getPropertyValue("left");


	function Democrat(){
		var1 = var1.replace("px", "");
		console.log(var1);
		var1 = parseInt(var1);
		console.log(var1);
		var1 -= 5;
		console.log(var1);
		var var2 = String(var1);
		console.log(var1);
		var var3 = var
		localStorage.setItem('var3name', var3);
		localStorage.getItem("var3name") = var2 + "px"
		console.log(localStorage.getItem("var3name"));
		document.getElementById("relative").style.left = localStorage.getItem("var3name");
	}
	function Republican(){
		var1 = var1.replace("px", "");
		var1 = parseInt(var1);
		var1 += 5;
		var var2 = String(var1);
		var3 = var2 + "px";
		document.getElementById("relative").style.left = var3;
	}