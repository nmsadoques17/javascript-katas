/* 1.3 - For Loop */

// Conditional where flavor = chocholate or vanilla
//prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// XXContinue while flavor not equal to "coffee"XX
// Put in a For Loop asking for 3 scoops.

var scoops = 0;

for(var i=1; i<4; i++){
	var flavor= prompt("Enter flavor");
	
	if (flavor == "chocholate" || flavor == "vanilla") {
		alert("Here's 1 scoop of "+flavor+" ice cream.");
		
	}
	else if (flavor =="strawberry") {
		alert("Sorry, but were all out of "+flavor+".");
		i = i - 1;
		
	}
	else if (flavor==""&& i !== 1){
		scoops = i;
		break;
	}
	else {
		alert("no such flavor");
		i = i - 1;
	}
	scoops = i;
}
alert("Okay, here's "+scoops+" of "+flavor+" ice cream");