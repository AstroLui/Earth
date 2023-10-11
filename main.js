const country = 
[
    {
        "pais" : "Venezuela",
        "icon" : "./assents/Icons Flag/venezuela.png",
        "bandera": "",
        "coordenada": {
            "x" : "-100px",
            "y" : "-60px"
        }
    },
    {
        "pais" : "Colombia",
        "icon" : "./assents/Icons Flag/colombia.png",
        "bandera": "",
        "coordenada": {
            "x" : "-80px",
            "y" : "-65px"
        }
    },
    {
        "pais" : "Francia",
        "icon" : "./assents/Icons Flag/france.png",
        "bandera": "",
        "coordenada": {
            "x" : "-280px",
            "y" : "48px"
        }
    },
    {
        "pais" : "China",
        "icon" : "./assents/Icons Flag/china.png",
        "bandera": "",
        "coordenada": {
            "x" : "-548px",
            "y" : "20px"
        }
    },
    {
        "pais" : "Estados Unidos",
        "icon" : "./assents/Icons Flag/united-states.png",
        "bandera": "",
        "coordenada": {
            "x" : "5px",
            "y" : "15px"
        }
    },
    {
        "pais" : "Alemania",
        "icon" : "./assents/Icons Flag/germany.png",
        "bandera": "",
        "coordenada": {
            "x" : "-305px",
            "y" : "54px"
        }
    },
    {
        "pais" : "Mexico",
        "icon" : "./assents/Icons Flag/flag (1).png",
        "bandera": "",
        "coordenada": {
            "x" : "0px",
            "y" : "-15px"
        }
    },
    {
        "pais" : "Surafrica",
        "icon" : "./assents/Icons Flag/south-africa.png",
        "bandera": "",
        "coordenada": {
            "x" : "-335px",
            "y" : "-150px"
        }
    },
    {
        "pais" : "Brazil",
        "icon" : "./assents/Icons Flag/brazil-.png",
        "bandera": "",
        "coordenada": {
            "x" : "-135px",
            "y" : "-95px"
        }
    },
    {
        "pais" : "India",
        "icon" : "./assents/Icons Flag/flag.png",
        "bandera": "",
        "coordenada": {
            "x" : "-485px",
            "y" : "-20px"
        }
    },
    {
        "pais" : "Marruecos",
        "icon" : "./assents/Icons Flag/morocco.png",
        "bandera": "",
        "coordenada": {
            "x" : "-265px",
            "y" : "5px"
        }
    }
];
const Country = document.querySelectorAll('.country-S.container')
const lines = document.querySelectorAll('.lines')

Country.forEach( element =>{
    element.addEventListener('click', ()=>{
        const Select = document.getElementById('Country-S').children
        var pos = parseInt(element.children[0].classList.item(2))
        Select[0].setAttribute('src', country[pos].icon)
        Select[1].innerHTML = country[pos].pais
        var posS = parseInt(Select[0].classList.item(1))
        Select[0].classList.remove(Select[0].classList.item(1))
        Select[0].classList.add(element.children[0].classList.item(2))
        element.children[0].setAttribute('src', country[posS].icon)
        element.children[1].innerHTML = country[posS].pais
        element.children[0].classList.remove(element.children[0].classList.item(2))
        element.children[0].classList.add(`${posS}`)

        document.getElementById('Nav-aside').classList.add('nav-active')
        document.getElementById('Nav-aside').style.height = '60px'
        lines.forEach(line => {
            line.classList.remove('activel')
        })
        document.getElementById('ping').classList.add('move')
        document.getElementById('Earth').style.backgroundPositionX = country[pos].coordenada.x
        document.getElementById('Earth').style.backgroundPositionY = country[pos].coordenada.y
        document.getElementById('ping').classList.remove('move')
        document.getElementById('country').innerHTML= country[pos].pais   
        setTimeout(inSide, 500)
    })
})
    
document.getElementById('line').addEventListener('click', () =>{
    if (document.getElementById('Nav-aside').classList.contains('nav-active')){
        document.getElementById('Nav-aside').classList.remove('nav-active')
        lines.forEach(line => {
            line.classList.add('activel')
        });
        document.getElementById('Nav-aside').style.height = '520px'
    }else{
        document.getElementById('Nav-aside').classList.add('nav-active')
        document.getElementById('Nav-aside').style.height = '60px'
        lines.forEach(line => {
            line.classList.remove('activel')
        });
    }  
})

function inSide(){
    if (document.getElementById('Content-Container').classList.contains('inSide')){
        document.getElementById('Content-Container').classList.remove('inSide')
    }else{
        document.getElementById('Content-Container').classList.add('inSide')
    }
}