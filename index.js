const answer = Math.floor(Math.random()*10+1);
let gussescount = 0;
const inputbx = document.querySelector('#inputbx');
const submitbtn = document.querySelector('.btn');
const result = document.querySelector('.result');
const Reload = document.querySelector('#Reload');


submitbtn.addEventListener("click",()=>{
    
    let gusse = inputbx.value;
    gussescount+=1;
    if(gusse == answer){
        
        result.textContent= (`Result = the number is ${gusse} and It tooks you ${gussescount} gusses`);
        
    }
    else if(gusse < answer){
        alert('too small');
    }
    else{
        alert('too large')
    }

})

Reload.onclick = ()=>{
    
}

