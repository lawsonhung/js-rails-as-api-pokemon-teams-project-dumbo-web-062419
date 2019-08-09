const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function slapTrainersToTheDom(trainersArray){
    console.log("Slapping trainers to the DOM")
    trainersArray.forEach(slapOneTrainerToTheDOM)
}

function slapOneTrainerToTheDOM(trainer){
    console.log("Slapping one trainer")
    console.log(trainer.name)
    const main = document.querySelector("main")
    const div = document.createElement("div")
    const p = document.createElement("p")

    div.className = "card"
    // set data-id = trainer.id in HTML
    div.dataset.id = trainer.id
    // tag.section id: dom_id(trainer)

    p.innerText = trainer.name

    div.append(p)
    main.append(div)
}

document.addEventListener("DOMContentLoaded", function(){

    fetch(TRAINERS_URL)
        .then(function(response){
            console.log("hello")
            return response.json()
        }).then(function(data){
            slapTrainersToTheDom(data)
            console.log(data)
        })
})