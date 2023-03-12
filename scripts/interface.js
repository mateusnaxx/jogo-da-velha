document.addEventListener('DOMContentLoaded', ()=>{
    
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){

    let square = event.target
    let posicion = square.id

    if(handleMove(posicion)){

        setTimeout(()=>{
            
              if(playertime == 1){
                alert(" O jogo acabou - o vencedor foi o X " )

            } else{
                alert(" O jogo acabou - o vencedor foi a bolinha " )
            }

        } , 50)  

    } 

    updateSquare(posicion)
}

function updateSquare(posicion){
    let square = document.getElementById(posicion.toString())
    let symbol = board[posicion]
    square.innerHTML = `<div class= '${symbol}'></div>`

}
