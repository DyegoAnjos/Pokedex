const divTypes = document.querySelectorAll("#divAbout .types")
const heightPokemon = document.getElementById("height")
const weightPokemon = document.getElementById("weight")
const abilitiesPokemon = document.getElementById("abilities")
const typeCard=document.querySelectorAll("#divAbout .types .typeCard")
const typeName=document.querySelectorAll("#divAbout .types .typeCard .typeName")


const aboutSwitch = (data) =>{
    for(let i=0;i<=typeCard.length-1;i++)
    typeCard[i].style.visibility="hidden"
    
    for(let i=0;i<=data.types.length-1;i++){
        typeCard[i].style.visibility="visible"
        for(let j=0;j<=typesColors.length-1;j++){
            if(data.types[i].type.name === typesColors[j].name)
                typeCard[i].style.backgroundColor=typesColors[j].color
        }


        typeName[i].innerText = data.types[i].type.name.substr(0).toUpperCase()
        
        
    }

    heightPokemon.innerText = "Altura: "+data.height/10+"m"
    weightPokemon.innerText = "Peso: "+data.weight/10+".0kg"

    abilitiesPokemon.innerText = "Habilidades: "
    for(let i=0;i<=data.abilities.length-1;i++){
        abilitiesPokemon.innerText += " "+data.abilities[i].ability.name

        if(data.abilities[i].is_hidden == true)
            abilitiesPokemon.innerText += "(Hidden ability)"

        if(i != data.abilities.length-1)
            abilitiesPokemon.innerText +=","

        else
            abilitiesPokemon.innerText +="."
    
        
    }
}