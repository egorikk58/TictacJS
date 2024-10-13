let step = "";
let counter = 0;
let ElementCell = document.querySelectorAll(".tictac-block-cell");
let Playa = document.getElementById("Player");


function Who(){
    if (step == "Circle"){
        step = "Cross";
        Playa.innerHTML = "Крестик";
    }else{
        step = "Circle";
        Playa.innerHTML = "Нолик";
    }
}

Who();


ElementCell.forEach((item) =>{
    item.addEventListener("click", ()=>{
        if (!item.classList.contains("Circle") && !item.classList.contains("Cross")){
            item.classList.add(step);
            if (step == "Circle"){
                item.innerText = "X";
            }
            if (step == "Cross"){
                item.innerText = "O";
            }
        }
        Who();
    })
    
})