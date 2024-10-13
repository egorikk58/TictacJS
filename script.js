let step = "";
let counter = 0;
let ElementCell = document.querySelectorAll(".tictac-block-cell");
let Playa = document.getElementById("Player");
let Winner = document.getElementById("winnerOfGame");

function Who(){
    if (step == "Circle"){
        step = "Cross";
        Playa.innerHTML = "Нолик";
    }else{
        step = "Circle";
        Playa.innerHTML = "Крестик";
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
        item.style.pointerEvents = 'none';

        counter++;
        if (counter >= 5 && counter != 9 && isVictory()){
            if (step == "Circle"){
                Winner.innerHTML = " Крестик";
            }else{
                Winner.innerHTML = " Нолик";
            }
            ElementCell.forEach(cell => cell.style.pointerEvents = 'none');

        }
        else if (counter == 9){
            Winner.innerText = "Ничья";
        }
        Who();
    })
    
})

function isVictory(){
    let win = [
        [0,1,2],
        [0,4,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    for (let combo of win){
        if ((ElementCell[combo[0]].classList.contains(step) &&
        ElementCell[combo[1]].classList.contains(step) &&
        ElementCell[combo[2]].classList.contains(step))){
            return true;
        }    
    }
    return false;
}