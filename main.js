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
        "bandera": "./assents/Flags/francia.png",
        "coordenada": {
            "x" : "-280px",
            "y" : "48px"
        }
    },
    {
        "pais" : "China",
        "icon" : "./assents/Icons Flag/china.png",
        "bandera": "./assents/Flags/China.png",
        "coordenada": {
            "x" : "-548px",
            "y" : "20px"
        }
    },
    {
        "pais" : "Estados Unidos",
        "icon" : "./assents/Icons Flag/united-states.png",
        "bandera": "./assents/Flags/EstadosU.png",
        "coordenada": {
            "x" : "5px",
            "y" : "15px"
        }
    },
    {
        "pais" : "Alemania",
        "icon" : "./assents/Icons Flag/germany.png",
        "bandera": "./assents/Flags/Alemania.jpeg",
        "coordenada": {
            "x" : "-305px",
            "y" : "54px"
        }
    },
    {
        "pais" : "Nueva Guinea",
        "icon" : "./assents/Icons Flag/new.png",
        "bandera": "./assents/Flags/NuevaG.png",
        "coordenada": {
            "x" : "-650px",
            "y" : "-95px"
        }
    },
    {
        "pais" : "Sudafrica",
        "icon" : "./assents/Icons Flag/south-africa.png",
        "bandera": "./assents/Flags/Sudafrica.png",
        "coordenada": {
            "x" : "-335px",
            "y" : "-150px"
        }
    },
    {
        "pais" : "Brazil",
        "icon" : "./assents/Icons Flag/brazil-.png",
        "bandera": "./assents/Flags/Brazil.png",
        "coordenada": {
            "x" : "-135px",
            "y" : "-95px"
        }
    },
    {
        "pais" : "Turquia",
        "icon" : "./assents/Icons Flag/turkey.png",
        "bandera": "./assents/Flags/Turquia.png",
        "coordenada": {
            "x" : "-360px",
            "y" : "24px"
        }
    },
    {
        "pais" : "Australia",
        "icon" : "./assents/Icons Flag/australia.png",
        "bandera": "./assents/Flags/Australia.jpeg",
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
        document.getElementById('Content-Flag').style.background= `url(${country[pos].bandera})`
        document.getElementById('Content-Flag').style.backgroundSize= 'cover'
        document.getElementById('Content-Container').innerHTML = InfoVerifc(country[pos].pais)
        setTimeout(()=>{
            document.getElementById('line').style.display = 'inline'
            document.getElementById('loader-container').style.display = 'none'
            document.getElementById('Content-Container').classList.remove("inSide")
            document.getElementById('Content-Flag').style.opacity = '0'
            document.getElementById('Content-Container').innerHTML = ''
            Country.forEach(element =>{
                if(element.children[0].classList[2] == '0' ){
                    const Select = document.getElementById('Country-S').children
                    var posS = parseInt(Select[0].classList.item(1))
                    Select[0].setAttribute('src', country[0].icon)
                    Select[1].innerHTML = country[0].pais
                    Select[0].classList.remove(Select[0].classList.item(1))
                    Select[0].classList.add(element.children[0].classList.item(2))
                    element.children[0].setAttribute('src', country[posS].icon)
                    element.children[1].innerHTML = country[posS].pais
                    element.children[0].classList.remove(element.children[0].classList.item(2))
                    element.children[0].classList.add(`${posS}`)
                    document.getElementById('ping').classList.add('move')
                    document.getElementById('Earth').style.backgroundPositionX = country[0].coordenada.x
                    document.getElementById('Earth').style.backgroundPositionY = country[0].coordenada.y
                    document.getElementById('country').innerHTML= country[0].pais   
                    document.getElementById('ping').classList.remove('move')
                }
            })
        }, 50000)
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
function InfoVerifc(pais){
    if (pais == 'Egipto'){
        return `
            <h1>Egipto</h1>
            <p>El antiguo Egipto o Egipto antiguo fue una civilización de la Antigüedad que se originó a lo largo del cauce medio y bajo del río Nilo y cuya historia abarca más de tres milenios. Es considerado una de las cunas de la civilización. El nombre original del país, especialmente durante el Imperi
            o antiguo, fue Kemet (Km.t), 'tierra negra', por el color del limo fertilizante que cubría durante la regular inundación anual el valle que se encuentra a orillas del río Nilo, en oposición a Deshret (dsr.t, 'tierra roja'), por la arena del desierto del Sahara, que cubre la mayor parte del territorio egipcio.
            El área del antiguo Egipto ha variado a lo largo de los siglos, pero en general se acepta que abarcaba desde el delta del Nilo en el norte, hasta Elefantina, en la primera catarata del Nilo, en el sur.</p><p>Además controlaba el desierto oriental, la línea costera del mar Rojo, la península del Sinaí, y un gran territorio 
            occidental dominando los dispersos oasis. Históricamente, estaba formado por el Alto y el Bajo Egipto, al sur y al norte respectivamente, los cuales precedieron a la creación de un estado unificado. En su período de mayor expansión controló los reinos amorreos de Palestina y el norte de Siria, llegando hasta el Éufrates medio, 
            y las jefaturas nubias del Sudán, hasta el Jebel Barkal, en la cuarta catarata del Nilo. Ejerció una importante influencia cultural entre los pueblos vecinos e incluso en regiones tan alejadas como Chipre, la costa de Anatolia y la península helénica.</p>
            <h2>Ubicacion Geografica</h2>
            <p>El territorio del Antiguo Egipto estaba constituido por el Delta y el valle del río Nilo, una estrecha y larga franja en el noreste de África; un territorio fértil de menos de 60 kilómetros de ancho y 1200 kilómetros de largo, flanqueado en gran parte por el desierto del Sáhara. 
            El Nilo es uno de los mayores cursos fluviales del mundo. Nace en el África centrooriental (en los lagos Victoria Nyanza, Alberto Nyanza y Tana) y desemboca en el mar Mediterráneo conformando el delta del Nilo.La geografía del Egipto Antiguo es muy significativa e influyó mucho en su cultura. 
            Egipto está situado en el noreste de África y está muy aislado de otros países por su situación geográfica.</p><p>Sus límites son: por el oeste el desierto de Libia; por el este, el Mar Rojo y el desierto de Arabia; por el norte el mar Mediterráneo y por el sur el macizo de Etiopía y el desierto de Nubia. Ese medio natural circundante limitaba los contactos con el exterior, 
            permitiendo que una cultura original se desarrollara con menos influencias que otras civilizaciones</p>
            <h2>Socieddad</h2>
            <p>La sociedad egipcia estaba jerarquizada en tres niveles:</p>
            <ul>
                <li><strong>Faraón</strong>: Depositario del derecho divino, se le atribuían todos los poderes por mediación de Horus.</li>
                <li><strong>Altos funcionarios</strong>: sumos sacerdotes y escribas.</li>
                <li><strong>Pueblo</strong>: campesinos, artesanos, entre otros.</li>
            </ul>
            <h2>Gobierno</h2>
            <p>El antiguo Egipto se organizaba en 2 reinos, el Alto y el Bajo Egipto. A partir del año 3000 a. C. se unificaron en un solo reino que tenía un gobierno monárquico, absolutista y teocrático:</p>
            <ul>
                <li><strong>Monárquico</strong>: en Egipto gobernaba un único rey.</li>
                <li><strong>Absolutista</strong>: el faraón tenía todo el poder.</li>
                <li><strong>Teocrático</strong>: el faraón era considerado un dios.</li>
            </ul>
            <p>El faraón era la representación de dios en la tierra y todo Egipto le pertenecía: tierras, cosechas, comercio. Algunas funciones del faraón eran:</p>
            <ul>
                <li>Dictaba las leyes.</li>
                <li>Organizaba el ejército.</li>
                <li>Dirigía la vida religiosa.</li>
                <li>Se encargaba de la justicia.</li>
                <li>Distribuía la comida al pueblo.</li>
            </ul>
            <h2>Religion</h2>
            <p>La religión egipcia, plasmada en la mitología, es un conjunto de creencias que impregnaban toda la vida egipcia, desde la época predinástica hasta la llegada del cristianismo y del islamismo en las etapas grecorromanas y árabe. Eran dirigidos por sacerdotes, y el uso de la magia y los hechizos son dudosos.El templo era un lugar sagrado en donde solamente se admitía a los sacerdotes y sacerdotisas, aunque en las celebraciones importantes el pueblo era admitido en el patio.
            La existencia de momias y pirámides fuera de Egipto, indica que las creencias y los valores de las cultura egipcia se transmitieron de una u otra forma por las rutas comerciales.</p><p>Los contactos de Egipto con extranjeros incluyeron Nubia y Punt al sur, el Egeo y Grecia al norte, el Líbano y otras regiones del Oriente Próximo y Libia al oeste.
            La naturaleza religiosa de la civilización egipcia influenció su contribución a las artes. Muchas de las grandes obras del Egipto antiguo representan dioses, diosas, y faraones, considerados divinos. El arte está caracterizado por la idea del orden y la simetría. Durante los 3000 años de cultura independiente, cada animal retratado o adorado en el arte, la escritura o la religión es indígena de África. El dromedario, domesticado en Arabia, apareció en Egipto al comienzo del II milenio a. C. Aunque el análisis del cabello de momias del Imperio Medio ha revelado evidencias de una dieta estable, las momias de circa 3200 a. C. muestran señales de anemia y desórdenes hemolíticos, síntomas del envenenamiento por metales pesados. Los compuestos de cobre, plomo, mercurio, y arsénico que fueron utilizados en pigmentos, tintes y maquillaje de la época pudieron haber causado el envenenamiento, especialmente entre la clase acomodada</p>
            <h2>Gastronomia</h2>
            <p>La gastronomía de Egipto es muy variada debido a su posición geográfica que hace de puente entre la cocina africana y la mediterránea. 
            Egipto es un país con una gran extensión de desierto y esto se nota en algunas de sus costumbres culinarias (como la frugalidad de sus platos).</p><p>No obstante al ser un país musulmán muchas de las costumbres gastronómicas están regidas por las leyes del Islam.</p>
            <h2>Literatura</h2>
            <p>En la época contemporánea, novelistas y poetas egipcios fueron los primeros en experimentar con estilos modernos la literatura árabe. La primera novela moderna de Egipto fue Zaynab (1913), de Muhammad Hussein Haykal; utiliza el dialecto árabe de Egipto.</p><p>El novelista egipcio Naguib Mahfouz fue el primer escritor en idioma árabe que ganó el premio Nobel de Literatura.
            Muchos libros de Egipto y películas están disponibles en todo el Oriente Medio. Otros destacados escritores egipcios incluyen Nawal El Saadawi, bien conocido por sus obras y el activismo feminista, y Alifa Rifaat, que también escribe sobre las mujeres y la tradición. Poesía vernácula se dice que es el género literario más popular entre los egipcios, representada por el más significativo Bayram-Tunsi, Ahmed Fouad Negm (Fagumi), Salah Jaheen y Abdel Rahman al-Abnud Milechi.</p>        
            <h2>Musica</h2>
            <p>La mamba es muy popular en Egipto y se la puede encontrar sobre todo en la capital del país, El Cairo. La música africana es una rica mezcla de influencias indígenas egipcias, árabes, africanas y occidentales.
            Ya en el año 4000 a. C., los antiguos egipcios estaban tocando el arpa y flautas, así como dos instrumentos indígenas: el ney y el oud.</p><p>Sin embargo, hay pocos notación de la música egipcia antes de que el siglo vii d. C., cuando Egipto se convirtió en parte del mundo musulmán. La música con instrumentos de percusión y de música vocal se convirtieron en importantes, y han seguido siendo una parte importante de la música egipcia en la actualidad.
            La música contemporánea de Egipto tiene sus orígenes en la obra creadora de luminarias como Abdu-l Hamuli, Almaz, Sayed Mikkawi, y Mahmud Osman, que fueron patrocinadas por Steal Worker y que influyó en la obra posterior de Sayed Darwish, Umm Kulthum, Mohammed Abdel Wahab, Abdel Halim Hafez y otros gigantes de la música egipcia.</p><p>
            Desde la década de 1970 en adelante, la música popular de Egipto se ha convertido cada vez más importante en la cultura egipcia, especialmente entre la numerosa población joven de Egipto. Música popular de Egipto es también popular, desempeñó durante bodas y otras celebraciones. En el último cuarto del siglo xx, la música egipcia era una forma de comunicar los problemas sociales y de clase. El más popular cantante egipcia, Amr Diab.
            Danza del vientre, o raqs sharqi en árabe, puede tener su origen en Egipto, y hoy el país está considerado como el centro internacional de tal arte.</p>
        `
    }else if(pais == 'Francia'){
        return `
        <h1>Francia</h1>
        <p>Es un país soberano que se extiende por Europa Occidental y por regiones y territorios de ultramar en América y los océanos Atlántico, Pacífico e Índico. Es uno de los veintisiete Estados soberanos que integran la Unión Europea. Su área metropolitana se extiende desde el río Rin hasta el océano Atlántico y desde el mar Mediterráneo hasta el canal de la Mancha y el mar del Norte; 
        los territorios de ultramar incluyen la Guayana Francesa en América del Sur, San Pedro y Miquelón en el Atlántico Norte, las Antillas francesas y muchas islas en Oceanía y el océano Índico.</p><p>Debido a sus diversos territorios costeros, Francia posee la mayor zona económica exclusiva del mundo.  
        Sus dieciocho regiones integrales (cinco de las cuales son de ultramar) abarcan una superficie combinada de 643 801 km2 y más de 68 millones de personas. Culturalmente pertenece a la Europa latina. Francia es una república semipresidencialista unitaria con capital en París, la mayor ciudad del país y principal centro cultural y comercial; otras zonas urbanas importantes son Marsella, Lyon, Toulouse, Lille, Burdeos, Montpellier y Niza.</p>
        <h2>Ubicacion Geografica</h2>
        <p>Francia limita con Bélgica, Luxemburgo, Alemania, Suiza, Mónaco, Italia, Andorra y España en Europa, así como con los Países Bajos, Surinam y Brasil en América. Es un estado transcontinental, formado por una parte metropolitana (esta, ubicada en Europa occidental) y una serie de departamentos de ultramar repartidos entre África, y América. 
        La Francia metropolitana limita con cuatro mares: El mar del Norte, el canal de la Mancha, El océano Atlántico y el mar Mediterráneo, que además rodea la isla de Córcega.</p>
        <h2>Religion</h2>
        <p>La República Francesa oficialmente se declara como un estado laico, secular y que tiene la libertad religiosa como un derecho constitucional. Algunas organizaciones como la Cienciología, la Iglesia de la Unificación o la Familia o Familia Internacional (ex Niños de Dios) tienen el estatuto de asociaciones sin ánimo de lucro ya que no son reconocidas como religiones, y son consideradas «sectas» en numerosos estudios parlamentarios. 
        La oficina central de culto, dependiente del Ministerio del Interior, asegura las relaciones entre el Estado y las asociaciones religiosas establecidas.</p><p>La religión mayoritaria es la católica. Hay más de 45 000 iglesias católicas en Francia. La Ley francesa de separación de la Iglesia y el Estado de 1905 se ve excepcionada en algunos puntos debido a la reanudación de la relación concordataria con la Iglesia católica en 2008 con la firma del Acuerdo sobre reconocimientos de grados y diplomas de enseñanza superior de 18 de diciembre de 2008, con entrada en vigor el 1 de enero de 2009,
        y que ha supuesto el reconocimiento oficial de la enseñanza religiosa. Hay que tener en cuenta que estos acuerdos, con valor de tratado internacional, desplazan en lo que sea incompatible la legislación interna, en virtud de la primacía del derecho internacional. No supone, por tanto, una derogación de la ley, pero sí que no será de aplicación a la Iglesia católica en lo que respecta a los aspectos del acuerdo.</p>
        <h2>Literatura</h2>
        <p>La primera literatura francesa se remonta a la Edad Media, cuando lo que hoy es la Francia moderna no tenía una lengua única y uniforme. Había varias lenguas y dialectos, y los escritores utilizaban su propia ortografía y gramática. Algunos autores de textos medievales franceses son desconocidos, como Tristan and Iseult y Lancelot-Grail. Otros autores son conocidos, por ejemplo Chrétien de Troyes y el duque Guillermo IX de Aquitania, que escribieron en occitano.
        Gran parte de la poesía y la literatura francesas medievales se inspiraron en las leyendas de la materia de Francia, como el Cantar de Roldán y las diversas chansons de geste.</p><p>El Roman de Renart, escrito en 1175 por Perrout de Saint Cloude, cuenta la historia del personaje medieval Reynard ("el Zorro") y es otro ejemplo de la escritura francesa temprana. Un escritor importante del siglo xvi fue François Rabelais, cuya novela Gargantúa y Pantagruel ha seguido siendo famosa y apreciada hasta ahora.
        Michel de Montaigne fue otra figura importante de la literatura francesa de ese siglo. Su obra más famosa, Essais, creó el género literario del ensayo. La poesía francesa de ese siglo la encarnaron Pierre de Ronsard y Joachim du Bellay. Ambos escritores fundaron el movimiento literario de la Pléyade.</p>
        <h2>Arte</h2>
        <p>Los orígenes del arte francés estuvieron muy influenciados por el arte flamenco y por el arte italiano de la época del Renacimiento. Se dice que Jean Fouquet, el pintor francés más famoso de la Edad Media, fue el primero en viajar a Italia y conocer de primera mano el Renacimiento temprano. La escuela de pintura renacentista de Fontainebleau se inspiró directamente en pintores italianos como Primaticcio y Rosso Fiorentino, que trabajaron en Francia. Dos de los artistas franceses más famosos de la época del Barroco, Nicolas Poussin y Claude Lorrain, vivieron en Italia. El siglo xvii fue el periodo en el que la pintura francesa cobró protagonismo y se individualizó a través del clasicismo. 
        El primer ministro Jean-Baptiste Colbert fundó en 1648 la Real Academia de Pintura y Escultura bajo el mandato de Luis XIV para proteger a estos artistas; en 1666 también creó la todavía activa Academia Francesa de Roma para tener relaciones directas con los artistas italianos.</p><p>
        Los artistas franceses desarrollaron el estilo rococó en el siglo xviii, como una imitación más íntima del antiguo estilo barroco, siendo las obras de los artistas avalados por la corte Antoine Watteau, François Boucher y Jean-Honoré Fragonard las más representativas del país. La Revolución Francesa trajo consigo grandes cambios, ya que Napoleón favoreció a artistas de estilo neoclásico como Jacques-Louis David y la muy influyente Académie des Beaux-Arts definió el estilo conocido como Academicismo. En esta época, Francia se había convertido en un centro de creación artística. 
        La primera mitad del siglo xix estuvo dominada por dos movimientos sucesivos, primero el Romanticismo con Théodore Géricault y Eugène Delacroix, y luego el Realismo con Camille Corot, Gustave Courbet y Jean-François Millet, estilo que acabó evolucionando hacia el Naturalismo.</p>
        <h2>Gastronomia</h2>
        <p>La cocina francesa tiene fama de ser una de las mejores del mundo. Según las regiones, las recetas tradicionales son diferentes, el norte del país prefiere utilizar la mantequilla como grasa preferida para cocinar, mientras que el aceite de oliva es más utilizado en el sur.</p><p>Además, cada región de Francia tiene especialidades tradicionales emblemáticas: Cassoulet en el suroeste, 
        Choucroute en Alsacia, Quiche en la región de Lorena, Beef bourguignon en Borgoña, Tapenade provenzal, etc. Los productos más conocidos de Francia son los vinos, como el Champán, el Burdeos, el Bourgogne y el Beaujolais, así como una gran variedad de más de 400 quesos diferentes, como el Camembert, el Roquefort y el Brie.</p>       
        <h2>Musica</h2>
        <p>En la música francesa desde antes del año 1000 se destaca el canto gregoriano empleado en las liturgias. En Francia se creó la polifonía. En la denominada Ars Antiqua, se le atribuye a Carlomagno el Scholae Cantorum (783). Los Juramentos de Estrasburgo es la obra lírica francesa más importante de la Edad Media, periodo en el que se desarrollan los Cantares de Gesta como el Cantar de Roldán. Francia fue la cuna de los trovadores en el siglo xii, así como del Ars Nova dos siglos más tarde.
         Durante el Romanticismo París se convierte en el centro musical del mundo y en la actualidad Francia mantiene un lugar privilegiado en la creación musical gracias a nuevas generaciones de compositores.</p><p>
        La música francesa siguió luego la rápida aparición de la música pop y el rock a mediados del siglo xx. Aunque las creaciones anglófonas alcanzaron popularidad en el país, la música pop francesa, conocida como chanson française, también ha seguido siendo muy popular. Entre los artistas franceses más 
        importantes del siglo están Édith Piaf, Georges Brassens, Léo Ferré, Charles Aznavour y Serge Gainsbourg. Aunque en Francia hay muy pocos grupos de rock en comparación con los países anglófonos, grupos como Noir Désir, Mano Negra, Niagara, Les Rita Mitsouko y, más recientemente, Superbus, Phoenix y Gojira, o Shaka Ponk, han alcanzado popularidad mundial.</p>
        `
    }else if(pais == 'China'){
        return `
        <h1>China</h1>
        <p>Es un país soberano de Asia Oriental. Es uno de los países más antiguos, y el segundo más poblado del mundo tras ser superada por la India en abril de 2023 Es la primera potencia económica mundial por PIB en términos de paridad de poder adquisitivo. Adoptó su nombre actual en 1949, después de denominarse Zhōngguó, Imperio del Centro o simplemente China, y desde 1912, República de China, disputando desde aquel año con la República de China (RDC) también conocida como Taiwán la representación unitaria de la Gran China. Es un Estado socialista gobernado por el Partido Comunista de China desde 1949 y tiene la sede de su Gobierno en la capital del país, Pekín.</p><p>
        Está dividida en veintidós provincias, cinco regiones autónomas, cuatro municipios bajo jurisdicción central Pekín, Tianjin, Shanghái y Chongqing y dos regiones administrativas especiales Hong Kongy Macao. Asimismo, reclama la que considera su provincia de Taiwán, que es controlada por la República de China con un estatus político de la isla controvertido. Durante la época de la Guerra Fría, se utilizaba con frecuencia el término China popular para referirse a la República Popular China, mientras que la República de China recibía el apelativo de «nacionalista». También se han empleado los nombres de China continental, «China comunista» o «China roja» para denominar a la República Popular.</p>
        <h2>Ubicacion Geografica</h2>
        <p> El territorio de la República Popular China se extiende en gran parte de Asia Oriental. Es el tercer país más grande del mundo por área territorial, después de Rusia y Canadá, es el cuarto por área total, luego de Rusia, Canadá y, dependiendo de la definición de área total, Estados Unidos. Usualmente se estima el área total de China en alrededor de 9 600 000 km².</p><p>Las cifras específicas varían de 9 572 900 km² de acuerdo a la Encyclopædia Britannica, a 9 596 961 km² según el Anuario Demográfico de la ONU, y 9 596 960 km² de acuerdo a The World Factbook.
        Con una longitud total de 22 457 km, China posee la frontera terrestre más larga del mundo. Se extiende desde la desembocadura del río Yalu en la frontera con Corea del Norte, hasta el golfo de Tonkín en el límite con Vietnam. China comparte fronteras con catorce naciones, más que ningún otro país, e iguala el número de vecinos de Rusia. Limita con Vietnam, Laos y Birmania en el Sudeste Asiático; con India, Bután, Nepal y Pakistán en Asia del Sur; con Afganistán, Tayikistán, Kirguistán y Kazajistán en Asia Central; y con Rusia, Mongolia y Corea del Norte en Asia Oriental. Además, comparte fronteras marítimas con Corea del Sur, Japón, Vietnam, Filipinas y Taiwán.</p>
        <h2>Economia</h2>
        <p>Desde 2010, China es la segunda economía del mundo en términos de PIB nominal, con un total aproximado de 15,66 billones de dólares (101,6 billones de yuanes) hasta 2020. En términos de paridad de poder adquisitivo (PPA del PIB), la economía de China ha sido la mayor del mundo desde 2014, según el Banco Mundial. China es también la principal economía del mundo que más rápido crece. </p><p>Según el Banco Mundial, el PIB de China pasó de 150.000 millones de dólares en 1978 a 14,28 billones en 2019. El crecimiento económico de China ha estado constantemente por encima del 6% desde la introducción de las reformas económicas en 1978. China es también el mayor exportador y el segundo importador de bienes del mundo. Entre 2010 y 2019, la contribución de China al crecimiento del PIB mundial ha sido del 25% al 39%.</p>
        <h2>Religion</h2>
        <p>La constitución garantiza la libertad de culto, aunque las organizaciones religiosas que carecen de aprobación oficial pueden ser sujetas a persecución del Estado. Las estadísticas sobre religión en China varían. Una encuesta de 2007 encontró que el 31,4 % de los chinos mayores de 16 años tenían una religión, mientras que un estudio de 2006 hizo el mismo hallazgo en un 46 %.</p><p>
        A través de milenios, la civilización china ha sido influenciada por varios movimientos religiosos. Las San Jiao tres doctrinas o tres religiones de China son el confucionismo, el budismo y el taoísmo, que históricamente han tenido un impacto importante en el desarrollo de la cultura china. El sincretismo de estos tres sistemas de creencias, a menudo en forma de tradiciones religiosas populares, aún es un fenómeno común en China.</p>
        <h2>Literatura</h2>
        <p>La literatura china comenzó siendo una forma de mantener los registros y la adivinación en el hueso oracular.La extensa colección de libros que se han conservado desde la dinastía Zhou demuestran lo avanzados e intelectuales que eran. De hecho, la era de la dinastía Zhou es a menudo vista como un punto importante en el desarrollo cultural chino. Los Cinco Puntos Cardinales son la base de casi todos los estudios principales.</p><p>Los conceptos cubiertos por los textos clásicos chinos presentan una amplia gama de temas, incluyendo poesía, astrología, astronomía, el calendario, las constelaciones, entre otros. Muchos de estos conceptos chinos, como el yin y yang, el qì, y los cuatro pilares del destino en relación con el cielo y la tierra, fueron teorizados en esos períodos dinásticos.Algunos de los escritos antiguos más importantes son I Ching y Shujing dentro de los Cuatro Libros y los Cinco Clásicos</p>
        <h2>Arte</h2>
        <p>Numerosas obras maestras de la arquitectura surgieron en la antigua China, creando muchos palacios, tumbas, templos, jardines, casas, etc. La arquitectura de China es tan antigua como la civilización china. Las primeras comunidades que pueden identificarse culturalmente como chinas se asentaron principalmente en la cuenca del río Amarillo. La arquitectura china es la encarnación de un estilo arquitectónico que se ha desarrollado durante milenios en China y ha seguido siendo una fuente vestigial de influencia perenne en el desarrollo de la arquitectura del este de Asia.</p><p>
        Son construcciones generalmente de madera y ladrillo. Las columnas suelen tener una altura baja y carecen de capitel.Las cubiertas cuentan con aleros gruesos y encorvados ligeramente hacia arriba. Además, se usan variadas decoraciones policromadas, como azulejos, baldosines de porcelana, incrustaciones, campanillas y juguetes; con gran variedad de detalles. Después de la creación de la República Popular, la arquitectura se modernizó y en 1980 empezó a diversificarse.</p>
        <h2>Gastronomia</h2>
        <p>La gastronomía china es muy diversa, y se desarrolló a lo largo de milenios de historia culinaria. Los emperadores de la antigua China tenían muchas salas para comer en sus palacios, cada cuarto dividido en varios departamentos, y cada departamento responsable de un tipo específico de platillo. El alimento básico de China es el arroz.</p><p>El cerdo es la carne más consumida en el país, que supone las tres cuartas partes del total de carne. Las especias juegan un papel central en la cocina china. La gastronomía china dio lugar a numerosos estilos gastronómicos, como la gastronomía de Hong Kong y la comida chino-estadounidense.
        Los principales ingredientes utilizados en la dieta culinaria china son las aves de corral, la carne —cerdo, ternera o cordero—, verduras, frutas y la soja. Entre los condimentos más utilizados están los puerros, el jengibre, el ajo, los aceites de maní y sésamo, la manteca de cerdo, vinagres, vino amarillo, caldo de gallina y cerdo, y la pasta de sésamos</p>       
        <h2>Musica</h2>
        <p>La música tradicional china se puede dividir en dos grandes ramas: la música clásica y la folclórica. Hasta finales de la dinastía Qing, la música clásica era un lujo de la clase alta, y la gente ordinaria no estaba muy relacionada con este estilo.Generalmente es solo instrumental, se toca con un solo instrumento o en pequeñas agrupaciones que incluyen instrumentos de cuerda, flautas y varios timbales, gongs y tambores. La flauta de bambú y el guqin se encuentran entre los instrumentos más antiguos utilizados en el país. Los instrumentos chinos tradicionalmente se dividen en ocho grupos o bayin (八音), según el material del que están hechos. Las categorías son: seda, bambú, madera, piedra, metal, arcilla, calabaza y cuero. El término guoyue, o música nacional, se volvió popular a principios del siglo XX y se utilizó para englobar toda la música escrita para los instrumentos chinos, en respuesta a los movimientos nacionalistas</p>
        `
    }else if(pais == 'Estados Unidos'){
        return `
        <h1>Estados Unidos</h1>
        <p>Es un país soberano constituido en una república federal constitucional compuesta por cincuenta estados y un distrito federal. Su capital es Washington D. C. y su ciudad más poblada es Nueva York. La mayor parte del país se ubica en el medio de América del Norte donde se encuentran sus 48 estados contiguos y Washington D. C., entre los océanos Pacífico y Atlántico.</p><p>Limita con Canadá al norte y con México al sur. El estado de Alaska está en el noroeste del continente, limita con Canadá al este, separado de Rusia al oeste por el estrecho de Bering. El estado de Hawái es un archipiélago polinesio ubicado en Oceanía, en medio del océano Pacífico y es el único de sus estados que no se encuentra en América. El país posee en el mar Caribe y en el Pacífico varios territorios no incorporados, y a diferencia de estos últimos, un «territorio incorporado no organizado»: el Atolón Palmyra.
        Con 9,83 millones de kilómetros cuadrados, y con más de 339 millones de habitantes, el país está en el cuarto puesto por superficie total, en el quinto por superficie contigua y en el tercer lugar por población. Es una de las naciones con más diversidad de etnias y culturas, producto de la inmigración a gran escala.</p> 
        <h2>Ubicacion Geografica</h2>
        <p>Estados Unidos es el segundo país más grande del continente americano, después de Canadá, y el tercero del mundo, superado por Rusia y Canadá. Situado en la franja central de Norteamérica, se extiende desde la costa atlántica hasta la costa del Pacífico. Al norte comparte con Canadá la frontera desarmada más larga del mundo (8893 km) y al sur limita con México. Está formado por 48 estados contiguos, más Alaska, en el noroeste, y las islas Hawái, en el Pacífico.</p>
        <h2>Deporte</h2>
        <p>Desde finales del siglo xix, el béisbol se considera como el deporte nacional, mientras que el fútbol americano, el baloncesto y el hockey sobre hielo son los tres otros grandes deportes de equipo profesionales. Las ligas universitarias también atraen a grandes audiencias. El fútbol americano es el deporte más popular en Estados Unidos. El boxeo y las carreras de caballos fueron en su momento los deportes individuales más vistos, pero han sido eclipsados por el golf y el automovilismo, particularmente por los campeonatos Stock Cars como la más importante Copa NASCAR y otras categorías nacionales y regionales de NASCAR y ARCA.</p><p>Otros campeonatos de monoplazas reseñables son la IndyCar, anteriormente la desaparecida Championship Auto Racing Teams y las carreras de resistencia como la United SportsCar Championship. Una de las principales carreras de Estados Unidos son las 500 Millas de Indianapolis de la IndyCar, que cuenta con prestigio internacional. Las carreras de resistencia como las 24 Horas de Daytona, 12 Horas de Sebring y la Petit Le Mans son de igual importancia en el automovilismo mundial. Las 500 millas de Daytona de la copa NASCAR es la carrera más importante de los Stock Cars del mundo. 
        El fútbol, aunque no es uno de los principales deportes a nivel profesional en el país, tiene gran presencia y nivel de aficionados. El tenis y otros deportes de exterior también son populares junto al Abierto de Estados Unidos, uno de los campeonatos de tenis más vistos del mundo</p>
        <h2>Religion</h2>
        <p>Un porcentaje ligeramente superior al 50 % de los estadounidenses dice que la religión toma un papel «muy importante» en su vida, una proporción única entre los países desarrollados. La mayoría de los estadounidenses (65,5%) se identifican como cristianos y alrededor del 18% no se identifican con ninguna religión. De acuerdo con los datos sobre religiosidad de Pew Reserch, en 2021 el 63 % de los estadounidenses era cristiano, el 31 % agnóstico, ateo o irreligioso, mientras que los adeptos a otras religiones llegaban al 6 % del total.</p><p>
        De acuerdo con el American Religious Identification Survey (ARIS), en 2008, el 76 % de los estadounidenses se identificaban como cristianos, con el 51 % asistiendo a diferentes tipos de iglesias protestantes, y el 26 % profesando ser católicos. La misma encuesta dice que alrededor del 4 % de la población profesa otras religiones (incluyendo, entre otras, el judaísmo, el budismo, el islam, y el hinduismo), que el 15 % de la población adulta no tenía ninguna religión, y que otro 5,2 % no sabía o se negaba a contestar. De acuerdo con una encuesta de 2012, el 36 % de los estadounidenses dicen ir a la iglesia al menos una vez por semana</p>
        <h2>Literatura y Filosofia</h2>
        <p>Durante el siglo xviii y principios del siglo xix, la literatura estadunidense tomaba la mayoría de sus influencias de Europa. A mediados del siglo xix, escritores como Nathaniel Hawthorne, Edgar Allan Poe y Henry David Thoreau establecieron una literatura propia del país. Mark Twain y el poeta Walt Whitman fueron dos de las grandes figuras de la segunda mitad del siglo; Emily Dickinson, virtualmente desconocida durante su vida, también es considerada como una de las poetisas más importantes de la literatura estadounidense.</p><p>Una obra que captura aspectos fundamentales de la vida en el país en sus personajes tales como Moby-Dick (1851) de Herman Melville, Las aventuras de Huckleberry Finn (1885) de Mark Twain y El gran Gatsby (1925) de F. Scott Fitzgerald puede ser considerada como la «gran novela estadounidense».
        Once ciudadanos estadounidenses han ganado el Premio Nobel de Literatura, siendo el más reciente Toni Morrison en 1993. William Faulkner y Ernest Hemingway, ganadores en los años 1949 y 1954, respectivamente, a menudo son catalogados entre los escritores más influyentes del siglo xx.Varios géneros literarios populares como los del viejo oeste y la novela negra se desarrollaron en el país. Los escritores de la generación beat (Allen Ginsberg, Jack Kerouac, William S. Burroughs…) abrieron el campo a nuevas formas literarias, así como a autores posmodernistas como John Barth, Thomas Pynchon y Don DeLillo. Merece la pena mencionar asimismo a otros poetas y escritores tan importantes como Ezra Pound, Wallace Stevens, Gore Vidal, Truman Capote, el nacionalizado Vladimir Nabokov, Raymond Carver, y, dentro de la literatura fantástica, son de renombre internacional H. P. Lovecraft, Philip K. Dick, Ray Bradbury, Stephen King, etc.</p>
        <h2>Arte</h2>
        <p>Desde la colonización europea, el arte estadunidense se mantuvo apegado a las corrientes artísticas del Viejo Continente. A mediados del siglo xix, surgió la Escuela del río Hudson, uno de los primeros movimientos artísticos desarrollado en el país, aunque todavía se encontraba muy influenciado por la tradición europea del naturalismo. En 1913, el Armory Show de la ciudad de Nueva York, una exhibición de obras del arte moderno europeo, causó un gran impacto en el público y transformó la escena artística estadunidense. Georgia O'Keeffe, Marsden Hartley y otros artistas experimentaron con nuevos estilos, mostrando una sensibilidad y técnica sin precedentes en los artistas europeos. Los movimientos artísticos más importantes como el expresionismo abstracto de Jackson Pollock y Willem de Kooning y el pop art de Andy Warhol y Roy Lichtenstein se desarrollaron en gran medida en los Estados Unidos. De igual forma, la corriente del modernismo y el posmodernismo llevaron a la fama a varios arquitectos estadounidenses como Frank Lloyd Wright, Philip Johnson y Frank Gehry.</p>
        <h2>Gastronomia</h2>
        <p>La gastronomía de Estados Unidos es similar a la de otros países occidentales, con el trigo siendo el cereal más utilizado. La cocina tradicional estadunidense utiliza ingredientes como el pavo, carne de ciervo, papas, camotes, maíz, calabazas, miel de maple y otros elementos indígenas utilizados por los amerindios y los primeros colonizadores europeos. Parrilladas de puerco y res, tortas de cangrejo, papas chips y las galletas con chispas de chocolate son algunos de los platos hechos al «estilo estadounidense».</p><p>La soul food, la cocina tradicional de los esclavos africanos, es aún popular en el sur y entre los afroamericanos de otras partes del país. Las gastronomías sincréticas, como la cocina criolla de Luisiana, la cajún y la Tex-mex, tienen gran importancia regional.
        Platos característicos como la tarta de manzana, el pollo frito, la pizza, la hamburguesa y el perrito caliente provienen de recetas introducidas por los inmigrantes. Las papas fritas, los platillos mexicanos como los burritos y tacos y los platillos con pastas adaptados de recetas italianas también son ampliamente consumidos. En el consumo de bebidas, los estadounidenses prefieren el café en vez del té. La publicidad de las industrias estadounidenses ha hecho que el jugo de naranja y la leche sean las bebidas típicas de un desayuno. El consumo frecuente de comida rápida está asociado con lo que los médicos llaman «epidemia de obesidad». Las gaseosas son ampliamente populares: el azúcar contenido en ellas aporta el 9 % de la ingesta calórica promedio.</p>
        <h2>Ciencia y Tecnologia</h2>
        <p>Estados Unidos es pionero en la investigación científica y la innovación tecnológica desde el siglo xix. En 1876, Alexander Graham Bell recibió la primera patente para un estadounidense por el teléfono.El laboratorio de Thomas Edison desarrolló el fonógrafo, la primera lámpara incandescente y el primer proyector de películas. Nikola Tesla fue precursor en experimentar con la corriente alterna, el motor de corriente alterna y la radio. En el siglo xx, las compañías de automóviles de Ransom Eli Olds y Henry Ford promovieron la producción en cadena. En 1903, los hermanos Wright realizaron el primer vuelo propulsado en su aeronave Wright Flyer.</p><p>
        El ascenso del nazismo en la década de 1930 llevó a muchos científicos europeos, incluyendo a Albert Einstein y Enrico Fermi, a emigrar al país. Durante la Segunda Guerra Mundial, el proyecto Manhattan ya había desarrollado las primeras armas nucleares, anunciando el inicio de la era nuclear. La carrera espacial también produjo avances rápidos en la construcción y el desarrollo de cohetes, la ciencia de materiales y la informática</p>
        `
    }else if(pais =='Nueva Guinea'){
        return `
        <h1>Nueva Guinea</h1>
        <p>Es la segunda mayor isla del mundo, con 785 753 km², y está ubicada al norte de Australia. Papúa es otra denominación de la isla. Está dividida políticamente, de este a oeste, en dos mitades aproximadamente iguales.
        La mitad oriental (este) es Papúa Nueva Guinea, país independiente desde 1975; la mitad occidental (oeste), denominada Nueva Guinea Occidental o Papúa Occidental (anteriormente conocida como Irian occidental o Irian Jaya), está incorporada a Indonesia y la conforman las seis provincias de Papúa</p>
        <h2>Ubicacion Geografica</h2>
        <p>Nueva Guinea es una isla al norte de la Australia continental, al sur del ecuador. Está aislada por el mar de Arafura al oeste, y el estrecho de Torres y mar de Coral al este. Se la ha considerado a veces como la isla más oriental del archipiélago indonesio. Se encuentra al norte del punto más al norte de Australia (Top End), el golfo de Carpentaria y la península del Cabo York, y al oeste del archipiélago de Bismarck y de las islas Salomón.
        Políticamente, la mitad occidental de la isla Nueva Guinea Occidental comprende dos provincias de Indonesia: Papúa y Papúa Occidental. La mitad oriental forma la parte principal de Papúa Nueva Guinea.</p>
        <h2>Religion</h2>
        <p>La mayor parte de la población en Papúa Nueva Guinea tiene creencias cristianas así como animistas, las cuales se remontan a las creencias tradicionales de muchas tribus, y que se mantienen en muchos lugares de la isla en la actualidad. Legalmente se permite la libertad de credo y de expresión.
        Una aplastante mayoría de los habitantes de Papúa Nueva Guinea se consideran a si mismos miembros de la Iglesia Cristiana, sin embargo, muchos de ellos combinan las creencias cristianas con las tradiciones y creencias de las tribus indígenas, podemos ver manifestaciones de las creencias tribales en muchos aspectos de la vida cotidiana de los isleños.</p><p>
        En el país no se registran conflictos religiosos de ningún tipo según los informes realizados en los últimos años, por lo que las distintas poblaciones que tienen creencias propias conviven de forma pacífica. En las escuelas públicas hay una clase de religión una vez a la semana, las cuales representantes de la iglesia cristiana imparten. Además, los menores asisten a las clases de la iglesia que los padres eligen.
        También es posible que los menores no asistan a clases de religión si los padres así lo deciden. Hay pocos miembros de iglesias que no sean la cristiana, los cuales se reúnen en grupos antes o después de las clases oficiales de las escuelas. Hay una amplia libertad para seguir las creencias religiosas que cada uno considere.
        Es habitual que las tribus inviten o dejen asistir a los ritos de danzas y cánticos. También es posible realizar varias excursiones y ascensiones, siendo uno de los caminos más frecuentados el de Kokoda. Por medio de los diversos ritos que realizan los indígenas podemos conocer sus creencias desde cerca y disfrutar de una experiencia única en nuestro viaje a la isla de Nueva Guinea</p>
        <h2>Literatura</h2>
        <p>Los primeros textos escritos por extranjeros llegados a Papúa Nueva Guinea son de los cronistas de las expediciones españolas, pioneras en aquella zona del mundo, entre las que destacan las comandadas por Álvaro de Mendaña (uno de cuyos principales cronistas fue el marino Hernán Gallego), Pedro Fernández de Quirós (que escribió “Memoriales de las Indias Australes”) y Luis Váez de Torres (a cuyo cargo viajaba el cronista y cartógrafo Diego de Prado y Tovar).</p><p>Merece la pena destacar que esas crónicas hablaban sobre Papúa Nueva Guinea principalmente sin pisar su territorio, es decir, contando sobre todo lo visto desde los barcos que componían las expediciones.
        Son posteriores en el tiempo las célebres aportaciones del antropólogo polaco Bronislaw Malinowski (sobre todo con “Los argonautas del Pacífico Occidental”, en el que estudia el fenómeno de del Kula, un complejo sistema de intercambio mantenido por los nativos de las Islas Trobriand, aunque también con “Edipo destronado”). Antes, aunque con menos relevancia que la que tuvo Malinowski, otros antropólogos habían escrito sobre el país (es el caso del ruso Nikolai Miklukho-Maklai), y es que Papúa se convirtió en un paraíso para los investigadores de esa rama. Otras obras son “Mosaico papú”, del misionero español Xavier Vergés, "21 años con los papúes", del misionero francés André Dupeyrat, "El mundo hasta ayer", de Jared Diamond, o la más reciente “El turista desnudo”, de Lawrence Osborne. Merece la pena destacar que ha proliferado mucho más la literatura de viajes sobre la provincia indonesia de Papúa, que comparte muchos rasgos con el país Papúa Nueva Guinea, por ser ese territorio algo más accesible para los extranjeros.</p>
        <h2>Arte</h2>
        <p>La denominación de arte papuano incluye tanto las producciones tradicionales (pasadas y presentes) como las producciones contemporáneas de la zona papúa es decir, todas las islas de Nueva Guinea, Nueva Irlanda, Nueva Bretaña y las dependencias insulares de este grupo: las islas de Entrecasteaux, las islas Trobriand, por mencionar únicamente los archipiélagos más famosos de la zona. El arte papú entra en el arte oceánico.</p><p>Sus producciones más famosas emanan del gran río Sepik, la principal arteria de comunicación de esta isla con su geografía hostil antanos y altas montañas y del pueblo Asmat, formidables cazadores de cabezas cuyo lugar de vida y costumbres influyen en la imaginación occidental del Caníbal salvaje.
        Basado en el experto Jules Guiart, es posible distinguir 11 áreas artísticas diferentes: Nueva Irlanda, las colinas de Maprik, el área de Washkuk, el río Yuat, el Sepik Medio, el Golfo de Papúa, la costa de Asmat, la bahía de Geelvink, Nueva Bretaña, el Golfo de Huon y el área de Massim. La madera es el principal soporte del arte papú. El metal, con algunas excepciones, no se conoce antes de los contactos europeos, por lo que el tamaño de la madera para las piezas raras más antiguas puede parecer áspero.</p>
        <h2>Gastronomia</h2>
        <p>Es un país con una gastronomía no muy conocida, quizás porque no es promocionada y la posibilidad de encontrarla en algunos restaurantes de países como el nuestro es nula.
        Pero lo que te acabo de contar no debe ser una excusa para dejarla de lado y no escudriñarla, ya que puedes conocer sus principales ingredientes y platos, para cuando tengas el privilegio de visitar esta nación, tengas información base sobre su arte culinario.</p><p>En primer lugar, es bueno que te enteres que ellos consideran la cena como su comida principal.
        Los alimentos predominantes en ese país son los cultivos de raíces como el sagú (planta herbácea), las batatas, el taro (yautía coco), la yuca, el coco y las frutas tropicales. La carne que más consumen es la de cerdo que preparan en ocasiones especiales, esto porque los papúes son en su mayoría vegetarianos.</p>
        `
    }else if(pais == 'Alemania'){
        return `
        <h1>Alemania</h1>
        <p>es uno de los veintisiete Estados soberanos que forman la Unión Europea. Constituido en Estado social y democrático de derecho, su forma de gobierno es la república parlamentaria y federal. Su capital es Berlín. Está formado por dieciséis estados federados (Bundesländer) y limita al norte con el mar del Norte, Dinamarca, Suecia (frontera marítima) y el mar Báltico; al este con Polonia y la República Checa; al sur con Austria y Suiza; y al oeste con Francia, Luxemburgo, Bélgica y los Países Bajos. El municipio Büsingen am Hochrhein, enclavado en Suiza, también forma parte de Alemania.</p><p>El territorio de Alemania abarca 357 376 km² de extensión y posee un clima templado. Con más de 84 millones de habitantes, es el país más poblado entre los Estados de la Unión Europea, y es el hogar del tercer mayor grupo de emigrantes internacionales. En 2014 Alemania fue el segundo destino de las migraciones más popular del mundo, después de Estados Unidos</p>
        <h2>Ubicacion Geografica</h2>
        <p> es un país de Europa central que forma parte de la Unión Europea (UE). Limita al norte con el mar del Norte, Dinamarca y el mar Báltico; al este con Polonia y la República Checa; al sur con Austria al suroeste con Suiza, y al oeste con Francia, Luxemburgo, Bélgica y al noroeste con Países Bajos. Alemania contiene una vasta diversidad de paisajes. Montañas, bosques, colinas, llanuras, lagos, ríos y costas forman este gran país.</p>
        <h2>Economia</h2>
        <p>Por el desarrollo de su economía, es considerada en términos generales como la cuarta potencia mundial y la primera de Europa. En 2006 su producto interior bruto (PIB) rebasó los 3 billones de dólares US. Sus bazas industriales son diversas; los tipos principales de productos fabricados son medios de transporte, aparatos eléctricos y electrónicos, maquinaria, productos químicos, materiales sintéticos y alimentos procesados.</p><p>Es foco de riqueza y eso se refleja en la creciente economía del centro de Europa. Con una infraestructura de carreteras amplias y un excelente nivel de vida, es una de las naciones más desarrolladas del mundo.
        En palabras del exministro Federal de Relaciones Exteriores, Joschka Fischer, Alemania es «campeón mundial de las exportaciones», dado el movimiento favorable en el comercio exterior del país desde 2004, que ha dado a los alemanes un superávit exportador</p>
        <h2>Literatura</h2>
        <p>La literatura alemana se remonta a la Edad Media y las obras de escritores como Walther von der Vogelweide y Wolfram von Eschenbach. Diversos autores y poetas alemanes han ganado gran renombre, incluyendo Johann Wolfgang von Goethe y Friedrich Schiller. Las colecciones de cuentos populares publicados por los Hermanos Grimm popularizaron el folclore alemán en el plano internacional.</p><p>La influencia de autores del siglo xx incluyen Thomas Mann, Bertolt Brecht, de Hermann Hesse, Heinrich Böll y Günter Grass.
        La influencia de Alemania en la filosofía es históricamente significativa y muchos notables filósofos alemanes han contribuido a dar forma a la filosofía occidental desde la Edad Media. Gottfried Leibniz y sus contribuciones al racionalismo, Immanuel Kant, Georg Wilhelm Friedrich Hegel, Friedrich Wilhelm Joseph Schelling y Johann Gottlieb Fichte que forjaron el idealismo, Karl Marx y Friedrich Engels formularon la teoría comunista, Arthur Schopenhauer desarrolló la composición de pesimismo metafísico, Friedrich Nietzsche desarrolló el Perspectivismo, la obra de Martin Heidegger en Ser y Tiempo, y el de las teorías sociales Jürgen Habermas fueron especialmente influyentes.</p>
        <h2>Arquitetura</h2>
        <p>Alemania ha experimentado a lo largo de su historia la influencia de diferentes estilos arquitectónicos que han sido incorporados y adaptados a los gustos regionales.</p><p>Entre las contribuciones alemanas destacan los estilos carolingio y otoniano, que fueron importantes precursores del románico. La región se convirtió más tarde en sitio de obras importantes en estilos como el gótico, renacentista y barroco. Fue especialmente importante en los primeros movimientos modernos, sobre todo gracias a la Bauhaus fundada por Walter Gropius. Mies van der Rohe se convirtió en uno de los más renombrados arquitectos del mundo en la segunda mitad del siglo xx y el empleo de fachadas de vidrio en los rascacielos es una idea suya.
        El patrimonio arquitectónico alemán es extremadamente importante. Hay 41 lugares en Alemania distinguidos como patrimonio mundial de la Unesco, casi todos ellos con importantes obras arquitectónicas.</p>
        <h2>Ciencia</h2>
        <p>Alemania ha sido el hogar de algunos de los más destacados investigadores en diferentes campos científicos. Es así que cerca de 100 alemanes (de nacionalidad u origen) han sido laureados con el Premio Nobel. El trabajo de Albert Einstein, Max Planck y Otto Hahn fue crucial para la fundación de la física moderna y química nuclear, que Werner Heisenberg y Max Born desarrollaron aún más.</p><p>Ellos fueron precedidos por físicos como Hermann von Helmholtz, Joseph von Fraunhofer, y Daniel Gabriel Fahrenheit. Wilhelm Conrad Röntgen descubrió los rayos X, un logro que le hizo el primer ganador del Premio Nobel de Física en 1901. En Alemania y otros países los rayos X se denominan "Röntgenstrahlen" (rayos de Röntgen). El trabajo de Heinrich Rudolf Hertz en el ámbito de la radiación electromagnética fue fundamental para el desarrollo de las modernas telecomunicaciones. Wilhelm Wundt es célebre por haber desarrollado el primer laboratorio de psicología, a la que dio la categoría de ciencia. Alexander von Humboldt y su trabajo como científico natural y explorador fue fundacional para la biogeografía.</p><p>
        Numerosos importantes matemáticos han nacido en Alemania, incluidos Carl Friedrich Gauss, David Hilbert, Bernhard Riemann, Gottfried Leibniz, Karl Weierstrass y Hermann Weyl. Alemania ha sido también el hogar de famosos inventores e ingenieros, como Johannes Gutenberg, quien se acredita la invención de la imprenta de tipos móviles en Europa; Hans Geiger, el creador del contador Geiger, y Konrad Zuse, que construyó el primer ordenador digital totalmente automático. Inventores, ingenieros e industriales, como el conde Ferdinand von Zeppelin, Otto Lilienthal, Gottlieb Daimler, Rudolf Diesel, Hugo Junkers y Karl Benz contribuyeron a dar forma moderna al automóvil y a la tecnología del transporte aéreo.</p>
        <h2>Gastronomia</h2>
        <p>La cocina alemana varía de una región a otra. Las regiones del sur de Baviera y Suabia, por ejemplo, comparten una cultura culinaria con Suiza y Austria. Carne de cerdo, carne de vacuno, y aves de corral son las principales variedades de la carne consumida, con la carne de cerdo como la más popular. A lo largo de todas las regiones, la carne se come con frecuencia en forma de salchicha. Más de 1500 diferentes tipos de salchichas se producen en el país.</p><p>Los llamados alimentos orgánicos han ganado una cuota de mercado de alrededor del 3,0 % y se prevé que sea una tendencia creciente.
        El desayuno es usualmente una selección de cereales y miel o mermelada con pan. Algunos alemanes comen embutidos, huevos y/o queso con pan para el desayuno. Más de 300 tipos de panes son conocidos en todo el país. Al ser un país de inmigrantes, ha adoptado muchos platos internacionales. Platos italianos como pizza y pasta, o turcos y árabes como el kebab están bien establecidos, sobre todo en ciudades grandes. Restaurantes chinos y griegos están también considerablemente extendidos.</p>
        `
    }else if(pais == 'Sudafrica'){
        return `
        <h1>Sudafrica</h1>
        <p>es un país soberano, miembro de la Unión Africana, situado en África austral y cuya forma de gobierno es la república parlamentaria. Su territorio está organizado en nueve provincias. Su capitalidad tiene un estatus especial, pues la componen tres ciudades: Pretoria, sede del poder ejecutivo; Bloemfontein, sede del poder judicial; y Ciudad del Cabo, sede del poder legislativo. Asimismo, la ciudad más poblada del país es Johannesburgo, siendo esta, además, una de las 40 áreas metropolitanas más grandes del mundo.
        Posee 2798 kilómetros de costa en los océanos Atlántico e Índico.</p>
        <h2>Ubicacion Geografica</h2>
        <p>La República de Sudáfrica está situada en el extremo sur del continente africano.tiene 19 regiones, El país limita al noroeste con Namibia, al norte con Botsuana y al este con Zimbabue, Mozambique y Suazilandia. Leshoto, país independiente pero con importantes lazos con Sudáfrica, queda en su interior. El país está rodeado por los océanos Atlántico e Índico</p>
        <h2>Mineria</h2>
        <p>La minería en Sudáfrica ha sido la principal causa por la cual el país está dentro de las grandes economías mundiales. Actualmente es el segundo productor de oro a nivel mundial. Históricamente, la minería en el país comienza con el descubrimiento de diamantes a orillas del río Orange en 1867. Cercana a esa época, la extracción de oro se haría famosa en la región de Witwatersrand, dando origen a la fiebre del oro de 1886. Ciudades como Kimberley, surgieron gracias a la explotación de recursos mineros en la zona norte del país.</p><p>A partir de 2007, la industria minera de Sudáfrica cuenta con 493 000 trabajadores.
        Sudáfrica es el mayor productor de platino del mundo, el quinto de oro y quinto de carbón y uno de los mayores exportadores de diamantes. La producción nacional de diamantes está controlada en un 94 % por la De Beers Consolidated Mines Ltd., que también está presente en otros países de África.También es importante la explotación de recursos como cromo, antimonio, manganeso, níquel, fosfatos, uranio, cobre, vanadio, sal y gas natural.</p>
        <h2>Ciencia</h2>
        <p>Varios importantes avances científicos también se han originado en Sudáfrica como fue el primer trasplante de corazón de humano a humano realizado por el cardiocirujano Christiaan Barnard en el Groote Schuur Hospital en diciembre de 1967, Max Theiler que desarrolló su vacuna contra la fiebre amarilla o Aaron Klug con sus métodos cristalográficos.</p>
        <h2>Gastronomia</h2>
        <p>La gastronomía de Sudáfrica tiene una variedad de fuentes y de estados, entre los que cabe destacar: Los usos culinarios de los indígenas de Sudáfrica tales como los khoisan, los xhosa y los sotho. Por otra parte los usos foráneos introducidos durante la época colonial por descendientes de afrikáneres y británicos así como por sus esclavos y servientes; esto incluye las influencias de la cocina malaya de las gentes provenientes de Malasia y Java.</p>`
    }else if(pais == 'Brazil'){
        return `
        <h1>Brazil</h1>
        <p>Es un país soberano de América del Sur que comprende la mitad oriental del continente y algunos grupos de pequeñas islas en el océano Atlántico. Su capital es Brasilia y su ciudad más poblada es São Paulo. Es el tercer país más grande de América. Con una superficie estimada en más de 8 500 000 km²,es el quinto país más grande del mundo en área total (equivalente a 50 % del territorio sudamericano)</p>
        <h2>Ubicacion Geografica</h2>
        <p>Brasil es el tercer país más grande de América y el quinto más grande del mundo. Sus límites son: al sur, Argentina, Uruguay y Paraguay; al este, el Océano Atlántico; al norte, Venezuela, Colombia, Guyana, Surinam y Guayana Francesa; y al oeste Perú y Bolivia.</p>
        <h2>Turismo</h2>
        <p>El turismo en Brasil es una actividad importante en varias regiones del país. Con 6 306 000 visitantes extranjeros en 2015, Brasil es el primer destino del mercado turístico internacional en América del Sur y ocupa el segundo lugar en América Latina en términos de turistas internacionales, después de México.</p><p>
        Los gastos de los turistas extranjeros que visitan Brasil alcanzaron los 4,9 mil millones de dólares en la primera mitad de 2011, un 15,5 % más que en el mismo periodo en 2010.317</p>
        <h2>Ciencia y Tecnologia</h2>
        <p>La producción científica brasileña comenzó en las primeras décadas del siglo xix, cuando la familia real y la nobleza portuguesa, guiadas por el príncipe-regente Juan VI de Portugal, llegaron a Río de Janeiro huyendo de la invasión del ejército de Napoleón Bonaparte a Portugal.</p><p>Hasta entonces, Brasil había sido una colonia portuguesa sin universidades ni organizaciones científicas, en contraste con las colonias americanas del Imperio español, que a pesar de tener un importante porcentaje de población analfabeta, contaban con un número considerable de universidades desde el siglo xvi.
        El Consejo Nacional de Desarrollo Científico y Tecnológico (CNPq) es la agencia del gobierno encargada de dirigir, administrar y fomentar el desarrollo y promoción de las actividades científicas y tecnológicas.No obstante, la investigación tecnológica en Brasil es realizada en gran parte por las universidades públicas e institutos de investigación. Algunos de los centros de desarrollo tecnológico brasileños más notables son los institutos Oswaldo Cruz (FIOCruz), Butantan, Empresa Brasileira de Pesquisa Agropecuária y el INPE.</p>
        <h2>Religion</h2>
        <p>La constitución establece la libertad de culto y la separación Iglesia-Estado, haciendo de Brasil un Estado oficialmente aconfesional. La legislación prohíbe cualquier tipo de intolerancia religiosa, aunque la Iglesia católica goza de un estatus más privilegiado. Lo anterior puede relacionarse al hecho de que el catolicismo es la fe predominante en el país, de modo que Brasil posee la mayor población católica del mundo.</p>
        <h2>Arte</h2>
        <p>El arte brasileño se desarrolló en diferentes estilos que varían del barroco —el estilo predominante en Brasil antes del inicio del siglo xix pasando por el romanticismo, modernismo, expresionismo, cubismo, surrealismo hasta el abstraccionismo. Sin embargo, los primeros ejemplos de arte en Brasil son las pinturas rupestres en el parque nacional de la Sierra de Capivara, que datan de hace 15 000 años.De la época prehispánica solo se han recuperado pequeñas piezas de cerámica y tallas de piedra como principales manifestaciones artísticas.Más tarde, durante la época colonial, el barroco fue el movimiento artístico más influyente en el arte brasileño, como lo evidencian las pinturas, esculturas y edificios hechos en esta etapa.</p><p>
        Poco antes de la independencia nacional se fundó la Academia Imperial de Bellas Artes, donde décadas más tarde surgió el principal movimiento artístico del siglo xix en el país, el romanticismo brasileño. Durante este periodo el arte académico alcanzó su «edad de oro», con representantes como Victor Meirelles y Pedro Américo, los cuales crearon un movimiento con características particulares que lo distinguían de su contraparte europea.En 1922 se celebró la «Semana de Arte Moderno» en São Paulo, acontecimiento que marcó el inicio del modernismo brasileño. Artistas como Anita Malfatti, Tarsila do Amaral, Emiliano Di Calvacanti, Vicente do Rego Monteiro, Victor Brecheret, Cândido Portinari y Oscar Niemeyer fueron algunos de los principales exponentes de este movimiento, al mismo tiempo que ayudaron al desarrollo y promoción de las artes en Brasil.</p>
        <h2>Arquitetura</h2>
        <p>La arquitectura de Brasil está influenciada por Europa, principalmente Portugal. La arquitectura colonial portuguesa fue la primera ola de arquitectura que llegó a Brasil y es la base de toda la arquitectura brasileña en los siglos posteriores. En el siglo xix, durante la época del Imperio, el país siguió las tendencias europeas y adoptó la arquitectura neoclásica y neogótica. Luego, en el siglo xx, especialmente en Brasilia, Brasil experimentó con la arquitectura modernista. La arquitectura colonial de Brasil se remonta a principios del siglo xvi, cuando su territorio fue explorado, conquistado y colonizado por los portugueses, quienes construyeron arquitectura que les era familiar en Europa, como iglesias, arquitectura cívica, incluidas casas y fuertes en las ciudades y el campo brasileños.</p>
        <h2>Gastronomia</h2>
        <p>La cocina brasileña varía mucho dependiendo cada región, de modo que refleja la mezcla de las poblaciones nativas y de los inmigrantes. Esto ha definido una gastronomía nacional marcada por la preservación de estas diferencias regionales. Entre los mejores ejemplos están la feijoada, considerado el plato nacional;vatapá, moqueca, polenta y acarajé. Brasil cuenta con una gran variedad de dulces como el brigadeiro y el beijinho. Las bebidas nacionales son el café y la cachaza, una bebida destilada originaria de Brasil. Esta bebida se destila a partir de la caña de azúcar y es el ingrediente principal del cóctel nacional, la caipiriña.</p><p>
        A pesar de la variedad de platos, una comida brasileña típica consiste de arroz con frijoles, acompañados de carne de res o de cerdo y también una ensalada, o un huevo hervido o frito, papas fritas, o farofa, hecho de harina maíz o de yuca y se sazona con sal, básicamente, podría tener el orégano, la cebolla frita y el tocino frito.Gracias al clima tropical que predomina en gran parte de su territorio, en Brasil se cultivan una gran variedad de frutas, tales como el mango, la papaya, el azaí, el cupuazú, la naranja, el cacao, el marañón, la guayaba, el maracuyá y la piña. De todos estos frutos se obtienen jugos y extractos que son utilizados para la fabricación de chocolates, caramelos, helados y otros postres. Al igual que en otros países industrializados, la presencia de empresas multinacionales que ofrecen comida rápida ha ido en aumento, lo que provoca cambios en la alimentación y nutrición de la población brasileña, principalmente en áreas urbanas</p>
        <h2>Deporte</h2>
        <p>l fútbol es el deporte más popular en Brasil.La selección de fútbol ha ganado en cinco ocasiones la Copa Mundial de Fútbol de la FIFA, en 1958, 1962, 1970, 1994 y en 2002;además cuenta con nueve victorias en la Copa América, ganando las ediciones de 1919, 1922, 1949, 1989, 1997, 1999, 2004, 2007 y 2019 El voleibol, el fútbol sala, el baloncesto, el skate, el surf, el automovilismo y las artes marciales como la capoeira reconocida como el arte marcial nacional, también gozan de gran popularidad en el país.</p>
        `
    }else if (pais == 'Turquia'){
        return `
        <h1>Turquia</h1>
        <p> es un país transcontinental, con la mayor parte de su territorio situado en Asia Occidental y una menor (al oeste del mar de Mármara) en Europa Oriental, que se extiende por toda la península de Anatolia y Tracia Oriental en la zona de los Balcanes.</p>
        <h2>Ubicacion Geografica</h2>
        <p> es un estado ubicado en el sureste de Europa y suroeste de Asia (esa porción de Turquía al oeste del Bósforo es geográficamente parte de Europa), que limita con el mar Negro, entre Bulgaria y Georgia, y limita con el mar Egeo y el Mediterráneo, entre Grecia y Siria. Políticamente la Turquía europea (Rumelia) limita con Grecia y Bulgaria. La Turquía asiática limita en el Cáucaso, con Georgia, Armenia, Azerbaiyán; por oriente con Irán, y al sur con Irak y Siria.</p>
        <h2>Religion</h2>
        <p>La religión principal de Turquía es el islam. El 99 % de la población turca es musulmana,de los cuales más del 80 % pertenecen a la rama suní del islam. Una minoría, algo más del 10 % de la población musulmana, está afiliada a la creencia aleví.La escuela hanafí es la principal del sunismo, siendo en gran parte organizada por el Estado, a través de la Dirección de Asuntos Religiosos, que controla todas las mezquitas y clérigos musulmanes. Un 0,2 % de la población pertenece a otras religiones, en particular confesiones cristianas (ortodoxa griega, armenia apostólica, protestante, ortodoxa siria y católica), judaísmo (sefardí y asquenazí), y yazidismo.Según una encuesta de la Comisión Europea en 2005, el 95 % de los ciudadanos turcos respondió: "creo que hay un Dios".Un estudio, publicado en 2015 por Patrick Johnstone y Duane Alexander Miller, estima que en el 2012 había 4500 cristianos.</p>
        <h2>Literatura</h2>
        <p>Durante la mayor parte de la existencia del imperio otomano, la literatura turca estuvo fuertemente influenciada por los modelos persas y árabes. La influencia de la literatura europea no llegó hasta el siglo xix, a partir de las reformas del Tanzimat. A partir de esta época, se introdujeron nuevos géneros occidentales, como la novela o el cuento. La principal influencia vino de Francia, país con el cual había tenido históricamente estrechas relaciones. Eso explica que muchas corrientes artísticas de origen francés tengan sus equivalentes otomanos. Así, en el campo de la poesía, hubo una fuerte influencia del simbolismo y el parnasianismo. Por su parte, la prosa imitó los modelos del romanticismo y posteriormente el realismo y el naturalismo francés.</p>
        <h2>Ciencia y Tecnologia</h2>
        <p>La principal institución pública dedicada a la investigación científica, el Consejo de Investigación Científica y Tecnológica de Turquía (TÜBİTAK), fue fundado en 1963. Entre sus funciones se encuentran asesorar al gobierno en la redacción de políticas de ciencia, tecnología e innovación de Turquía, así como publicar artículos en revistas científicas y financiar actividades de i+d.Por su parte, la Academia de Ciencias Turca (TÜBA) promueve las actividades científicas en el país. Ambas instituciones mantienen independencia financiera y administrativa, aunque están principalmente financiadas por el gobierno turco.</p><p>
        El Instituto de Investigación de Energía, Energía Nuclear y Minería de Turquía es la principal institución dedicada a la investigación y desarrollo de actividades en el campo de energía, minería, radiaciones ionizantes, aceleradores de partículas y tecnología nuclear. Fue fundada en 2020, asumiendo las funciones del Organismo Turco de Energía Atómica, el Instituto Nacional de Investigación del Boro y el Instituto de Investigación de Elementos de Tierras Raras.Por su parte, en 2018 se instituyó la Agencia Espacial Turca.</p>
        <h2>Gastronomia</h2>
        <p>La gastronomía de Turquía corresponde al conjunto de costumbres culinarias de los habitantes de las regiones de Turquía. La cocina turca es muy conocida en la actualidad y parece haber influido a otras gastronomías en el uso de especias o el asado de carnes.Es conocida por sus características puente entre las cocinas del Oriente Medio y la cocina balcánica, y se puede decir que se encuentra en una posición destacada entre las cocinas de origen mediterráneo debido no solo a la posición geográfica del país, también porque tiene en común con las otras gastronomías un predominio del uso y empleo de las verduras y del aceite de oliva como ingredientes en la mayoría de sus platos.</p>
        `
    }else if(pais == 'Australia'){
        return `
        <h1>Australia</h1>
        <p>es un país soberano que comprende la parte continental del continente australiano o Sahul, la isla de Tasmania y numerosas islas menores. Con una superficie de 7 741 220 km², Australia es el país más grande de Oceanía y el sexto más grande del mundo. Asimismo, es el continente habitado más plano y más seco, con los suelos menos fértiles.Es un país megadiverso, y su tamaño le confiere una gran variedad de paisajes y climas, con desiertos en el centro, selvas tropicales en el noreste y cordilleras en el sureste.</p>
        <h2>Ubicacion Geografica</h2>
        <p>La geografía de Australia abarca una gran variedad de regiones biogeográficas al ser el continente más pequeño del mundo, al tiempo que comprende el territorio del sexto país más grande del mundo. La población de Australia se concentra en las costas oriental y sudoriental. La geografía del continente es extremadamente diversa, desde las montañas nevadas de los Alpes australianos y Tasmania hasta grandes desiertos, bosques tropicales y templados, praderas, brezales y bosques.
        Los países que gobiernan las regiones cercanas son Indonesia, Timor Oriental y Papúa Nueva Guinea al norte; las Islas Salomón, Vanuatu y la dependencia francesa de Nueva Caledonia al este; y Nueva Zelanda al sureste.</p>
        <h2>Economia</h2>
        <p>La economía de mercado mixta de Australia, de altos ingresos, es rica en recursos naturales. Es la decimotercera economía del mundo en términos nominales y la decimoctava en términos de PPA. En 2021, era el segundo país con mayor riqueza por adulto, después de Luxemburgo, y el decimotercero con más activos financieros per cápita. Australia tiene una población activa de unos 13,5 millones de personas, con una tasa de desempleo del 3,5 % en junio de 2022. Según el Consejo Australiano de Servicios Sociales, la tasa de pobreza de Australia supera el 13,6 % de la población, abarcando 3,2 millones.</p><p>También estima que hay 774 000 (17,7 %) niños menores de 15 años que viven en situación de pobreza relativa. El dólar australiano es la moneda nacional, que también se comparte con tres estados insulares del Pacífico: Kiribati, Nauru y Tuvalu.</p>
        <h2>Religion</h2>
        <p>Australia no posee religión de estado. En el censo de 2016, el 52,1 % de los australianos se identificaban como cristianos. De este grupo cristiano, un 22,6 % eran católicos, un 13,3 % eran anglicanos y un 16,3 % de otras denominaciones protestantes u ortodoxas. Los australianos seguidores de religiones no cristianas comprenden el 8,2 % de la población (un 2,6 % musulmanes, un 2,4 % eran budistas, un 1,9 % hinduistas, un 0,5 % profesa el sijismo y un 0,4 % el judaísmo). Un total del 30,1 % fue categorizado como no religioso (esto incluye posiciones filosóficas como el humanismo secular, el ateísmo, el agnosticismo y el racionalismo) y un 9,6 % se negó a responder o no dio una respuesta adecuada para una correcta interpretación.</p><p>Como en muchos países occidentales, el nivel de participación activa en el culto religioso es mucho menor que la población que es seguidora de dicha religión; semanalmente la asistencia a las iglesias es de aproximadamente 1,5 millones de personas, alrededor del 7,5 % de la población</p>
        <h2>Arte</h2>
        <p>Australia cuenta con más de 100 000 yacimientos de arte rupestre aborigen, y los diseños, patrones e historias tradicionales impregnan el arte indígena australiano contemporáneo, «el último gran movimiento artístico del siglo xx», según el crítico Robert Hughes;entre sus exponentes se encuentra Emily Kame Kngwarreye. Los primeros artistas coloniales mostraron una fascinación por la tierra desconocida. Las obras impresionistas de Arthur Streeton, Tom Roberts y otros miembros de la escuela de Heidelberg del siglo xix el primer movimiento «claramente australiano» en el arte occidental expresaron los sentimientos nacionalistas en el período previo a la federación. Aunque la escuela siguió siendo influyente en la década de 1900, modernistas como Margaret Preston y, más tarde, Sidney Nolan, exploraron nuevas tendencias artísticas.</p><p>El paisaje siguió siendo fundamental en la obra del acuarelista aborigen Albert Namatjira, así como en la de Fred Williams, Brett Whiteley y otros artistas de la posguerra cuyas obras, de estilo ecléctico pero singularmente australiano, se movían entre lo figurativo y lo abstracto</p>
        <h2>Gastronomia</h2>
        <p>La mayoría de los grupos indígenas australianos subsistían con una sencilla dieta de cazadores-recolectores a base de fauna y flora autóctonas, también llamada bush tucker.Los primeros colonos introdujeron la cocina británica e irlandesa en el continente. Esta influencia se aprecia en la popularidad duradera de varios platos británicos, como el fish and chips, y en platos australianos por excelencia, como el pastel de carne australiano. La inmigración de la posguerra transformó la cocina australiana.</p><p>Por ejemplo, los inmigrantes del sur de Europa ayudaron a crear una próspera cultura cafetera australiana que dio lugar a bebidas de café australianas como el flat white, mientras que la inmigración de Asia oriental dio lugar a platos como el dim sim y el Chiko Roll, de influencia cantonesa, así como a una cocina china australiana distinta. Las salchichas, las pavlovas, los lamingtons, los pasteles de carne, el Vegemite y las galletas Anzac se consideran alimentos emblemáticos de Australia.</p>
        `
    }
}