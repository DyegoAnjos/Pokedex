const picskInfsMoves = async(move) =>{

    const resMove = await fetch(move)
    const dataMove = await resMove.json()
    return dataMove
}

var contMoves=0
var i=0




const movesSwitch = async(data) =>{
    if(contMoves > 0){
        const moveCard = document.querySelectorAll(".moveCard")
        for(let i=0;i<=contMoves-1;i++)
            moveCard[i].remove()
        contMoves=0
    }

    for(let i=0;i<=data.moves.length-1;i++){
        const dataMove= await picskInfsMoves(data.moves[i].move.url)

        const moveCard=document.createElement("div")
        moveCard.classList.add("moveCard")
        divMoves.appendChild(moveCard)
        const moveCardAppend = document.querySelectorAll(".moveCard")

        const divTitelMove = document.createElement("div")
        divTitelMove.classList.add("titelMove")
        moveCard.appendChild(divTitelMove)
        const divTitelMoveAppend= document.querySelectorAll(".titelMove")

        const nameMove= document.createElement("h3")
        nameMove.classList.add("nameMove")
        nameMove.innerText = dataMove.name
        divTitelMoveAppend[i].appendChild(nameMove)

        const divTypeMove = document.createElement("div")
        divTypeMove.classList.add("typeCard")
        divTitelMoveAppend[i].appendChild(divTypeMove)
        const divTypeMoveAppend = document.querySelectorAll(".titelMove .typeCard")
        for(let j=0;j<=typesColors.length-1;j++){
            if(dataMove.type.name === typesColors[j].name)
                divTypeMoveAppend[i].style.backgroundColor=typesColors[j].color 
        }
        
        
        const typeName = document.createElement("p")
        typeName.classList.add("typeName")
        typeName.innerText = dataMove.type.name.toUpperCase()
        divTypeMoveAppend[i].appendChild(typeName)

        const divInfosMove = document.createElement("div")
        divInfosMove.classList.add("infosMove")
        moveCardAppend[i].appendChild(divInfosMove)
        const divInfosMoveAppend = document.querySelectorAll(".infosMove")

        const classMove= document.createElement("p")
        classMove.classList.add("classMove")
        if(dataMove.damage_class.name == "physical")
            classMove.innerText += "Classe: Físico"
        
        else if (dataMove.damage_class.name == "special")
            classMove.innerText += "Classe: Especial"
        
        else
            classMove.innerText += "Classe: "+dataMove.damage_class.name
            
        divInfosMoveAppend[i].appendChild(classMove)

        const powerMove = document.createElement("p")
        powerMove.classList.add("powerMove")
        powerMove.innerText = "Poder: "+dataMove.power
        divInfosMoveAppend[i].appendChild(powerMove)

        const accuracyMove = document.createElement("p")
        accuracyMove.classList.add("accuracyMove")
        accuracyMove.innerText = "Precisão: "+dataMove.accuracy
        divInfosMoveAppend[i].appendChild(accuracyMove)

        const ppMove= document.createElement("p")
        ppMove.classList.add("ppMove")
        ppMove.innerText = "PP: "+dataMove.pp
        divInfosMoveAppend[i].appendChild(ppMove)

        const priorityMove = document.createElement("p")
        priorityMove.classList.add("priorityMove")
        priorityMove.innerText = "Prioridade: "+dataMove.priority
        divInfosMoveAppend[i].appendChild(priorityMove)   

        contMoves=contMoves+1
    }    
}