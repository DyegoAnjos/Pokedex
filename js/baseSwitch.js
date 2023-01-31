const attributeNameArray = document.querySelectorAll(".attributeName")
const levelIcon = document.querySelectorAll(".level")

const baseSwitch = (data) =>{
    for(let i=0; i<=data.stats.length-1;i++){
        attributeNameArray[i].innerText += data.stats[i].base_stat

        for(let j=0;j<Math.round(data.stats[i].base_stat/10) && j<10;j++){
            levelIcon[j+i*10].classList.add("full")
        }
    }
}