
var global = {
      game_area: null,
      pics: [],
      empty: null,
      time: null,
      step: null,
      start: false,
      firstload: true,
      difficulty: 1,
      timeId: null
}

window.onload = function () {
      if (global.firstload == true) {
            global.firstload = false;
            global.game_area = document.getElementById('fifteen');
            global.step = document.getElementById('step');
            global.time = document.getElementById('time');
            global.difficulty = document.getElementsByTagName('select')[0];
      }
      else {
            while (global.game_area.hasChildNodes())
                  global.game_area.removeChild(global.game_area.firstChild);
      }


      createPuzzle();

      global.empty = document.getElementById('empty');
      global.pics = document.getElementById('fifteen').children;
      for (var i = 0; i + 1 < global.pics.length; ++i) {

            global.pics[i].onclick = function () {
                  if (!global.start){
                        return;
                  }
                  var clickPos = this.className.match(/[0-9]/g); // 被点击的图片坐标
                  var emptyPos = empty.className.match(/[0-9]/g); // 空白格的坐标

                  if (isValid(clickPos, emptyPos)) {
                        var temp = this.className;
                        this.className = empty.className;
                        global.empty.className = temp;
                        ++global.step.innerHTML;

                        if (isDone()){
                              success();
                        }
                  }
            };
      }

      if (global.start == true) {
            initPos(global.difficulty.selectedIndex + 1);
            global.time.textContent = '00:00';
            global.step.textContent = 0;
            global.timeId = setInterval(showTime, 1000);
      }


      document.getElementById('restart').onclick = function () {
            clearInterval(global.timeId);
            global.start = true;
            window.onload();
      }
}

function initPos(difficulty) {
      var arr = [];
      if (difficulty == 1){
            arr = [10, 11, 14];
      }
      else if (difficulty == 2){
            arr = [5, 6, 7, 9, 10, 11, 13, 14];
      }
      else{
            arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      }


      arr.sort(function () {
            return Math.random() - 0.5;
      });


      for (i = 0; i < difficulty * 3; i += 3) {
            var temp = global.pics[arr[i]].className;
            global.pics[arr[i]].className = global.pics[arr[i + 1]].className;
            global.pics[arr[i + 1]].className = global.pics[arr[i + 2]].className;
            global.pics[arr[i + 2]].className = temp;
      }
}



function createPuzzle() {

      var frag = document.createDocumentFragment();
      for (var i = 1; i <= 4; ++i) {
            for (var j = 1; j <= 4; ++j) {
                  if (i == 4 && j == 4) {
                        var empty = document.createElement("div");
                        empty.setAttribute('id', 'empty');
                        empty.setAttribute('class', 'row4 col4');
                        frag.appendChild(empty);
                        break;
                  }
                  var pic = document.createElement("div");
                  pic.setAttribute("id", "pic" + ((i - 1) * 4 + j));
                  pic.setAttribute("class", "row" + i + " col" + j);
                  frag.appendChild(pic);
            }
      }
      document.getElementById("fifteen").appendChild(frag);
}




function showTime() {
      var curTime = global.time.textContent.split(':'),
            min = parseInt(curTime[0]),
            sec = parseInt(curTime[1]);
      if (sec == 59) {
            ++min, sec = 0;
      }
      else {
            ++sec;
      }
      if (min < 10){
            min = '0' + min;
      }
      if (sec < 10){
            sec = '0' + sec;
      }
      global.time.innerHTML = min + ':' + sec
}


function isValid(a, b) {
      return (a[0] == b[0] && Math.abs(a[1] - b[1]) == 1)
            || (a[1] == b[1] && Math.abs(a[0] - b[0]) == 1);
}


function isDone() {
      var done = true, pos = [];
      for (var i = 0; i < global.pics.length; ++i) {
            pos = global.pics[i].className.match(/[0-9]/g);
            id = global.pics[i].id.match(/[0-9]+/);
            if (id && id[0] != (pos[0] - 1) * 4 + parseInt(pos[1])) {
                  done = false;
                  break;
            }
      }
      return done;
}


function success() {
      clearInterval(global.timeId);
      var curTime = global.time.textContent.split(':');
      var diff = global.difficulty.selectedIndex
      var str = '你已完成拼图，难度为' + global.difficulty[diff].textContent + ',用时';
      if (parseInt(curTime[0])){
            str += parseInt(curTime[0]) + '分';
      }
      if (parseInt(curTime[1])){
            str += parseInt(curTime[1]) + '秒';
      }
      str += ',走了' + global.step.textContent + '步\n';
      global.start = false;
      setTimeout(function () { alert(str) }, 500);
}
