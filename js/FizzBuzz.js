// クラス
function FizzBuzz(value) {
	this.maxValue = value;
}

// インスタンスメソッド
function _doFizzBuzz() {
	var resultFizzBuzz = "1";
	var result;
	for( var i = 2; i <= this.maxValue ; i++ ) {
		result = this.getFizzBuzz(i);
		resultFizzBuzz = resultFizzBuzz + "," + result;
	}
	return teresultFizzBuzzst;
}
FizzBuzz.prototype.doFizzBuzz = _doFizzBuzz;

// インスタンスメソッド
function _getFizzBuzz(value) {
	var resultFizz = ( value % 3 == 0 );
	var resultBuzz = ( value % 5 == 0 );
	
	if ( resultFizz && resultBuzz ) { return "Fizz Buzz"; }
	if ( resultFizz ) { return "Fizz"; }
	if ( resultBuzz ) { return "Buzz"; }
	
	return value;
	
	// return "1";
}
FizzBuzz.prototype.getFizzBuzz = _getFizzBuzz;

// 呼び出し元
function dispTest() {
	var fizzBuzzTest = new FizzBuzz(50);
	document.getElementById("test").innerHTML = fizzBuzzTest.doFizzBuzz();
}

