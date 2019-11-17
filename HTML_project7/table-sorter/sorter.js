var global = {
   todo: [],
   staff: []
}

// function actBack(){
//    $(this).css({"background-color" : "darkblue"});
//    $(this).removeClass("todo_ascending");
//    $(this).removeClass("todo_descending");
// }

$(document).ready(function () {



   for(var i = 0;i < 3;i++){
      todo[i] = 0;
   }

   for(var i = 0;i < 3;i++){
      staff[i] = 0;
   }

   $("#todo tbody").children().first().next().addClass("second_line");

   $("#todo thead tr th").each(function () {
      // this.id = -1;
      // if($(this).text() === "What?"){
      //    this.id = 0;
      // }
      // else if($(this).text() === "When?"){
      //    this.id = 1;
      // }
      // else{
      //    this.id = 2;
      // }


      $(this).click(function () {
         // alert($("#todo tbody").children().first().next().text());
         $("#todo tbody").children().first().next().addClass("second_line");
         $("#todo tbody").children().first().next().siblings().removeClass("second_line");

         this.id = -1;
         if($(this).text() === "What?"){
            this.id = 0;
         }
         else if($(this).text() === "When?"){
            this.id = 1;
         }
         else{
            this.id = 2;
         }

         // $(this).nextAll().css({"background-color" : "darkblue"});
         // $(this).prevAll().css({"background-color" : "darkblue"});
         $(this).siblings().removeClass("todo_ascending");
         $(this).siblings().removeClass("todo_descending");
         $(this).siblings().css({"background-color" : "darkblue"});

         if(this.id == 0){
            todo[1] = 0;
            todo[2] = 0;
         }
         else if(this.id == 1){
            todo[0] = 0;
            todo[2] = 0;
         }
         else if(this.id == 2){
            todo[0] = 0;
            todo[1] = 0;
         }


         todo[this.id] += 1;
         if(todo[this.id] == 0){
            $(this).css({"background-color" : "darkblue"});
            // $(this).html("What?");
            $(this).removeClass("todo_ascending");
            $(this).removeClass("todo_descending");
         }
         else if(todo[this.id] != 0 && todo[this.id] % 2 == 1){
            // alert("up");
            $(this).css({"background-color" : "lightblue"});
            // $(this).html("What?<img src = 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8z0rkb318j300g00g090.jpg'>");
            $(this).addClass("todo_ascending")
            $(this).removeClass("todo_descending");
         }
         else if(todo[this.id] != 0 && todo[this.id] % 2 == 0){
            // alert("down");
            $(this).css({"background-color" : "lightblue"});
            // $(this).html("What?<img src = 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8z0zkz4pej300g00g09r.jpg'>");
            $(this).addClass("todo_descending");
            $(this).removeClass("todo_ascending");
         }


      })


   });


   $("#staff thead tr th").each(function () {
      // this.id = -1;
      // if($(this).text() === "What?"){
      //    this.id = 0;
      // }
      // else if($(this).text() === "When?"){
      //    this.id = 1;
      // }
      // else{
      //    this.id = 2;
      // }


      $(this).click(function () {
         // alert($("#todo tbody").children().first().next().text());
         $("#staff tbody").children().first().next().addClass("second_line");
         $("#staff tbody").children().first().next().siblings().removeClass("second_line");

         this.id = -1;
         if($(this).text() === "First name"){
            this.id = 0;
         }
         else if($(this).text() === "Last name"){
            this.id = 1;
         }
         else{
            this.id = 2;
         }

         // $(this).nextAll().css({"background-color" : "darkblue"});
         // $(this).prevAll().css({"background-color" : "darkblue"});
         $(this).siblings().removeClass("staff_ascending");
         $(this).siblings().removeClass("staff_descending");
         $(this).siblings().css({"background-color" : "darkblue"});

         if(this.id == 0){
            staff[1] = 0;
            staff[2] = 0;
         }
         else if(this.id == 1){
            staff[0] = 0;
            staff[2] = 0;
         }
         else if(this.id == 2){
            staff[0] = 0;
            staff[1] = 0;
         }


         staff[this.id] += 1;
         if(staff[this.id] == 0){
            $(this).css({"background-color" : "darkblue"});
            // $(this).html("What?");
            $(this).removeClass("staff_ascending");
            $(this).removeClass("staff_descending");
         }
         else if(staff[this.id] != 0 && staff[this.id] % 2 == 1){
            // alert("up");
            $(this).css({"background-color" : "lightblue"});
            // $(this).html("What?<img src = 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8z0rkb318j300g00g090.jpg'>");
            $(this).addClass("staff_ascending")
            $(this).removeClass("staff_descending");
         }
         else if(staff[this.id] != 0 && staff[this.id] % 2 == 0){
            // alert("down");
            $(this).css({"background-color" : "lightblue"});
            // $(this).html("What?<img src = 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8z0zkz4pej300g00g09r.jpg'>");
            $(this).addClass("staff_descending");
            $(this).removeClass("staff_ascending");
         }


      })


   });

   $("#todo").tablesorter();
   $("#staff").tablesorter();

   $("#todo thead").hover(function () {
      // alert($(this).text());
      $("#todo tbody").children().first().next().addClass("second_line");
      $("#todo tbody").children().first().next().siblings().removeClass("second_line");
   });

   $("#staff thead").hover(function () {
      // alert($(this).text());
      $("#staff tbody").children().first().next().addClass("second_line");
      $("#staff tbody").children().first().next().siblings().removeClass("second_line");
   });
})




