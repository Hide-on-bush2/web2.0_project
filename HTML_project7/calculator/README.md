#calculator代码简化


## 优化前的JS代码

```angular2
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


```

## 优化后的jquery代码

```angular2
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
```

## 减少的代码行数

用JS写的代码大概为25行，用jquery写的代码大概为20行。
且每一行的代码数量都有所减少。代码行数简化幅度不大是因为
无法避免一些必要的条件判断。

## 心得

用jquery代替JS写脚本可以有效简化代码，在JS中，需要捕获某
个函数需要用document.getElementById("idname"")或者
document.getElementByClass("classname"")来捕获，不仅
需要指定捕获的元素类型，而且代码也比较繁杂，但是使用jquery只需要
$("classmame"")或者$("idname")，代码不仅简洁而且不惜要指定是
类名还是ID名。此外，jquery中函数each可以将函数分配到元素集合的
每一个元素中，大大简化了编写脚本的繁琐。