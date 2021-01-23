// me while shopping 🛒 🛍️ 📝 😅

const shoppingList = [
	'dress', 'healthy stuffs', 'stationaries', 'needs', ..."New things"
];
shoppingList.forEach(item => {
	if (item == "New things"){
		item.check() // just to explore
	}
	if(item.cost() < "Budget"){
		item.purchase();
	}else{
		if (item.options() == "Like"){
			item.purchase();
		}
		continue; // next time
	}
});

"🙏 Stay ❤️ tuned 🙏"