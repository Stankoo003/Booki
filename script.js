const array = [
	
	{
		_id: 1,
		title: 'Auberge la Cannebiere',
		img: "images/hebergements/2_large/marcus-loke-WQJvWU_HZFo-unsplash.jpg",
		familyFriendly: true,
		price: 25,
		romantic:true,
		petsAllowed: true,
		stars:4,
		city: "Marseille",

	},
	{
		_id: 2,
		title: 'Hôtel du port',
		img: "images/hebergements/2_large/fred-kleber-gTbaxaVLvsg-unsplash.jpg",
		familyFriendly: false,
		romantic: true,
		price: 52,
		stars: 5,
		city: "Marseille",
	},
	{
		_id: 3,
		title: 'Les mouettes Hotel',
		img: "images/hebergements/2_large/reisetopia-B8WIgxA_PFU-unsplash.jpg",
		familyFriendly: true,
		romantic: false,
		price: 76,
		stars: 4,
		city: "Marseille",
	},
	{
		_id: 4,
		title: 'Hôtel de la mer',
		img:"images/hebergements/2_large/annie-spratt-Eg1qcIitAuA-unsplash.jpg",
		familyFriendly: false,
		romantic: false,
		price: 46,
		petsAllowed: true,
		stars: 3,
		city: "Marseille",
	},
	{
		_id: 5,
		title: 'Auberge Le Panier',
		img:"images/hebergements/2_large/nicate-lee-kT-ZyaiwBe0-unsplash.jpg",
		familyFriendly: false,
		romantic: false,
		price:23,
		petsAllowed: true,
		stars: 4,
		city: "Marseille",
	},
	{
		_id: 6,
		title: 'Hôtel chez Amina',
		img: "images/hebergements/2_large/febrian-zakaria-M6S1WvfW68A-unsplash.jpg",
		familyFriendly: false,
		romantic: true,
		price: 96,
		stars: 5,
		city: "Marseille",
	},
	{
		_id: 7,
		title: 'Hôtel Dieu',
		img: "images/intercontinental-marseille-4132137386-2x1.jpeg",
		familyFriendly: true,
		romantic: true,
		price: 114,
		petsAllowed: true,
		stars: 5,
		city: "Marseille",

	},
	{
		_id: 8,
		title: 'Villa Gallici',
		img: "images/119_0_gallici_fsa-xl.jpeg",
		familyFriendly: true,
		romantic: true,
		price: 100,
		petsAllowed: false,
		stars:4,
		city: "Marseille",
	},
	{
		_id: 9,
		title: 'Pink Hotel',
		img: "images/pink-hotel.jpeg",
		familyFriendly: true,
		romantic: true,
		price: 89,
		petsAllowed: false,
		stars:5,
		city: "Paris",
	},
	{
		_id: 10,
		title: 'Shangri-La Paris',
		img: "images/parishotel.jpeg",
		familyFriendly: false,
		romantic: true,
		price: 200,
		petsAllowed: true,
		stars:4,
		city: "Paris",
	},
	{
		_id: 11,
		title: 'Villa Gallici',
		img: "images/119_0_gallici_fsa-xl.jpeg",
		familyFriendly: true,
		romantic: true,
		price: 100,
		petsAllowed: false,
		stars:4,
		city: "Paris",
	},
	{
		_id: 12,
		title: 'Hotel Lutetia',
		img: "images/Hotel_Lutetia_Fa--ade_023.4.jpg",
		familyFriendly: false,
		romantic: false,
		price: 100,
		petsAllowed: false,
		stars:5,
		city: "Paris",
	},
	{
		_id: 13,
		title: 'Polo Towers',
		img: "images/302715553.jpg",
		familyFriendly: false,
		romantic: false,
		price: 120,
		petsAllowed: false,
		stars:5,
		city: "Las Vegas",
	},
	{
		_id: 14,
		title: 'Comfort Inn & Suites Henderson',
		img: "images/169890151.jpg",
		familyFriendly: false,
		romantic: true,
		price: 150,
		petsAllowed: false,
		stars:4,
		city: "Los Angeles",
	}


]
const arrayOfActivities = [	
	"first",
	"second",
	"third",
	"forth",
	"fifth",
	"sixth",
	"seventh",
	"eight",
	"ninth"
]
let filterArray;
let initialArray = array.filter((value, index) => value.city == "Marseille");
console.log(filterArray)
function load(){
	for (let i = 0; i < 6; i++) {
		
		let element = document.getElementById(arrayOfActivities[i])
		element.style.display = "inline-block"
		let stars = element.getElementsByClassName("fa-star")
		let title = element.getElementsByClassName("title")
		let price = element.getElementsByClassName("price")
		let img = element.getElementsByClassName("imageAc")
		img[0].src = initialArray[i].img
		price[0].textContent = initialArray[i].price
		title[0].textContent = initialArray[i].title;
		for(let j=0; j<stars.length; j++){
			if(j<initialArray[i].stars){
				stars[j].style.color = "#0065FC"
			}else{
				stars[j].style.color = "#d9d9d9"
			}
		}
	}
	disableThirdRow();

	if(array.length<=6){
		showMoreEl.style.display = "none"
	}else{
		showMoreEl.style.display = "block"
	}
	filterArray = initialArray;

}
function disableThirdRow(){
	document.getElementById(arrayOfActivities[6]).style.display = "none";
	document.getElementById(arrayOfActivities[7]).style.display = "none";
	document.getElementById(arrayOfActivities[8]).style.display = "none";
}

function showFromArray(a){
	for (let i = 0; i < limitValue; i++) {
		let element = document.getElementById(arrayOfActivities[i])
		
		if(i<a.length){
			element.style.display = "inline-block"
			let stars = element.getElementsByClassName("fa-star")
			let title = element.getElementsByClassName("title")
			let price = element.getElementsByClassName("price")
			let img = element.getElementsByClassName("imageAc")
			img[0].src = a[i].img
			price[0].textContent = a[i].price
			title[0].textContent = a[i].title;
			for(let j=0; j<stars.length; j++){
				if(j<a[i].stars){
					stars[j].style.color = "#0065FC"
				}else{
					stars[j].style.color = "#d9d9d9"
				}
			}
		}else{
			element.style.display = "none"
		}
	}
	if(a.length<=6){
		showMoreEl.style.display = "none"
	}else{
		showMoreEl.style.display = "block"
	}

}
let firstArticle = document.getElementById("firstArticle");
function showMoreClick(){
	if(showMoreClicked){
		limitValue = 6;
		showMoreClicked =false;
		showMoreEl.textContent = "Show more"
		disableThirdRow();
	}else{
		showMoreClicked =true;
		limitValue = 9;
		showMoreEl.textContent = "Show less"
	}
	showFromArray(filterArray)
}

  


let showMoreEl = document.getElementById("showMore")
let lowCostEl = document.getElementById("lowCost-el");
let familyFriendlyEl = document.getElementById("familyFriendly-el");
let romanticEl = document.getElementById("romantic-el");
let petsEl = document.getElementById("pets-el");
let citySpan = document.getElementsByClassName("city")


let lowCostClicked = false;
let familyFriendlyClicked = false;
let romaticClicked = false;
let petsClicked = false;
let showMoreClicked = false; 
let limitValue = 6;
let lowCostReference = 50;
const list = document.getElementById("list")
const srch = document.getElementById("txt");

load();

srch.addEventListener('input',(event)=>{
	let value = event.target.value
	if(value && value.trim().length >0){
		value = value.trim();
		let newList = array.filter(array=>{
			return array.city.includes(value)
		}).sort((arrayA,arrayB)=>{
			return setRelevancy(arrayB.city, value) - setRelevancy(arrayA.city,value)
		}  );
		
		setList(newList);

	}else{
		clearList();
	}


})
function setList(group){
	clearList();
	let k = new Set();
	for(const town of group){

		k.add(town.city);	
	}
	for(let i of k.values()){
		const item = document.createElement('li');
		item.classList.add('list-group-item')
		const textNode = document.createTextNode(i);
		item.onclick = function(){
			srch.value = i;
		};
		item.appendChild(textNode);
		list.appendChild(item);
	}

	if(group.length === 0){
		setNoResaults();
	}

}
function clearList(){
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}

}
function setNoResaults(){
	const item = document.createElement('li');
	item.classList.add('list-group-item')
	const textNode = document.createTextNode('No cities found');
	item.appendChild(textNode);
	list.appendChild(item);

}
function setRelevancy(value,searchTerm){
	if(value === searchTerm){
		return 2
	}else if(value.startsWith(searchTerm)){
		return 1
	}else if(value.includes(searchTerm)){
		return 0;
	}
}


function search(){
	let input= srch.value;
	filterArray = array.filter((value, index) => value.city == input)
	initialArray = filterArray;
	showMoreClicked = true;
	showMoreClick();
	showFromArray(filterArray)
	console.log(citySpan)
	citySpan[0].textContent = input;
	citySpan[1].textContent = input;
}




function lowCostFilter(){
	if(!lowCostClicked){
		lowCostEl.style.background = "#deebff";
		lowCostClicked = true;
	}else{
		lowCostEl.style.background = "#ffffff";
		lowCostClicked = false;
	}
	if(lowCostClicked===false && familyFriendlyClicked ===false && romaticClicked===false && petsClicked ===false){
		load();
		
	}else if(lowCostClicked){
		filterArray = filterArray.filter((value, index) => value.price <= lowCostReference)
	}
	showFromArray(filterArray)
}
function familyFilter(){
	let prev
	if(!familyFriendlyClicked){
		familyFriendlyEl.style.background = "#deebff";
		familyFriendlyClicked = true;
		}else{
		familyFriendlyEl.style.background = "#ffffff";
		familyFriendlyClicked = false;
		
	}
	if(lowCostClicked===false && familyFriendlyClicked ===false && romaticClicked===false && petsClicked ===false){
		load();
		
	}else if(familyFriendlyClicked){

		filterArray = filterArray.filter((value, index) => value.familyFriendly === familyFriendlyClicked)
	
	}
	showFromArray(filterArray)
	
}
function romanticFilter(){
	if(!romaticClicked){
		romanticEl.style.background = "#deebff";
		romaticClicked = true;
	}else{
		romanticEl.style.background = "#ffffff";
		romaticClicked= false;
		
	}
	if(lowCostClicked===false && familyFriendlyClicked ===false && romaticClicked===false && petsClicked ===false){
		load();
		
	}else{
		filterArray = filterArray.filter((value, index) => value.romantic=== romaticClicked)
		showFromArray(filterArray)
	}


}
function petsFilter(){
	if(!petsClicked){
		petsEl.style.background = "#deebff";
		petsClicked = true;
	}else{
		petsEl.style.background = "#ffffff";
		petsClicked = false;
	}
	if(lowCostClicked===false && familyFriendlyClicked ===false && romaticClicked===false && petsClicked ===false){
		load();
		filterArray =array
	}else{
		filterArray = filterArray.filter((value, index) => value.petsAllowed=== petsClicked)
		showFromArray(filterArray)
	}
}


console.log( array.filter((value, index) => value.familyFriendly === true) )

