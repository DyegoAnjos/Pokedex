const divTypes = document.querySelectorAll("#divAbout .types")
const heightPokemon = document.getElementById("height")
const weightPokemon = document.getElementById("weight")
const abilitiesPokemon = document.getElementById("abilities")

const aboutSwitch = (data) =>{
    for(let i=0;i<=data.types.length-1;i++){
        const typeCardCreat = document.createElement("div")
        typeCardCreat.setAttribute("class", "typeCard")
        
        
        divTypes[0].appendChild(typeCardCreat)


        const typeCard=document.querySelectorAll("#divAbout .types .typeCard")

        for(let j=0;j<=typesColors.length-1;j++){
            if(data.types[i].type.name === typesColors[j].name)
                typeCardCreat.style.backgroundColor=typesColors[j].color
        }

        const typeNameCreat =document.createElement("p")
        typeNameCreat.setAttribute("class", "typeName")

        typeNameCreat.innerText = data.types[i].type.name.substr(0).toUpperCase()
        

        typeCard[i].appendChild(typeNameCreat)
        
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