'use strict';
let pictArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let pictNow = 0;
let intervalTime = 3000;
printPict(pictNow);
let intervalIndex = setInterval(intervalFunction, intervalTime);
document.getElementById("arrowLeft").onclick = function(){
    if(pictNow<=0){
        pictNow = pictArr.length-1;
    }
    else{
        pictNow--;
    }
    clearInterval(intervalIndex);
    intervalIndex = setInterval(intervalFunction, intervalTime);
    printPict(pictNow);

};
document.getElementById("arrowRight").onclick = function(){
    pictNow ++;
    if(pictNow >= pictArr.length){
        pictNow = 0;
    }
    clearInterval(intervalIndex);
    intervalIndex = setInterval(intervalFunction, intervalTime);
    printPict(pictNow);
};
function printPict(numPict){
    let elementPict = document.getElementById("pict");
    elementPict.style.backgroundImage = 'url(./slyder_pict/'+pictArr[numPict] +')';
}
function intervalFunction(){
    pictNow ++;
    if(pictNow >= pictArr.length){
        pictNow = 0;
    }
    printPict(pictNow);
}