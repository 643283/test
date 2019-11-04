function hello(){
	alert("hello");
}

function triangle(){
	let A1 = parseInt(prompt ("enter the first angle"))
	if (A1 > 0 && A1 <179) {
	let A2 = parseInt(prompt ("enter the second angle"))
	let A3 = 180 - (A1 + A2) 
	alert (A3)
	}
	else{alert("only type numbers 1-178!")}
}

function year(){
	let inputyear =  parseInt(prompt ("enter the year"))
	if (inputyear > 0){
	let century = Math.ceil(inputyear / 100)
	alert (century)
	}
	else{alert("enter only numbers!")}
}

function tenfour(){
	for (let x = 1; x < 101; x++){
		if (x % 4 == 0 && x % 10 == 0){
		console.log ("tenfour");
		}
	else if (x % 4 == 0){
		console.log ("Four");
	}
	else if (x % 10 == 0) {
		console.log ("Ten")
	}
	else {console.log (x)}
	}
}
