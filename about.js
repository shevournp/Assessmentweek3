console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('submited succesfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.getElementById('img')
img.addEventListener('mouseover',(event)=>alert('way to go'))