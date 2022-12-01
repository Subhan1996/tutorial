let counterEl = document.getElementById("counterValue");

function onIncriment(){
    let previousValue = parseInt(counterEl.textContent);
    let updateValue = previousValue +1
    if(updateValue >0){
        counterEl.style.color = "green"
    }
    else if(updateValue < 0){
        counterEl.style.color = "red"
    }else{
        counterEl.style.color = "black"
    }
   counterEl.textContent=updateValue;
}

function onDecriment(){
    let previousValue = parseInt(counterEl.textContent);
    let updateValue = previousValue - 1;
    if(updateValue >0){
        counterEl.style.color = "green"
    }
    else if(updateValue < 0){
        counterEl.style.color = "red"
    }else{
        counterEl.style.color = "black"
    }
   counterEl.textContent=updateValue;
}
function onReset(){
    
   counterEl.textContent=0;
   counterEl.style.color = "black";
}