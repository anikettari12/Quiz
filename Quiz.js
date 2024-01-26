 function t() {
    var minute = 5;
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = " "+minute + " "+" : " + " "+ sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 0) {
          minute = 5;
        }
      }
    }, 1000);
  }

  //const timerId = setTimeout(t,30000); 
  //function clear() {
  //  clearTimeout(timerId);
  //}

/*function opreation(totalright){
  let ans1 = document.getElementById('question-1-answers-B');
  let ans2 = document.getElementById('question-2-answers-D');
  let ans3 = document.getElementById('question-3-answers-C');
  let ans4 = document.getElementById('question-4-answers-B');
  let ans5 = document.getElementById('question-5-answers-B');
  let ans6 = document.getElementById('question-6-answers-C');
  let ans7 = document.getElementById('question-7-answers-A');
  let ans8 = document.getElementById('question-8-answers-D');
  let ans9 = document.getElementById('question-9-answers-C');
  let ans10 = document.getElementById('question-10-answers-A');

  out();
   
  let arr = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10];

  
  for (let i = 0; i <= arr.length; i++){
   totalright = 0;
      arr[i] = totalright++;        
 }  
 
}

//let a = document.getElementById('output').innerHTML = totalright +" "+ "/correct 10";
function out(){
  let a = document.getElementById('output').innerHTML = "totalright /correct 10";
  return a;
}
*/

function opreation(){
  var totalcorrect=0;
 for(var i = 1; i <= 10; i++){
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++){
    var radio = radios[j];
    if (radio.value =="correct" && radio.checked) {
       totalcorrect++;
    }
  }
 }
 //totalcorrect = document.getElementById('output').innerText = `${totalcorrect} + "Score" `;

  alert("Your score:"+ " " + totalcorrect );
//  window.location.href ="./submit.html";
//  var output = totalcorrect;
// output = document.getElementById('output').innerHTML = output + " Score" ;
//document.write(output); 

}
  
function o(){
var output = totalcorrect;
 output = document.getElementById('output').innerHTML = output + " Score" ;
document.write(output); 
  opreation();
}