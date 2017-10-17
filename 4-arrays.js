/* 1.4 - Arrays */

// Conditional where flavor = chocholate or vanilla
//prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// XXContinue while flavor not equal to "coffee"XX
// Put in a For Loop asking for 3 scoops.
var ourFlavors=["chocholate","vanilla","strawberry"];
var scoops = [];

for(scoop=1;scoop<4;scoop++){
	var flavor= prompt("Enter flavor");
	
	if (inArray(flavor, ourFlavors)==true) {
		
		if (flavor =="strawberry") {
			alert("Sorry, but were all out of "+flavor+".");
			scoop = scoop - 1;
		
		}
		else{
			scoops[scoop] = flavor;
		}
	}
	else {
		alert("We don't carry "+flavor+".");
		scoop = scoop - 1;
	}
	
}
alert("Okay, here's "+scoops+" cone");


function inArray(svalue,tarray){
	answer=false;
	for (index=0;index<tarray.length;index++){
		if(svalue==tarray[index]){
			answer=true;
		}
	}
	return answer;
}