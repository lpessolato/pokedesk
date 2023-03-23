const img = document.querySelector(".gif")
const number = document.querySelector(".poke_number")
const name = document.querySelector(".poke_name")
const input = document.querySelector(".search")
const next = document.querySelector(".btn_next")
const prev = document.querySelector(".btn_prev")
let cont = 1
function api (){
    const request = fetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`)
    request.then(response=>response.json())
    .then((body)=>{
        console.log(body)
    })
}

api()
