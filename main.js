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
        "pais" : "Egipto",
        "icon" : "./assents/Icons Flag/egypt.png",
        "bandera": "./assents/Flags/Egipto.jpeg",
        "coordenada": {
            "x" : "-352px",
            "y" : "-6px"
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
        "pais" : "Nueva Guinea",
        "icon" : "./assents/Icons Flag/new.png",
        "bandera": "",
        "coordenada": {
            "x" : "-650px",
            "y" : "-95px"
        }
    },
    {
        "pais" : "Sudafrica",
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
        "pais" : "Turquia",
        "icon" : "./assents/Icons Flag/turkey.png",
        "bandera": "",
        "coordenada": {
            "x" : "-485px",
            "y" : "-20px"
        }
    },
    {
        "pais" : "Australia",
        "icon" : "./assents/Icons Flag/australia.png",
        "bandera": "",
        "coordenada": {
            "x" : "-630px",
            "y" : "-145px"
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
        document.getElementById('line').style.display = 'none'
        document.getElementById('loader-container').style.display = 'inline'
        document.getElementById('Content-Container').classList.add("inSide")
        document.getElementById('Content-Flag').style.opacity = '1'
        document.getElementById('Content-Flag').style.background= `url(${country[1].bandera})`
        document.getElementById('Content-Flag').style.backgroundSize= 'cover'
        setTimeout(()=>{
            document.getElementById('line').style.display = 'inline'
            document.getElementById('loader-container').style.display = 'none'
            document.getElementById('Content-Container').classList.remove("inSide")
            document.getElementById('Content-Flag').style.opacity = '0'
        }, 10000)
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