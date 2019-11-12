var expression = "";
function calculate(s){
	if(s == '='){
		try{
			document.getElementById("result").innerHTML = eval(expression);
		}
		catch(exception){
			window.alert("输入表达式错误");
		}
		expression = "";
	}
	else if(s == 'CE'){
		expression = "";
		document.getElementById("result").innerHTML = "0";
	}
	else if(s == '<-'){
		expression = expression.substr(0, expression.length - 1);
		document.getElementById("result").innerHTML = expression;
	}
	else{
		expression += s;
		document.getElementById("result").innerHTML = expression;
	}
}