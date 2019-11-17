var gaming = false;
var inMaze = false;

$(document).ready(function () {
    $("#map").mouseleave(function () {
        if(gaming === false){
            gaming = false;
            inMaze = false;
            $("#block").each(function () {
                $(this).css({"background-image" : "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0nur0czj30ms0mqq4k.jpg')"});
            })
        }
    });

    $("#block").mouseleave(function () {
        if(gaming === true){
         inMaze = false;
        }
    });

    $("#block").mouseenter(function () {
        if(gaming === true){
            $("#block").each(function () {
                $(this).css({"background-image" : "url('https://tva1.sinaimg.cn/large/006y8mN6ly1g8b0l57vcnj30dw09bwf6.jpg')"});
            });
            setTimeout("alert('you lose')", 500);
            gaming = false;
        }
        inMaze = true;
    });

    $("#path").mouseleave(function () {
        if(gaming === true){
            inMaze = true;
        }
    });

    $("#start").mouseenter(function () {
        gaming = true;
        inMaze = true;
    });

    $("#start").mouseleave(function () {
        inMaze = false;
    });

    $("#end").mouseenter(function () {
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
    })
});




