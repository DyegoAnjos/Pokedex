const boxForm = document.getElementById("form")
const inputNamePokemon = document.getElementById("namePokemon")

const divAbout = document.getElementById("divAbout")
const divBase = document.getElementById("divBase")
const divMoves = document.getElementById("divMoves")

const imgPokemon =document.querySelector("#pokemon")

const divTypes = document.querySelectorAll("#divAbout .types")
const heightPokemon = document.getElementById("height")
const weightPokemon = document.getElementById("weight")
const abilitiesPokemon = document.getElementById("abilities")


const attributeNameArray = document.querySelectorAll(".attributeName")
const levelIcon = document.querySelectorAll(".level")


function switchDisplayDiv(id){
    divAbout.style.display = "none"
    divBase.style.display = "none"
    divMoves.style.display = "none"

    if(id == 1){
        divAbout.style.display = "flex"
        divAbout.setAttribute("class","animateIn")
    }
        
    else if (id == 2){
        divBase.style.display = "flex"
        divBase.setAttribute("class","animateIn")
    }
    
    else{
        divMoves.style.display = "flex"
        divMoves.setAttribute("class","animateIn")
    }
}

const pickInfsPokemon = async(pokemon) =>{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    const res = await fetch(apiUrl)
    const data =  await res.json()
    console.log(data)
    return data
}

const aboutSwitch = (data) =>{
    for(let i=0;i<=data.types.length-1;i++){
        const typeCardCreat = document.createElement("div")
        typeCardCreat.setAttribute("class", "typeCard")

        divTypes[0].appendChild(typeCardCreat)

        const typeCard=document.querySelectorAll("#divAbout .types .typeCard")
        
        const typeNameCreat =document.createElement("p")
        typeNameCreat.setAttribute("class", "typeName")

        typeNameCreat.innerText = data.types[i].type.name

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

const baseSwitch = (data) =>{
    for(let i=0; i<=data.stats.length-1;i++){
        attributeNameArray[i].innerText += data.stats[i].base_stat

        for(let j=0;j<Math.round(data.stats[i].base_stat/10) && j<10;j++){
            levelIcon[j+i*10].classList.add("full")
        }
    }
}

const changeInfsPokemon = async(pokemon) =>{
    const data =await pickInfsPokemon(pokemon)

    imgPokemon.setAttribute("src", data.sprites.other.home.front_default)

    aboutSwitch(data)
    baseSwitch(data)
}

boxForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const namePokemon = inputNamePokemon.value.substr(0).toLowerCase()

    changeInfsPokemon(namePokemon)
})