var expression = "";
$(document).ready(function () {$("#bottons table tr td button").each(function () {$(this).click(function () {
			var s = $(this).text();
			if(s === '='){
				try{$("#result").text(eval(expression));}
				catch(exception){window.alert("输入表达式错误");}
				expression = "";
			}
			else if(s === 'CE'){
				expression = "";
				$("#result").text("0");
			}
			else if(s === '<-'){
				expression = expression.substr(0, expression.length - 1);
				$("#result").text(expression);
			}
			else{
				expression += s;
				$("#result").text(expression);
			}});});});