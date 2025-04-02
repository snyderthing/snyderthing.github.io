allCells[i].addEventListener("mousedown",
			function(e) {
				if (e.shiftKey) {
					// Set background to white
					allCells[i].style.backgroundColor = "white";
					// Set font color to black
					allCells[i].style.color = "black";
					// Set border radius to 0
					allCells[i].style.borderRadius = "0px";
				} else if (e.altKey) {
					// Set background to black
					allCells[i].style.backgroundColor = "black";
					// Set font color to white
					allCells[i].style.color = "white";
					// Set border radius to 0
					allCells[i].style.borderRadius = "0px";
				} else {
					// Set background to rgb(101,101,101)
					allCells[i].style.backgroundColor = "rgb(101,101,101)";
					// Set font color to white
					allCells[i].style.color = "white";
					// Set border radius to 50%
					allCells[i].style.borderRadius = "50%";
				}
			});