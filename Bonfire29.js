
function sumFibs(num) {
	var arrayOfFibs = [1,1];
	function odd(test){
		return test % 2 !== 0;
	}
	function add(a,b){
		return a + b;
	}
	for (var i = 0; arrayOfFibs[i+1] <= num; i++){
		arrayOfFibs.push(arrayOfFibs[i]+arrayOfFibs[i+1]);
		
	}
	
	num = arrayOfFibs.filter(odd);
	num.pop();
	num = num.reduce(add, 0)

	console.log(num);
  return num;
}


sumFibs(75025);
