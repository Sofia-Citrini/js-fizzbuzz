const boxesContainerEl = document.querySelector(".boxes_container");

for (let i=1; i <= 100; i++) {
    
    console.log(`${i}`);

    let color="";

    // multiplo di 3
    if (i % 3 === 0) {
        color = "bg-green";
    }
    
    // multiplo di 5
    if (i % 5 === 0) {
        color = "bg-yellow";
    }
    
    // multiplo sia di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0){
        color = "bg-red";
    }

    boxesContainerEl.innerHTML += `<div class="box ${color}">${i}</div>`
}