// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: false
	},
	{
		name: "organic brocoli",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
		organic: true
		
	},
	{
		name: "bread",
		category: "grain",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false
		
	},
	{
		name: "salmon",
		category: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 10.55,
		organic: false
		
	},
	{
		name: "milk",
		category: "dairy",
		vegetarian: true,
		glutenFree: true,
		price: 4.49,
		organic: false
	},
	{
		name: "vanilla yogurt",
		category: "dairy",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false
	},
	{
		name: "chedder cheese",
		category: "dairy",
		vegetarian: true,
		glutenFree: true,
		price: 5.89,
		organic: false
	},
	{
		name: "mini cucumber",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 6.49,
		organic: false
	},
	{
		name: "organic mini cucumber",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 7.49,
		organic: true
	},
	{
		name: "bell pepper",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 2.38,
		organic: false
	},
	{
		name: "organic bell pepper",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 3.38,
		organic: true
	},
	{
		name: "strawberries",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false
	},
	{
		name: "organic strawberries",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 4.99,
		organic: true
	},
	{
		name: "bananas",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 1.26,
		organic: false
	},
	{
		name: "organic bananas",
		category: "veg",
		vegetarian: true,
		glutenFree: true,
		price: 2.26,
		organic: true
	},
	{
		name: "chicken thighs",
		category: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 7.35,
		organic: false
	},
	{
		name: "ground beef",
		category: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 7.99,
		organic: false
	},
	{
		name: "tortillas",
		category: "grain",
		vegetarian: true,
		glutenFree: false,
		price: 2.99,
		organic: false
	},
	{
		name: "croissants",
		category: "grain",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		organic: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name,price: prods[i].price});
			//product_names.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push({name: prods[i].name,price: prods[i].price});
			//product_names.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push({name: prods[i].name,price: prods[i].price});
			//product_names.push(prods[i].price);
		}else if ((restriction == "VegGluten") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push({name: prods[i].name,price: prods[i].price});

		}else if((restriction == "VegOrg")){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true){
					product_names.push({name: prods[i].name,price: prods[i].price});
				}
			}else{
				product_names.push({name: prods[i].name,price: prods[i].price});
			}
		}else if((restriction == "GlutOrg") && (prods[i].glutenFree == true)){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true){
					product_names.push({name: prods[i].name,price: prods[i].price});
				}
			}else{
				product_names.push({name: prods[i].name,price: prods[i].price});
			}
		}else if((restriction == "VegGlutOrg") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			if(prods[i].category == "veg"){
				if(prods[i].organic == true){
					product_names.push({name: prods[i].name,price: prods[i].price});
				}
			}else{
				product_names.push({name: prods[i].name,price: prods[i].price});
			}
		}
	}

	//sort the array

	product_names.sort((a,b) => (a.price > b.price) ? 1: -1)
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}