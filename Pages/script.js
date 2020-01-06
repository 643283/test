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
function encryption(){
	let plainText = prompt("enter your message")
	var alphabet = 'a/b=c+d$efgh^ijkl*mn?op#qr&stu@vw,x!y zABCDEFGHIJKLMNOPQRSTUVWXYZ-_()`~%'.split('');
	let cypherText = ""
	let letterNum = 0
	for (var i = 0; i < plainText.length; i++) {
		console.log(plainText[i % 72])
		letterNum = (alphabet.indexOf(plainText[i]))
		console.log(letterNum);
		console.log(letterNum+3)
		cypherText += alphabet[(letterNum+3) % 72]
		console.log(cypherText)
	}
	 document.getElementById("cypher").innerHTML = cypherText;
}
function decryption(){
	let cypherText = prompt("enter your message")
	var alphabet = 'a/b=c+d$efgh^ijkl*mn?op#qr&stu@vw,x!y zABCDEFGHIJKLMNOPQRSTUVWXYZ-_()`~%'.split('');
	let plainText = ""
	let letterNum = 0
	for (var i = 0; i < cypherText.length; i++) {
			letterNum = (alphabet.indexOf(cypherText[i]))
	if (alphabet.indexOf(cypherText[i]) < 3){
		plainText += alphabet[(letterNum-3) + 72]
	}
	else {
		console.log(cypherText[i])
		console.log(letterNum);
		console.log(letterNum-3)
		plainText += alphabet[(letterNum-3)]
		console.log(plainText)
	}
	}
	 document.getElementById("plain").innerHTML = plainText;
}