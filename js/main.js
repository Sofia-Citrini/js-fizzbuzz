const boxesContainerEl = document.querySelector(".boxes_container");


for (let i=1; i <= 100; i++) {
    let color="";

    if (i % 3 === 0 && i % 5 === 0){
        console.log ("FizzBuzz");
        color = "bg-red"; 
        boxesContainerEl.innerHTML += `<div class="box ${color}">FizzBuzz</div>`;
    } else if (i % 5 === 0) {
        console.log ("Buzz");
        color = "bg-yellow";
        boxesContainerEl.innerHTML += `<div class="box ${color}">Buzz</div>`;
    } else if(i % 3 === 0) {
        console.log("Fizz");
        color = "bg-green";
        boxesContainerEl.innerHTML += `<div class="box ${color}">Fizz</div>`;
    } else {
        console.log(i);
        boxesContainerEl.innerHTML += `<div class="box">${i}</div>`;
    }
}