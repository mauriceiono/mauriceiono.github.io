const doStuff = () => {
    alert("Hello World");
}


const myButton = document.getElementById("btn-click");



// myButton.onclick = doStuff;

myButton.onclick = () => {

    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
    document.getElementById("message").innerHTML = ("goodbye everyone");
}

//add a second button called say goodbye
//when clicked chane the text to goodbye everyone and remove the special 
//if you finish that make a button that hides a clumn
// if you get that add a button that will animate the 'stuff' when clicked
// then you can have a button that will stop the animation

