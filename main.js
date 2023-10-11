const ping = document.getElementById('ping')
const earth = document.getElementById('Earth')
const icon = document.getElementById('Icon-Select')
const line = document.getElementById('line')

var X = '-100px'
var Y = '-60px'

ping.addEventListener('mouseenter', () =>{
    document.getElementById('country').classList.add('active')
})

ping.addEventListener('mouseleave', () =>{
    document.getElementById('country').classList.remove('active')
})

ping.addEventListener('click', () =>{
    ping.classList.add('move')
    earth.style.backgroundPositionX = '2px'
    earth.style.backgroundPositionY = '10px'
    ping.classList.remove('move')

})

line.addEventListener('click', () =>{
    if (document.getElementById('Nav-aside').classList.contains('nav-active')){
        document.getElementById('Nav-aside').classList.remove('nav-active')
        document.getElementById('Nav-aside').style.height = '500px'
    }else{
        document.getElementById('Nav-aside').classList.add('nav-active')
        document.getElementById('Nav-aside').style.height = '60px'
    }
    
})