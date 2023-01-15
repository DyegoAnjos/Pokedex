const divAbout = document.getElementById("divAbout")
const heightPokemon = document.getElementById("height")
const weightPokemon = document.getElementById("weight")
const abilitiesPokemon = document.getElementById("abilities")


const divBase = document.getElementById("divBase")
const divMoves = document.getElementById("divMoves")

const boxForm = document.getElementById("form")
const inputNamePokemon = document.getElementById("namePokemon")



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

const changeInfsPokemon = async(pokemon) =>{
    const data =await pickInfsPokemon(pokemon)

    heightPokemon.innerText = "Altura: "+data.height/10+"m"
    weightPokemon.innerText = "Peso: "+data.weight/10+".0kg"
    abilitiesPokemon.innerText = "Habilidades: "
    for(let i=0;i<=data.abilities.length-1;i++){
        if(i )
        abilitiesPokemon.innerText += " "+data.abilities[i].ability.name+","
    }
        

}

boxForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const namePokemon = inputNamePokemon.value.substr(0).toLowerCase()

    changeInfsPokemon(namePokemon)


})