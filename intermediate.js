	cars =["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
	cars = cars.sort();
	//document.write(cars)

	fruits = ["apple", "banana", "kiwi"];
	fruits.push( "orange");
	document.write("<br>"+fruits)
	fruits.pop();
	document.write("<br>"+fruits)

	animals = ["monkey","horse","dog"];
	//document.write(animals)

	animals.sort();
	//document.write(animals)

	animals.unshift("cat");
	document.write(animals);

	var fruit_string="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

	fruits2=new Array();
	fruits2=fruit_string.split("/");
	console.log(fruits2.join("\n"))
	document.write("<br>")
	document.write(fruits2.join("<br>"))
