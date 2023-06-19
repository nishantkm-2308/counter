const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

let value = document.getElementById('count');
 let count = 0;

increase.addEventListener('click',function(){
    value.innerHTML=count+=1;
    colors()
})

decrease.addEventListener('click',function(){
    value.innerHTML = count-=1;
    colors()
})

reset.addEventListener('click',function(){
    value.innerHTML = 0;
    count = 0;
    colors()
})

function colors(){
    if(value.innerHTML>0){
        value.style.color = 'green';
    }
    
    else if(value.innerHTML<0){
        value.style.color = 'red';
    }

    else{
        value.style.color = 'black';
    }
}