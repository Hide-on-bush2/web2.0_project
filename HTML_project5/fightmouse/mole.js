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