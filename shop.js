var DonutShop = function(name, minCustomers, maxCustomers, avgPurchase){

	this.name = name;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgPurchase  = avgPurchase;
 this.render = function() {
		var tr           = document.createElement ('tr');
		var table        = document.getElementById ('donut-table');
		var donArr = this.donutPerHour();
		var total 		 = 0;
		console.log ("Inside the render");
		
		tr.innerHTML = this.name;
		table.appendChild(tr);

	for (var i = 0; i < donArr.length; i++) {
		var td = document.createElement('td');
		td.innerHTML = donArr[i];
		tr.appendChild(td);
		total += donArr[i];
	}
	 
	 var totD = document.createElement('td');
	 	totD.innerHTML = total;
	 	tr.appendChild(totD);
	 }
	}
	
	DonutShop.prototype.donutPerHour = function() {
		var avgDonutHr = [];
		for(var i = 0; i < 12; i++) {
			avgDonutHr.push(Math.floor(Math.random() *this.maxCustomers - this.minCustomers) + this.minCustomers) *this.avgPurchase;
		}
		console.log(avgDonutHr);
		return avgDonutHr;
	}

var downtown = new DonutShop("Downtown", 8,43,4.5);
var capitolHill = new DonutShop ("Capitol Hill", 4,37,2)
var southLakeUnion= new DonutShop ("South Lake Union",9,23,6.33)
var wedgewood = new DonutShop ("Wedgewood",2,28,1.25)
var ballard = new DonutShop ("Ballard",8,58,3.75)

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();