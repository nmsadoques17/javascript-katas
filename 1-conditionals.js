/* 1.1 - Conditionals with Prompt */

// Conditional where flavor = chocholate or vanilla
//prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
var flavor= prompt("Enter flavor");
if (flavor == "chocholate" || flavor == "vanilla") {
	alert("Here's your "+flavor+" ice cream.");
}else if (flavor =="strawberry") {
	alert("Sorry, but were all out of strawberry.");
}else {
	alert("no such flavor");
}