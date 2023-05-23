(function(){

`use strict`;

var convertType = 'miles';
var heading = document.getElementById('h1');
var intro = document.querySelector('p');
var answerDiv = document.getElementById('answer');
var form = document.getElementById('convert');
document.addEventListener('keydown', function(event){

    var key = event.code;
if( key === `KeyK`){
    convertType = 'kilometers';
    heading.innerHTML = 'kilometers to miles converter';
    intro.innerHTML = 'Type in a number of kilometers and click the button to convert to miles';
    //change the heading
    //cahnge the intro paragraph
    //change the value of the converType variable
}
else if( key = `KeyM`){
     convertType = 'miles';
    heading.innerHTML = 'miles to kilometers converter';
    intro.innerHTML = 'Type in a number of miles and click the button to convert to kilometers'
}
 })

 form.addEventListener('submit', function(event){
     event.preventDefault();
     const distance = parseFloat(document.getElementById("distance").value);
     if(distance){
        
         if(convertType==='miles'){
             var converted = (distance * 1.689344).toFixed(3);
         answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers `;

         if(distance === 1){
            answerDiv.innerHTML = `${distance} mile converts to ${converted} kilometers `;        
         }

         else{
            answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers `;
         }
         }

         else{
         converted = (distance * 0.621371192).toFixed(3);
         answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles `;
         
         if(distance === 1){
            answerDiv.innerHTML = `${distance} kilometer converts to ${converted} mile`;        
         }

         else{
            answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles `;
         }
         }
     }
     else{
         //dispay error
         answerDiv.innerHTML = `<h1>Please provide a number!</h2>`;
         answerDiv.style.color = `red`
     }
    
 });
 })();
