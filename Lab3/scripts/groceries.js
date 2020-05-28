// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products	



var products = [
	{
		name: "broccoli",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: false,
		img: "https://kukulhufihaara.com/wp-content/uploads/2020/05/Broccoli.png"
	},
	{
		name: "organic brocoli",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
		organic: true,
		img: "https://kukulhufihaara.com/wp-content/uploads/2020/05/Broccoli.png"
		
	},
	{
		name: "bread",
		category: "grain",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false,
		img: "https://img.icons8.com/dusk/2x/bread.png"
		
	},
	{
		name: "salmon",
		category: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 10.55,
		organic: false,
		img: "https://image.freepik.com/free-photo/raw-salmon-meat_74190-1592.jpg"
		
	},
	{
		name: "milk",
		category: "dairy",
		vegetarian: true,
		glutenFree: true,
		price: 4.49,
		organic: false,
		img: "https://selectbakery.ca/wp-content/uploads/2020/04/Natrel-2l.png"
	},
	{
		name: "vanilla yogurt",
		category: "dairy",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false,
		img: "https://az836796.vo.msecnd.net/media/image/product/en/large/0005680009829.jpg"
	},
	{
		name: "chedder cheese",
		category: "dairy",
		vegetarian: true,
		glutenFree: true,
		price: 5.89,
		organic: false,
		img: "https://i5.walmartimages.ca/images/Enlarge/577/869/6000199577869.jpg"
	},
	{
		name: "mini cucumber",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 6.49,
		organic: false,
		img: "https://i5.walmartimages.ca/images/Enlarge/168/268/999999-57836168268.jpg"
	},
	{
		name: "organic mini cucumber",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 7.49,
		organic: true,
		img: "https://i5.walmartimages.ca/images/Enlarge/168/268/999999-57836168268.jpg"
	},
	{
		name: "bell pepper",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 2.38,
		organic: false,
		img: "https://images-na.ssl-images-amazon.com/images/I/51lRpMsK6oL._AC_SX450_.jpg"
	},
	{
		name: "organic bell pepper",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 3.38,
		organic: true,
		img: "https://images-na.ssl-images-amazon.com/images/I/51lRpMsK6oL._AC_SX450_.jpg"
	},
	{
		name: "strawberries",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false,
		img: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000x2000fit/7/5/6/108756_strawberry.jpg"
	},
	{
		name: "organic strawberries",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 4.99,
		organic: true,
		img: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000x2000fit/7/5/6/108756_strawberry.jpg"
	},
	{
		name: "bananas",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 1.26,
		organic: false,
		img: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg"
	},
	{
		name: "organic bananas",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 2.26,
		organic: true,
		img: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg"
	},
	{
		name: "chicken thighs",
		category: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 7.35,
		organic: false,
		img: "https://i5.walmartimages.ca/images/Enlarge/075/384/6000201075384.jpg"
	},
	{
		name: "ground beef",
		category: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 7.99,
		organic: false,
		img: "https://embed.widencdn.net/img/beef/4hh1pywcnj/exact/Grind_Fine_85.psd?keep=c&u=7fueml"
	},
	{
		name: "tortillas",
		category: "grain",
		vegetarian: true,
		glutenFree: false,
		price: 2.99,
		organic: false,
		img: "https://www.missionfoods.com/uploads/Mission-Soft-Taco-Flour-Tortilla_MLpFNvo.png"
	},
	{
		name: "croissants",
		category: "grain",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false,
		img: "https://assets.shop.loblaws.ca/products_jpeg/20975943/en/20975943_lrg_1_@1x.jpg"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function generateRestrictions(){
	var ele = document.getElementsByName("preference");
	var chosenRestrict = [];

	for (var i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			//console.log(ele[i]);
			chosenRestrict.push(ele[i].value);
			
		}
	}

	for (var i = 0; i < chosenRestrict.length; i++) { 
		console.log(chosenRestrict[i]);
	}



	// if(chosenRestrict.includes("Vegetarian") && !(chosenRestrict.includes("Organic","gluten"))){
	// 	return "Vegetarian";
	// }else if(chosenRestrict.includes("gluten") && !(chosenRestrict.includes("Organic","Vegetarian"))){
	// 	return "GlutenFree";
	// }else if(chosenRestrict.includes("Organic") && !(chosenRestrict.includes("gluten")) && !(chosenRestrict.includes("Vegetarian"))){
	// 	return "Organic";
	// }else if(chosenRestrict.includes("Vegetarian","gluten") && !(chosenRestrict.includes("Organic"))){
	// 	return "VegGluten";
	// }else if(chosenRestrict.includes("Vegetarian","Organic") && !(chosenRestrict.includes("gluten"))){
	// 	return "VegOrg";
	// }else if (chosenRestrict.includes("Vegetarian,gluten,Organic")){
	// 	return "VegGlutOrg";
	// }else if(chosenRestrict.includes("gluten,Organic") && !(chosenRestrict.includes("Vegetarian"))){
	// 	return "GlutOrg";
	// }else{
	// 	return "None";
	// }


	if(chosenRestrict.includes("Vegetarian") && chosenRestrict.includes("gluten") && chosenRestrict.includes("Organic")){
		return "VegGlutOrg";
	}else if(chosenRestrict.includes("Vegetarian") && (chosenRestrict.includes("gluten")) && !(chosenRestrict.includes("Organic"))){
		return "VegGluten";
	}else if(chosenRestrict.includes("Vegetarian") && chosenRestrict.includes("Organic") && !(chosenRestrict.includes("gluten"))){
		return "VegOrg";
	}else if(chosenRestrict.includes("gluten") && (chosenRestrict.includes("Organic")) && !(chosenRestrict.includes("Vegetarian"))){
		return "GlutOrg";
	}else if(chosenRestrict.includes("Vegetarian") && !(chosenRestrict.includes("Organic")) && !(chosenRestrict.includes("gluten"))){
		return "Vegetarian";
	}else if (chosenRestrict.includes("gluten") && !(chosenRestrict.includes("Vegetarian")) && !(chosenRestrict.includes("Organic"))){
		return "GlutenFree";
	}else if (chosenRestrict.includes("Organic") && !(chosenRestrict.includes("Vegetarian")) && !(chosenRestrict.includes("gluten"))){
		return "Organic";
	}else{
		return "None";
	}



}

function restrictListProducts(prods, restriction) {
	console.log(restriction);
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			//product_names.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			//product_names.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			//product_names.push(prods[i].price);
		}else if ((restriction == "VegGluten") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});

		}else if((restriction == "Organic")){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true){
					product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
				}
			}else{
				product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			}
		}else if((restriction == "VegOrg")){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true && prods[i].vegetarian == true){
					product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
				}
			}else if (prods[i].vegetarian == true){
				product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			}
		}else if((restriction == "GlutOrg") && (prods[i].glutenFree == true)){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true){
					product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
				}
			}else {
				product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			}
		}else if((restriction == "VegGlutOrg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true){
					product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
				}
			}else if (prods[i].vegetarian==true && prods[i].glutenFree == true){
				product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img,category:prods[i].category});
			}
		}
	}

	//sort the array

	product_names.sort((a,b) => (a.price > b.price) ? 1: -1)
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
var totalItems = [];
function getTotalItem(chosenProducts) {
	//totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalItems.push({name:products[i].name,price:products[i].price});
		}
	}
	return totalItems;
}
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}