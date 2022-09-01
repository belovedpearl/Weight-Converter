let input = document.getElementById("input");
let inputOz = document.getElementById("result2");
let inputGr = document.getElementById("result3");
let result = document.getElementById('result')

function weight(value){
   inputOz.innerHTML= (value * 16).toFixed(3);
  inputGr.innerHTML= (value/0.0022046).toFixed(3);
result.innerHTML = (value/2.2046).toFixed(3);
}