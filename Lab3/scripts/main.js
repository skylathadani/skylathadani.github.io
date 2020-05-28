// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateVeggies(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, generateRestrictions());

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var price = optionArray[i].price;
		var image = optionArray[i].img;
		var cat = optionArray[i].category;
		if(cat == "veg"){
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
		
			// create a label for the checkbox, and also add in HTML DOM\
			var x = document.createElement("IMG");
			x.setAttribute("src", image);
		 	x.setAttribute("width", "304");
 		 	x.setAttribute("height", "228");
			s2.appendChild(x);
			s2.appendChild(document.createElement("br")); 
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode('$'+price + ' ' + productName));
			s2.appendChild(label);
		
		
		
		
		// create a breakline node and add in HTML DOM
			s2.appendChild(document.createElement("br"));   
		}
		// create the checkbox and add in HTML DOM
		 
	}

		var para = document.createElement("P");
		para.innerHTML = "Current Cart : ";
		para.appendChild(document.createElement("br"));  

		for(var y = 0; y < totalItems.length; y++){
			para.appendChild(document.createTextNode(totalItems[y]));
			para.appendChild(document.createElement("br"));
		} 

		s2.appendChild(para);
}

function populateGrains(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, generateRestrictions());

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var price = optionArray[i].price;
		var image = optionArray[i].img;
		var cat = optionArray[i].category;
		if(cat == "grain"){
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
		
			// create a label for the checkbox, and also add in HTML DOM\
			var x = document.createElement("IMG");
			x.setAttribute("src", image);
		 	x.setAttribute("width", "304");
 		 	x.setAttribute("height", "228");
			s2.appendChild(x);
			s2.appendChild(document.createElement("br")); 
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode('$'+price + ' ' + productName));
			s2.appendChild(label);
		
		
		
		
		// create a breakline node and add in HTML DOM
			s2.appendChild(document.createElement("br"));   
		}
		// create the checkbox and add in HTML DOM
		 
	}

	//s2.appendChild(document.createElement("br"));  

		var para = document.createElement("P");
		para.innerHTML = "Current Cart : ";
		para.appendChild(document.createElement("br"));  

		for(var y = 0; y < totalItems.length; y++){
			para.appendChild(document.createTextNode(totalItems[y]));
			para.appendChild(document.createElement("br"));
		} 

		s2.appendChild(para);


}


function populateMeat(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, generateRestrictions());

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var price = optionArray[i].price;
		var image = optionArray[i].img;
		var cat = optionArray[i].category;
		if(cat == "meat"){
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
		
			// create a label for the checkbox, and also add in HTML DOM\
			var x = document.createElement("IMG");
			x.setAttribute("src", image);
		 	x.setAttribute("width", "304");
 		 	x.setAttribute("height", "228");
			s2.appendChild(x);
			s2.appendChild(document.createElement("br")); 
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode('$'+price + ' ' + productName));
			s2.appendChild(label);
		
		
		
		
		// create a breakline node and add in HTML DOM
			s2.appendChild(document.createElement("br"));   
		}
		// create the checkbox and add in HTML DOM
		 
	}

	//s2.appendChild(document.createElement("br"));  

		var para = document.createElement("P");
		para.innerHTML = "Current Cart : ";
		para.appendChild(document.createElement("br"));  

		for(var y = 0; y < totalItems.length; y++){
			para.appendChild(document.createTextNode(totalItems[y]));
			para.appendChild(document.createElement("br"));
		} 

		s2.appendChild(para);


}

function populateDairy(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, generateRestrictions());

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var price = optionArray[i].price;
		var image = optionArray[i].img;
		var cat = optionArray[i].category;
		if(cat == "dairy"){
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
		
			// create a label for the checkbox, and also add in HTML DOM\
			var x = document.createElement("IMG");
			x.setAttribute("src", image);
		 	x.setAttribute("width", "304");
 		 	x.setAttribute("height", "228");
			s2.appendChild(x);
			s2.appendChild(document.createElement("br")); 
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode('$'+price + ' ' + productName));
			s2.appendChild(label);
		
		
		
		
		// create a breakline node and add in HTML DOM
			s2.appendChild(document.createElement("br"));   
		}
		// create the checkbox and add in HTML DOM
		 
	}

	//s2.appendChild(document.createElement("br"));  

		var para = document.createElement("P");
		para.innerHTML = "Current Cart : ";
		para.appendChild(document.createElement("br"));  

		for(var y = 0; y < totalItems.length; y++){
			para.appendChild(document.createTextNode(totalItems[y]));
			para.appendChild(document.createElement("br"));
		} 

		s2.appendChild(para);


}


function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var price = optionArray[i].price;
		var image = optionArray[i].img;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM\
		var x = document.createElement("IMG");
		x.setAttribute("src", image);
		 x.setAttribute("width", "304");
 		 x.setAttribute("height", "228");
		s2.appendChild(x);
		s2.appendChild(document.createElement("br")); 
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode('$'+price + ' ' + productName));
		s2.appendChild(label);
		
		
		
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br")); 

	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

var totalItems = [];

function itemAdd(item){
	for (var i = 0; i < item.length; i++){
		if(!(totalItems.includes(item[i]))){
			totalItems.push(item[i]);
		}
		
	}
	for(var j = 0; j < totalItems.length; j++){
		console.log(totalItems[j]);
	}
}

function getTotalItems(){
	return totalItems;
}

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			//console.log(ele[i]);
			chosenProducts.push(ele[i].value);
			
		}
	}

	itemAdd(chosenProducts);

	for(var y = 0; y < totalItems.length; y++){
		para.appendChild(document.createTextNode(totalItems[y]));
		para.appendChild(document.createElement("br"));
	}

	

	
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(totalItems).toFixed(2)));
	
		
}