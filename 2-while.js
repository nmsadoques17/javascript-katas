/* 1.2 - While Loop */

// Conditional where flavor = chocholate or vanilla
//prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// Continue while flavor not equal to "coffee"
var flavor= prompt("Enter flavor");
var scoops= 0
while (flavor != "coffee"){
	if (flavor == "chocholate" || flavor == "vanilla") {
		alert("Here's 1 scoop of "+flavor+" ice cream.");
		scoops ++
	}else if (flavor =="strawberry") {
		alert("Sorry, but were all out of "+flavor+".");
	}else {
		alert("no such flavor");
	}
}
alert("Okay, here's"+scoops+" of "+flavor+" ice cream");