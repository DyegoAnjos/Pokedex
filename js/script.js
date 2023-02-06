const boxForm = document.getElementById("form")
const inputNamePokemon = document.getElementById("namePokemon")

const divAbout = document.getElementById("divAbout")
const divBase = document.getElementById("divBase")
const divMoves = document.getElementById("divMoves")

const imgPokemon = document.querySelector("#pokemonImg")

var contCreat=0
var contMoves=0

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
    return data
}

const changeInfsPokemon = async(pokemon) =>{
    const data =await pickInfsPokemon(pokemon)

    imgPokemon.setAttribute("src", data.sprites.other.home.front_default)
    
    aboutSwitch(data)
    baseSwitch(data)
    contMoves=movesSwitch(data,contMoves)
}

boxForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const namePokemon = inputNamePokemon.value.substr(0).toLowerCase()

    changeInfsPokemon(namePokemon)
    contCreat++
})

const typesColors = [
    {
        name: "poison",
        color: "#9454cc"
    },
    {
        name: "psychic",
        color: "#e96c8a"
    },
    {
        name: "steal",
        color: "#6cacc8"
    },
    {
        name: "rock",
        color: "#ada57e"
    },
    {
        name: "normal",
        color: "#828284"
    },
    {
        name: "fairy",
        color: "#e38ce3"
    },
    {
        name: "ice",
        color: "#47c9cb"
    },
    {
        name: "dark",
        color: "#4f4647"
    },
    {
        name: "ground",
        color: "#a6733c"
    },
    {
        name: "dragon",
        color: "#596ebd"
    },
    {
        name: "water",
        color: "#309ae4"
    },
    {
        name: "ghost",
        color: "#6f4769"
    },
    {
        name: "electric",
        color: "#e1bd2a"
    },
    {
        name: "flying",
        color: "#73abd2"
    },
    {
        name: "bug",
        color: "#a09f28"
    },
    {
        name: "fighting",
        color: "#e69020"
    },
    {
        name: "grass",
        color: "#449838"
    },
    {
        name: "fire",
        color: "#e7603e"
    },
]