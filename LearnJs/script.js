document.getElementById("convert").addEventListener('submit', function(event){
    event.preventDefault();
    var distance = parseFloat(document.getElementById("distance").value);
    if(distance){
        var conversion = (distance * 1.609344).toFixed(3);
        var answer = document.getElementById('answer');
        answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers </h2>`;
    }
    else{
        //dispay error
    }
    
});