function generateRandomNum(){
	let randomNumber = parseInt(Math.random()*130);
	if(randomNumber < 47){
		randomNumber += 47;
	}
	return randomNumber;
}
function makeid(l) {
  // write your code here
	let str = "";
	for(let i=0;i<l;i++){
		str += String.fromCharCode(generateRandomNum);
	}
	return str;
}

// Do not change the code below.
/*const l = prompt("Enter a number.");
alert(makeid(l));*/

