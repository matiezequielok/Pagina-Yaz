import songs from "../helpers/songs.js"
import questions from "../helpers/questions.js"
import randomQuestion from "../helpers/randomQuestion.js"

const players =[]
const principalContainer = document.getElementById('principal-container')
const img = document.getElementById('img')
const count = document.getElementById('count')
const song = document.getElementById('song')
const effect = document.getElementById('effect')

song.src = '../canciones/cancion1.mp3'

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });


const selectPlayerOne = async () => {
    let player1
    await Swal.fire({
        title: 'Ingrese el nombre del Primer Jugador',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Confirmar',
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.isConfirmed) {
            const name = result.value.toLowerCase().capitalize()
            if (name === 'Yazmin'){
                Swal.fire({
                    title: 'Ohh eres Yazmin!',
                    text: 'Tu eres nuestra reina',
                    imageUrl: '../imgs/Yazmin.jpeg',
                    imageWidth: 200,
                    imageHeight: 300,
                    imageAlt: 'Custom image',
                  })
                  player1 = {img:'../imgs/Icono-Yazmin.jpeg'}
            }else{
                Swal.fire(`Bievenido/a ${result.value} nos alegra que viajes por nuestras tierras`)
                player1 = {img:'../imgs/Icono-Jugador.jpg'}
            }
            player1 = {player:1,name:name,health:7,img:player1.img}
            players.push(player1)
        }
    })
}

const selectPlayerTwo = async () => {
    let player2
    await Swal.fire({
        title: 'Ingrese el nombre del Segundo Jugador',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Siguiente',
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.isConfirmed) {
            const name = result.value.toLowerCase().capitalize()
            if (name === 'Yazmin'){
                Swal.fire({
                    title: 'Ohh eres Yazmin!',
                    text: 'Tu eres nuestra reina',
                    imageUrl: '../imgs/Yazmin.jpg',
                    imageWidth: 200,
                    imageHeight: 300,
                    imageAlt: 'Custom image',
                    confirmButtonText: 'Bienvenida Reina!'
                  })
                  player2 = {img:'../imgs/Icono-Yazmin.jpeg'}
            }else{
                Swal.fire(`Bievenido/a ${result.value} nos alegra que viajes por nuestras tierras`)
                player2 = {img:'../imgs/Icono-Enemigo.jpg'}
            }
            player2 = {player:2,name:name,health:7,img:player2.img}
            players.push(player2)
        }
    })
}

const createQuestion = () => {
    song.src = songs[Math.floor(Math.random() * songs.length)]

    const question = randomQuestion()

    const div = document.createElement('div')

    div.classList = 'space-y-4'

    div.id = 'question'

    div.innerHTML = `<div class="bg-white p-8">
                        <h1 class="font-bold w-full text-center text-lg">${question.question}</h1>
                    </div>`

    question.answers.forEach((answer)=> {
        if (answer === question.correct){
            return div.innerHTML += `<div id='correct' class="w-full p-4 rounded-full bg-white border-1 border-gray font-semibold text-center border border-b-8 border-purple-700 correct text-lg cursor-pointer">
                                ${answer}
                                </div>`
        }
        div.innerHTML += `<div class="w-full p-4 rounded-full bg-white border-1 border-gray font-semibold text-center border border-b-8 border-purple-700 text-lg cursor-pointer">
                            ${answer}
                        </div>`
    })

    principalContainer.appendChild(div)
}

let refreshCount,player,gifts=false,giftsObtained=[false,false,false]

const getPlayers = async () => {
    await selectPlayerOne()
    await selectPlayerTwo()
    if ([players[0].name,players[1].name].includes('Matias') && [players[0].name,players[1].name].includes('Yazmin')){
        gifts = true
    }
    generateQuestion(1)
}

const generateQuestion = (numPlayer) => {
    player = players.find((p)=>p.player === numPlayer)
    let totalCount = 30
    img.src = player.img
    turn.textContent = `Turno de ${player.name}`
    count.textContent = `${totalCount}'`
    createQuestion(player.name,player.level)
    const starsContainer = document.createElement('div')
    starsContainer.innerHTML = '<span class="font-bold text-lg text-white uppercase " >Tu mundo: </span>'
    starsContainer.classList = 'flex w-full mx-auto p-2 bg-purple-400 justify-center space-x-1 items-center text-center mt-10'
    starsContainer.id = 'stars'
    for (let i=1;i<=player.health;i++){
        starsContainer.innerHTML += '<img class="w-6" src="../imgs/estrella.png" alt="">'
    }
    principalContainer.appendChild(starsContainer)
    refreshCount = setInterval(() => {
        if (totalCount === 1){
            removeLife(numPlayer)
            clearInterval(refreshCount)
            validateHealth()
        }    
        totalCount -= 1
        count.textContent = `${totalCount}'`
        }, 1000);

}

getPlayers()

principalContainer.addEventListener('click',(e)=>{
    verifyAnswer(e)
})



const removeLife = (numPlayer) => {
    const player = players.find((p) => p.player === numPlayer)
    player.health -= 1
}

const alertGif = (name,gif,img,final) => {
    if(!final){
        Swal.fire({
            title: `La tribu ${name}'vi encontro en la estrella un regalo para su Reina!`,
            text: gif,
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Regalo!!!',
            confirmButtonText: 'Tomar Regalo',
          }).then((result)=>{
                const question = document.getElementById('question')
                const stars = document.getElementById('stars')
                principalContainer.removeChild(question)
                principalContainer.removeChild(stars)
                if (player.player === 1){
                    return generateQuestion(2)
                }
                return generateQuestion(1)
          })
    }else{
        Swal.fire({
            title: `La tribu ${name}'vi encontro en la estrella un regalo para su Reina!`,
            text: gif,
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Regalo!!!',
            confirmButtonText: 'Tomar Regalo',
          }).then((result)=>{
                const question = document.getElementById('question')
                const stars = document.getElementById('stars')
                principalContainer.removeChild(question)
                principalContainer.removeChild(stars)
                location.replace('../pages/fin.html')
          })
    }
}

const alertQuestion = (response) => {
    let title,text
    if (response === 'error'){
        title = 'La respuesta es incorrecta!'
        text = 'No te supiste defender de la manera correcta, tu enemigo te robo una estrella!'
    }else{
        title = 'La respuesta es correcta!'
        text = 'El enemigo intento robarte un estrella pero no pudo! Sigue asi!'
    }
    Swal.fire({
        icon:response,
        title: title,
        text: text,
        confirmButtonText: 'Siguiente Turno'
    }
      ).then((result)=>{

        const question = document.getElementById('question')
        const stars = document.getElementById('stars')
        principalContainer.removeChild(question)
        principalContainer.removeChild(stars)
        if (player.player === 1){
            return generateQuestion(2)
        }
        return generateQuestion(1)
    })
}

const verifyAnswer = (e) => {
    let response
    if (e.target.classList.contains('correct')){
        e.target.classList += ' bg-green-300 border-black'
        response = 'success'
        effect.src = '../canciones/acierto.mp3'
    }else{
        e.target.classList += ' bg-red-500 border-black'
        removeLife(player.player)
        response = 'error'
        effect.src = '../canciones/error.mp3'
    }
    clearInterval(refreshCount)
    validateHealth(response)
}


const validateHealth = (response) => {
    if (player.health === 0){
        let playerWin
        if (player.player === 1){
            playerWin = players.find((p)=>p.player===2)
        }else{
            playerWin = players.find((p)=>p.player===1)
        }

        localStorage.setItem('player',playerWin.name)

        if(gifts){
            switch (playerWin.name) {
                
                case 'Matias':
                    localStorage.setItem('player','ganomatias')
                    location.replace('../pages/fin.html')
                    break;
                case 'Yazmin':
                    localStorage.setItem('player','ganoyazmin')
                    effect.src = '../canciones/aplausos.mp3'
                    alertGif('Yazmin','Para mostrarte que realmente sabemos de tus gustos, queremos otorgarte algo muy especial. ¿Enserio todavia no nos crees que sabemos de vos? Te tiramos la ultima data, tu vino preferido es Numina Bodega Salentein, pero como nos consideramos originales nos vimos obligado a darte algo nuevo para que pruebes del mismo target. PD: CAPAZ QUE SE VUELVE TU FAVORITO EH!!!','../imgs/gifts/Regalo7.jpg',true)
                    break;
            }
        }else{
            location.replace('../pages/fin.html')
        }

    }else{
        if (gifts){
            if (player.name === 'Matias'){
                switch (player.health) {
                    case 5:
                        if(giftsObtained[0]){
                            alertQuestion(response)
                        }else{
                            giftsObtained[0] = true
                            Swal.fire({
                                icon:'error',
                                title: `Ohh Matias, has perdido una estrella muy importante de tu mundo!`,
                                text: "No supiste defenderte del ataque de la tribu Yazmin'vi!",
                                confirmButtonText: 'Descubrir Estrella'
                            }
                              ).then((result)=>{
                                if (result.isConfirmed){
                                    effect.src = '../canciones/aplausos.mp3'
                                    alertGif('Yazmin','La tribu despues de tanta busqueda, pudieron encontrar los gustos indicados para su reina, en esa intensa busqueda lograron hallar la forma de volcar esos gustos en un recipiente!','../imgs/gifts/Regalo2.jpg')
                                }
                            })
                
                        }
                        break;
                    case 3:
                        if(giftsObtained[1]){
                            alertQuestion(response)
                        }else{
                            giftsObtained[1] = true
                            Swal.fire({
                                icon:'error',
                                title: `Ohh Matias, has perdido una estrella muy importante de tu mundo!`,
                                text: "No supiste defenderte del ataque de la tribu Yazmin'vi!",
                                confirmButtonText: 'Descubrir Estrella'
                            }
                              ).then((result)=>{
                                if (result.isConfirmed){
                                    effect.src = '../canciones/aplausos.mp3'
                                    alertGif('Yazmin','La tribu sabe perfectamente todo el tiempo que invertis en crecer y mejorar en tu trabajo, por lo tanto hemos decidido otorgarte algo que mejore tu utilidad en el mismo!','../imgs/gifts/Regalo4.jpg')
                                }
                            })
                        }
                        break;
                    case 2:
                        if(giftsObtained[2]){
                            alertQuestion(response)
                        }else{
                            giftsObtained[2] = true
                            Swal.fire({
                                icon:'error',
                                title: `Ohh Matias, has perdido una estrella muy importante de tu mundo!`,
                                text: "No supiste defenderte del ataque de la tribu Yazmin'vi!",
                                confirmButtonText: 'Descubrir Estrella'
                            }
                              ).then((result)=>{
                                if (result.isConfirmed){
                                    effect.src = '../canciones/aplausos.mp3'
                                    alertGif('Yazmin','Como te diste cuenta, sabemos de tus gustos musicales, por lo tanto tu proximo obsequio es para que lleves con vos tu playlist de spotify! PD: YAZ LA LISTA NOS ENCANTO!!!','../imgs/gifts/Regalo5.jpg')
                                }
                            })
                        }
                        break;
                    default:
                        alertQuestion(response)
                        break;
                }
            }else{
                alertQuestion(response)
            }
        }else{
            alertQuestion(response)
        }
        
    }
}