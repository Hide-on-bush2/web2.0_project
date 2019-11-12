var gaming = false;
var inMaze = false;

function starton() {
    gaming = true;
    inMaze = true;
}

function startout() {
    inMaze = false;
}

function endon() {
    if(gaming === true){
        if(inMaze === true){
            window.alert("you win");
        }
        else{
            window.alert("Don't cheat, you should start form the 'S'" +
                " and move to the 'E' inside the maze!");
        }
    }
    gaming = false;
}

function blockon() {
    if(gaming === true){
        document.getElementById("top1").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0l57vcnj30dw09bwf6.jpg')";
        document.getElementById("top2").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0l57vcnj30dw09bwf6.jpg')";
        document.getElementById("top3").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0l57vcnj30dw09bwf6.jpg')";
        document.getElementById("bottom1").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0l57vcnj30dw09bwf6.jpg')";
        document.getElementById("bottom2").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0l57vcnj30dw09bwf6.jpg')";
        // window.alert("you lose");
        setTimeout("alert('you lose')", 500);
        gaming = false;
    }
    inMaze = true;
}

function blockout() {
    if(gaming === true){
        inMaze = false
    }
}

function mazeout() {
    if(gaming === false){
        gaming = false;
        inMaze = false;
        document.getElementById("top1").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0nur0czj30ms0mqq4k.jpg')";
        document.getElementById("top2").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0nur0czj30ms0mqq4k.jpg')";
        document.getElementById("top3").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0nur0czj30ms0mqq4k.jpg')";
        document.getElementById("bottom1").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0nur0czj30ms0mqq4k.jpg')";
        document.getElementById("bottom2").style.backgroundImage =
            "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0nur0czj30ms0mqq4k.jpg')";
    }
}

function pathon() {
    if(gaming === true){
        inMaze = true;
    }
}

// function pathout() {
//     if(gaming === true){
//         inMaze = false;
//     }
// }



