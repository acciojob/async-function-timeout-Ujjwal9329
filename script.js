//your JS code here. If required.
document.getElementById("btn").addEventListener("click",asyn function(){
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);
	const output = document.getElementById("output").value;
if(!text || isNaN(delay)|| delay<0){
   output.innerText = "Please enter a valid text and delay."
   return;
}
output.innerText = "Waiting...";

await delayMessage(delay);

output.innerText = text;


});
function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}