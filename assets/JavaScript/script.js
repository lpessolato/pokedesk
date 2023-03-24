const img = document.querySelector(".gif")
const number = document.querySelector(".poke_number")
const namePoke = document.querySelector(".poke_name")
const input = document.querySelector(".search")
const next = document.querySelector(".btn_next")
const prev = document.querySelector(".btn_prev")
let cont = 1
function api (){
    const request = fetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`)
    request.then(response=>response.json())
    .then((body)=>{
        img.src = body.sprites.other.dream_world.front_default
        number.innerHTML = `${body.id}-`
        namePoke.innerHTML = body.name
        console.log(body)
    })
}
api()

next.addEventListener("click",()=>{
    cont++
    const request = fetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`)
    request.then(response=>response.json())
    .then((body)=>{
        img.src = body.sprites.other.dream_world.front_default
        number.innerHTML = `${body.id}-`
        namePoke.innerHTML = body.name
        console.log(body)
    })
})

prev.addEventListener("click",()=>{
    if(cont>=2){
        cont--
        const request = fetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`)
        request.then(response=>response.json())
        .then((body)=>{
            img.src = body.sprites.other.dream_world.front_default
            number.innerHTML = `${body.id}-`
            namePoke.innerHTML = body.name
            console.log(body)
        })
    }
    else{
        cont = 1
        const request = fetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`)
        request.then(response=>response.json())
        .then((body)=>{
            img.src = body.sprites.other.dream_world.front_default
            number.innerHTML = `${body.id}-`
            namePoke.innerHTML = body.name
            console.log(body)
        })
    }
})


