
let procent5btn = document.querySelector('.procent5');
let procent10btn = document.querySelector('.procent10');
let procent15btn = document.querySelector('.procent15');
let procent25btn = document.querySelector('.procent25');
let procent50btn = document.querySelector('.procent50');
let custombtn = document.querySelector('.custom');
let people = document.querySelector('.box_tip--people')
let textAmount = document.querySelector('.box_count--text-amount')
let textTotal = document.querySelector('.box_count--text-total')
let tipnumber = document.querySelector('.box_tip--tipnumber')
let resetbtn = document.querySelector('.box_count--reset')



function fiveProcent (){

let result =(Number(tipnumber.value)*0.05)/Number(people.value);
let persons =(Number(tipnumber.value)*1.05)/Number(people.value);

textAmount.innerHTML=result.toFixed(2);
textTotal.innerHTML=persons.toFixed(2);

}


function tenProcent (){

let result =(Number(tipnumber.value)*0.1)/Number(people.value);
let persons =(Number(tipnumber.value)*1.1)/Number(people.value);
textAmount.innerHTML=result.toFixed(2);
textTotal.innerHTML=persons.toFixed(2);
}



function fiveTeenProcent (){

let result =((Number(tipnumber.value)*0.15)/Number(people.value));
let persons =((Number(tipnumber.value)*1.15)/Number(people.value));
textAmount.innerHTML=result.toFixed(2);
textTotal.innerHTML=persons.toFixed(2);
}



function twentyFiveProcent (){

let result =(Number(tipnumber.value)*0.25)/Number(people.value);
let persons =(Number(tipnumber.value)*1.25)/Number(people.value);
textAmount.innerHTML=result.toFixed(2);
textTotal.innerHTML=persons.toFixed(2);
}



function fivetyProcent (){

let result =(Number(tipnumber.value)*0.5)/Number(people.value);
let persons = (Number(tipnumber.value)*1.5)/Number(people.value);
textAmount.innerHTML=result.toFixed(2);
textTotal.innerHTML=persons.toFixed(2);
}
function custom (){
    
  custombtn.setAttribute("type", "number");
 
 let result =(Number(tipnumber.value)*custombtn.value*0.01)/Number(people.value);
 let persons = (Number(tipnumber.value)*custombtn.value*1.01)/Number(people.value);
 textAmount.innerHTML=result.toFixed(2);
 textTotal.innerHTML=persons.toFixed(2);
}
function reset (){

    let result =0;
    let persons = 0;
    textAmount.innerHTML=result;
    textTotal.innerHTML=persons;
    tipnumber.value=0;
    people.value=0;
}



procent5btn.addEventListener('click',fiveProcent);
procent10btn.addEventListener('click',tenProcent);
procent15btn.addEventListener('click',fiveTeenProcent);
procent25btn.addEventListener('click',twentyFiveProcent);
procent50btn.addEventListener('click',fivetyProcent);
custombtn.addEventListener('click',custom);
resetbtn.addEventListener('click',reset);