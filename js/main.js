const boxesContainerEl = document.querySelector(".boxes_container");


for (let i=1; i <= 100; i++) {
    


    let color="";

    // multiplo di 3 o multiplo di 5 e  multiplo sia di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0){
        console.log ("FizzBuzz");
        color = "bg-red"; 
    } else if (i % 5 === 0) {
        console.log ("Buzz");
        color = "bg-yellow";
    } else if(i % 3 === 0) {
        console.log("Fizz");
        color = "bg-green";
    } else {
        console.log(i);
    }

    boxesContainerEl.innerHTML += `<div class="box ${color}">${i}</div>`;

    
}