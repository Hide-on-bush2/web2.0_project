# mole代码优化

## 优化前的JS代码

```angular2
var m_x = 0;
var m_y = 0;
var m_score = 0;
var leave_time = 30;
var gaming = false;



function hit(x, y) {
    if(gaming === false){
        return;
    }
    if(x === m_x && y === m_y){
        m_score += 1;
        document.getElementById(String(m_x) + "-" + String(m_y)).style.backgroundColor = "white";
        m_x = Math.floor(Math.random() * 6) + 1;
        m_y = Math.floor(Math.random() * 10) + 1;
        document.getElementById(String(m_x) + "-" + String(m_y)).style.backgroundColor = "blue";
    }
    else if(!(x === m_x && y === m_y)){
        if(m_score > 0){
            m_score -= 1;
        }
    }
    document.getElementById("t_score").innerHTML = m_score;
}

function Goback() {
	if(gaming === false){
		return;
	}
    if(leave_time === 30){
        m_x = Math.floor(Math.random() * 6) + 1;
        m_y = Math.floor(Math.random() * 10) + 1;
        document.getElementById(String(m_x) + "-" + String(m_y)).style.backgroundColor = "blue";
    }
    if(leave_time === 0){
        gaming = false;
        document.getElementById("gameOver").innerHTML = "Game over";
        document.getElementById(String(m_x) + "-" + String(m_y)).style.backgroundColor = "white";
        return;
    }
    // m_x = Math.floor(Math.random() * 6) + 1;
    // m_y = Math.floor(Math.random() * 10) + 1;
    // document.getElementById(String(m_x) + "-" + String(m_y)).style.backgroundColor = "red";
    setTimeout("Goback()", 1000);
    leave_time--;
    document.getElementById("t_time").innerHTML = leave_time;
}

function Begin() {
    if(gaming === true){
        gaming = false;
        document.getElementById("gameOver").innerHTML = "Game over";
        for(var i = 1;i <= 6;i++){
        	for(var j = 1;j <= 10;j++){
            	document.getElementById(String(i) + "-" + String(j)).style.backgroundColor = "white";
        	}
    	}
    }
    else{
    	leave_time = 30;
    	m_score = 0;
    	for(var i = 1;i <= 6;i++){
        	for(var j = 1;j <= 10;j++){
            	document.getElementById(String(i) + "-" + String(j)).style.backgroundColor = "white";
        	}
    	}
    	gaming = true;
    	document.getElementById("gameOver").innerHTML = "Game on";
    	Goback();
    	document.getElementById("t_time").innerHTML = leave_time;
    	}
}
```

## 优化后的jquery代码

```angular2
var m_x = 0;
var m_y = 0;
var m_score = 0;
var leave_time = 30;
var gaming = false;
function Goback() {
	if(gaming === false){return;}
    if(leave_time === 30){
        m_x = Math.floor(Math.random() * 6) + 1, m_y = Math.floor(Math.random() * 10) + 1;
        $("#" + String(m_x) + "-" + String(m_y)).css({"background-color" : "blue"});
    }
    if(leave_time === 0){
        gaming = false;
        $("#gameOver").text("Game over");
        $("#" + String(m_x) + "-" + String(m_y)).css({"background-color" : "white"});
        return;
    }
    setTimeout("Goback()", 1000);leave_time--;$("#t_time").text(leave_time);
}
$(document).ready(function () {
    $("#startOrEnd").click(function () {
       if(gaming === true){
           gaming = false;
           $("#gameOver").text("Game over");
           for(var i = 1;i <= 6;i++){for(var j = 1;j <= 10;j++){$("#" + String(i) + "-" + String(j)).css({"background-color" : "white"});}}
       }
       else{
           leave_time = 30, m_score = 0;
           for(var i = 1;i <= 6;i++){for(var j = 1;j <= 10;j++){$("#" + String(i) + "-" + String(j)).css({"background-color" : "white"});}}
           gaming = true;$("#gameOver").text("Game on");Goback();$("#t_time").text(leave_time);
       }
   });
   $("#map table tr td button").each(function () {
       $(this).click(function () {
           var x = parseInt($(this).attr("id")[0]), y = parseInt($(this).attr("id")[2]);
           if(gaming === false){return;}
           if(x === m_x && y === m_y){
               m_score += 1;$("#" + String(m_x) + "-" + String(m_y)).css({"background-color" : "white"});m_x = Math.floor(Math.random() * 6) + 1;m_y = Math.floor(Math.random() * 10) + 1;$("#" + String(m_x) + "-" + String(m_y)).css({"background-color" : "blue"});
           }
           else if(!(x === m_x && y === m_y)){if(m_score > 0){m_score -= 1;}}
           $("#t_score").text(m_score);
       });});});
```

## 减少的代码行数

优化前的代码大概为74行，优化后的代码大概为42行，可以大幅度地减少的代码数量
数量

