const answer = Math.floor(Math.random()*10+1);
let gussescount = 0;
const inputbx = document.querySelector('#inputbx');
const submitbtn = document.querySelector('.btn');
const result = document.querySelector('.result');


submitbtn.addEventListener("click",()=>{
    
    let gusse = inputbx.value;
    gussescount+=1;
    if(gusse == answer){
        result.textContent=answer;
        alert(`It tooks you ${gussescount}`)
    }

})

