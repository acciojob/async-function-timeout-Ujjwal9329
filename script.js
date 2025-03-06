
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function showMessageAfterDelay() {
//     const textInput = document.getElementById('text').value;
//     const delayInput = document.getElementById('delay').value;
//     const outputDiv = document.getElementById('output');

//     // Clear previous output
//     outputDiv.innerText = '';

//     // Check for valid input
//     if (!textInput || isNaN(delayInput) || delayInput <= 0) {
//         outputDiv.innerText = 'Please enter a valid message and delay time.';
//         return;
//     }

//     // Wait for a brief moment before showing the "Waiting..." message
//     await delay(100);
//     outputDiv.innerText = 'Waiting...';

//     // Wait for the specified delay
//     await delay(parseInt(delayInput) - 100);

//     // Show the message after the delay
//     outputDiv.innerText = textInput;
// }
// const btn = document.getElementById('btn');
// btn.addEventListener('click', showMessageAfterDelay);


      const output = document.getElementById('output');
      console.log(output);
      const text = document.getElementById('text').value;
    console.log(text);
      const delay = document.getElementById('delay').value;
    console.log(delay);

document.getElementById("btn").addEventListener("click",async()=>{
	let p = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},delay)
	})
	let res = await p;
	output.innerText = text
})



