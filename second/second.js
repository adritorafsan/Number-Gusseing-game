const answer = Math.floor(Math.random()*10+1);
let guesses = 0;
const inputbx = document.querySelector('#inputbx');
const btn = document.querySelector('.btn');
const resultbx = document.querySelector('#resultbx');

btn.addEventListener('click',()=>{
    guesses+=1;
  let  userinput = inputbx.value;
  if(userinput == answer){
    resultbx.textContent = (`Succesful! The number is ${userinput} it Tooks you ${guesses} guesses`)
  }
  else if(userinput<answer){
    alert('Too short');
  }
  else{
    alert('Too large');
  }
})