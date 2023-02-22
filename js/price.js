


const glazingPrices = {
	"Keep original": 0.0,
	"Sugar milk": 0.0,
	"Vanilla milk": 0.50,
	"Double chocolate": 1.50
};

const packPrices = {
	"1": 1, "3": 3, "6": 5, "12": 10
};

const basePrice = rolls[rollType]['basePrice'];
let currentGlazingPrice = 0; // keep original
let currentPackPrice = 1; // 1
let currentGlazing = "Keep original";
let currentPack = '1';


const basePriceField = document.querySelector("#add-cart span");
basePriceField.textContent = "$" + basePrice;

/* Populate glazing options with corresponding price adaptation values */
const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
	const option = document.createElement("option");
	option.textContent = glazing;
	option.value = glazing;
	glazingSelect.appendChild(option);
}

/* Populate pack options with corresponding price adaptation values */
const packSelect = document.querySelector("select#pack-options");

for (const [pack, price] of Object.entries(packPrices)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = pack;
	packSelect.appendChild(option);
}

/* Record the current glazing option and update the total price */
function glazingChange(element) {
	
	currentGlazing= element.value;
	updateTotalPrice();
}

/* Record the current pack option and update the total price */
function packChange(element) {
	//currentPack = element.textContent;
	currentPack= element.value;
	updateTotalPrice();
}

function updateTotalPrice() {
	const totalPrice = (basePrice + glazingPrices[currentGlazing]) * packPrices[currentPack];
	const totalPriceField = document.querySelector("#add-cart span");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

class Roll {

	   constructor(rollType, rollGlazing, packSize, basePrice) {
	       this.type = rollType;
	       this.glazing =  rollGlazing;
	       this.size = packSize;
	       this.basePrice = basePrice;
	   }
   }


function saveData() {
	let newRoll = new Roll(rollType,currentGlazing,currentPack,basePrice);
	cart.push(newRoll)
	console.log(cart)
}


