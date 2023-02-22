const player = localStorage.getItem('player')

switch (player) {
    case 'ganoyazmin':
        Swal.fire({
            title: `JAMAS SE PUSO EN DUDA TU LIDERAZGO YAZMIN!`,
            text: 'Ahora tambien eres reina de un mundo nuevo. Felicidades! PD: AHH, FELIZZZZ CUMPLEAÑOSS!',
            imageUrl: '../imgs/Fondo2.jpg',
            imageWidth: 500,
            imageHeight: 300,
            confirmButtonText: 'Volver a Jugar'
          }).then((result)=>{
            if (result.isConfirmed){
                localStorage.removeItem('player')
                location.replace('../index.html')
            }
          })
        break;
    case 'ganomatias':
        Swal.fire({
            title: `JAMAS SE PUSO EN DUDA TU LIDERAZGO MATIAS! SABIAMOS QUE NADIE TE PODIA VENCER BESTIA HUMANA... CRACK... IDOLO`,
            text: 'Ahora tambien eres reina de un mundo nuevo. Felicidades! PD: AHH, FELIZZZZ CUMPLEAÑOSS!',
            imageUrl: '../imgs/Perdida.jpeg',
            imageWidth: 500,
            imageHeight: 300,
            confirmButtonText: 'Volver a Jugar'
          }).then((result)=>{
            if (result.isConfirmed){
                localStorage.removeItem('player')
                location.replace('../index.html')
            }
          })
        break;
    case value:
        Swal.fire({
            title: `JAMAS SE PUSO EN DUDA TU LIDERAZGO ${player}!`,
            text: 'Felicidades por conquistar un nuevo mundo!',
            confirmButtonText: 'Volver a Jugar'
          }).then((result)=>{
            if (result.isConfirmed){
                localStorage.removeItem('player')
                location.replace('../index.html')
            }
          })
        break;
}