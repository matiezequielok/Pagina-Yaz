const questions = [
  {
    question: '¿Cuál es el nombre del protagonista de "Avatar"?',
    answers: ["Alex", "Nate", "Jack", "Jake"],
    correct: "Jake",
  },
  {
    question: "¿Cuáles de estos actores interpretó al protagonista de Avatar?",
    answers: ["Sam Worthington", "Laz Alonso", "Giovanni Ribisi", "Wes Studi"],
    correct: "Sam Worthington",
  },
  {
    question: "¿Cómo se llama la protagonista de _Avatar_ 1?",
    answers: ["Neytiri", "Rachel", "Neyleetra", "Layra"],
    correct: "Neytiri",
  },
  {
    question: "¿Cuál es el nombre de la luna en donde se desenvuelve _Avatar_?",
    answers: ["Avatar", "Craloya", "Na'vi", "Pandora"],
    correct: "Pandora",
  },
  {
    question: "¿Cuál de estos actores random estuvo en _Avatar_?",
    answers: [
      "Bryan Cranstion",
      "Jeffrey Donovan",
      "Matthew Fox",
      "Giovanni Ribisi",
    ],
    correct: "Giovanni Ribisi",
  },
  {
    question: "¿Cuál es el nombre de las especies alien en _Avatar_?",
    answers: ["Shi'ar", "Na'vi", "Twilek", "Navila"],
    correct: "Na'vi",
  },
  {
    question:
      "¿Qué es lo que los humanos querían de los aliens en la película de _Avatar_?",
    answers: [
      "Quieren exportar productos y cultura de la Tierra",
      "Quieren investigar su civilización con fines antropológicos",
      "Un mineral que pueden usar como un superconductor",
      "Para inmigrar a su mundo porque la Tierra se ha vuelto inhabitable",
    ],
    correct: "Un mineral que pueden usar como un superconductor",
  },
  {
    question: "¿Cuál de estos actores interpretó al villano de _Avatar_?",
    answers: ["Laz Alonso", "Stephen Lang", "Chris Eigeman", "Martin Donovan"],
    correct: "Stephen Lang",
  },
  {
    question: "¿Cuál es el nombre de la corporación malvada en _Avatar_?",
    answers: ["TDI", "RIAA", "BFEG", "RDA"],
    correct: "RDA",
  },
  {
    question:
      "_Avatar_ es la primera de una serie de películas planeadas por James Cameron, ¿cuántas planeó hacer?",
    answers: ["3", "4", "5", "6"],
    correct: "5",
  },
  {
    question: "¿Quién es el director de la película?",
    answers: [
      "Steven Spielberg",
      "James Cameron",
      "Quentin Tarantino",
      "Matias Orduña",
    ],
    correct: "James Cameron",
  },

  {
    question: "¿En qué año está ambientada Avatar?",
    answers: ["2154", "3897", "10000", "5000"],
    correct: "2154",
  },
  {
    question: "¿Avatar es...?",
    answers: ["Luna", "Planeta", "Estrella", "No es nada"],
    correct: "Luna",
  },
  {
    question:
      "¿Cómo se llama el coronel que le promete a Jake una nueva piernas?",
    answers: [
      "El coronel Quartich",
      "El coronel Selfridge",
      "El coronel Maxich",
      "El conorel Spellman",
    ],
    correct: "El coronel Quartich",
  },
  {
    question:
      "¿Cuál es el nombre de la piloto que a Jake, Grace y el doctor Norm Spellman a la selva?",
    answers: [
      "Betty Chacón",
      "Richard Persion",
      "Bertrudis Chacón",
      "Trudy Chacón",
    ],
    correct: "Trudy Chacón",
  },
  {
    question: "¿Cómo se llama el clan con que se topa Jake?",
    answers: ["Clan Omaticaya", "Clan Oma'ya", "Clan Pandora", "Clan Na'vi"],
    correct: "Clan Omaticaya",
  },
  {
    question:
      "¿Cómo se llama el mineral que tanto buscan y por el hizo que destreyeran el Árbol Madre?",
    answers: ["Unobtainium", "Olomo", "Hierrosius", "Molibdeno"],
    correct: "Unobtainium",
  },
  {
    question: "¿Cuál es el nombre de la Na’vi que se enamora de Jake?",
    answers: ["Neytiri", "Fey'tiri", "Trudy", "Beytiri"],
    correct: "Neytiri",
  },
  {
    question: "¿La madre de Neytiri ¿cómo se llama?",
    answers: ["Tsu'tey", "Mo'at", "Eytukan", "Tey'me"],
    correct: "Mo'at",
  },
  {
    question: "¿Cómo se llama el rey de los Omaticaya?",
    answers: ["Eytukan", "Akwey", "Tsu'tey", "Mo'at"],
    correct: "Eytukan",
  },
  {
    question:
      "¿Cuál es el nombre del ave que debe domar Jake para poder volar sobre él?",
    answers: ["Ikran", "Eytukan", "Rex", "Paruk"],
    correct: "Ikran",
  },
  {
    question: "¿Cuál es la criatura más peligrosa de Pandora?",
    answers: ["Deikran", "Toruk", "Ikran", "Viperlobo"],
    correct: "Toruk",
  },
  {
    question: "¿Cuál es el nombre de la deidad de los Na’vi?",
    answers: ["Eywa", "Toruk", "Ikran", "Arbol de Almas"],
    correct: "Eywa",
  },
  {
    question:
      "El género en que está basado la película Avatar se podría definir como:",
    answers: [
      "Tecnología futurista aplicada a la ciencia ficción",
      "Accion",
      "Terror y suspenso",
      "Comedia romántica",
    ],
    correct: "Tecnología futurista aplicada a la ciencia ficción",
  },
  {
    question: "El proceso de conectarse con el Avatar se trata de:",
    answers: [
      "Conducir un cuerpo creado con ADN alienígena y humano",
      "Pasar el espíritu a un cuerpo virtual",
      "Trasladar la mente de las personas a cuerpos artificiales para interactuar en Pandora",
      "Conducir un cuerpo virtual a través de videojuegos",
    ],
    correct:
      "Trasladar la mente de las personas a cuerpos artificiales para interactuar en Pandora",
  },
  {
    question: "¿Quien es Jake Sulli?",
    answers: [
      "El protagonista",
      "Un soldado sin incapacidades",
      "Una piedra",
      "Un pa'li",
    ],
    correct: "El protagonista",
  },
  {
    question: "¿Quien hace de la jefa del programa avatar",
    answers: [
      "Grace Aungustine",
      "James Cameron",
      "Bruce Whilson",
      "Sigourney Wever",
    ],
    correct: "Sigourney Wever",
  },
  {
    question: "En argentina ¿En que año se estreno avata?",
    answers: ["2010", "2009", "2011", "2008"],
    correct: "2010",
  },
  {
    question: "¿Como le dicen los humanos a los ikran",
    answers: ["Ikran", "Kran", "Chewbaca", "Banshe"],
    correct: "Banshe",
  },
  {
    question: "¿Como se dirige a un ikran y a un pa'li",
    answers: [
      "Diciendole ka",
      "Gritandole",
      "Con las riendas",
      "Con el pensamiento",
    ],
    correct: "Con el pensamiento",
  },
  {
    question: "¿Que significa Tsaheilu",
    answers: [
      "Coneccion de coleta neuronales",
      "Montar Vuelo",
      "Volar",
      "Elegir un bicho",
    ],
    correct: "Coneccion de coleta neuronales",
  },
  {
    question:
      "Luego de la destruccion del arbol sgrado jake regresa con toruk ¿Como le dicen los na'vi a Jake?",
    answers: [
      "El monta gallina gigante",
      "Nga Toruk",
      "Toruk Macto",
      "Macto Toruk",
    ],
    correct: "Toruk Macto",
  },
  {
    question:
      "Cuando Jake encuetra a Neytiri a Jake se le acercan las semillas del arbol sagrado ¿Que le dice Neytiri a Jake?",
    answers: ["Ka", "Nga Toruk", "Atokorina", "Trrr"],
    correct: "Atokorina",
  },
  {
    question: "¿Que es lo que dice el coronel a los recien llegados a pandora?",
    answers: [
      "Esto es pandora espero que les gute su palacio princesas",
      "Esto no sera jugar al explorador,esto sera mortal",
      "Bienvenidos a Pandora",
      "Ya no estan en kansas, estan en pandora",
    ],
    correct: "Ya no estan en kansas, estan en pandora",
  },
  {
    question: "¿Como se llama en na'vi el arbol sagrado?",
    answers: ["Keltural", "Yanos de Goliat", "Tantalo", "Hells Gate"],
    correct: "Keltural",
  },
  {
    question:
      "A Jake Sully le dan una mision 'Infiltrarse en el clan omaticaya para sacarles info ¿ Que hace Jake Sully con la mision?'",
    answers: [
      "Cumple la mision como una persona normal",
      "La empieza a cumplir pero luego se da cuenta que esta ayudando al mal",
      "Se suicida al saber que la RDA queria matar a los Na'vi",
      "Se rebela y no hace nada",
    ],
    correct:
      "La empieza a cumplir pero luego se da cuenta que esta ayudando al mal",
  },
  {
    question:
      "¿Como se llama el clan Na'vi en el que ocurre la mayor parte de la pelicula?",
    answers: ["Keltural", "Omaticaya", "Los Ma'kretos", "Los tantas"],
    correct: "Omaticaya",
  },
  {
    question: "Cuando Jake Sully esta domando a su ikran ¿Que le dice Neytiri?",
    answers: ["Tsaheilu Jake,tsaheilu", "Mgima Kilvan", "Vo", "Ka"],
    correct: "Tsaheilu Jake,tsaheilu",
  },
  {
    question: "¿En que año James Cameron escribio Avatar?",
    answers: ["2000", "1995", "1994", "2002"],
    correct: "1995",
  },
  {
    question:
      "¿En que pais se va a dejar de exhibir la pelicula avatar por problemas del pais y el gobierno?",
    answers: ["Cuba", "Italia", "Irak", "China"],
    correct: "China",
  },
  {
    question: "¿Como se llama la cancion de los creditos de Avatar?",
    answers: ["I see you", "Avatar Motion", "Sing Rigth", "The monsters lifes"],
    correct: "I see you",
  },
  {
    question: "¿En que se baso el director para hacer la pelicula?",
    answers: [
      "En el futuro",
      "En dar enseñanza",
      "En un sueño",
      "En la realidad",
    ],
    correct: "En un sueño",
  },
  {
    question: "¿Que tipo de camara se utilizo para este film?",
    answers: ["Cannon", "Nikon", "Sony", "Camara 3D"],
    correct: "Camara 3D",
  },
  {
    question: "¿Cuantos años se tardaron en hacer la pelicula?",
    answers: ["12", "5", "3", "7"],
    correct: "5",
  },
  {
    question: "¿Que significa Kaltxí?",
    answers: ["Jesus", "Buenas Noches", "Hola", "Un gusto verte"],
    correct: "Hola",
  },
  {
    question: "¿Que significa la siguiente frase 'Kaltxí Ngaru Lu Fpon Srak'?",
    answers: [
      "Hola, ¿Como te va?",
      "Porque no te vas a la ******",
      "Buenas Noches",
      "Algun dia te vas a morir",
    ],
    correct: "Hola, ¿Como te va?",
  },
  {
    question: "¿Como se dice yo en Na'vi?",
    answers: ["Tsmúkan", "Nga", "Oe", "Vo"],
    correct: "Oe",
  },
  {
    question: "¿Como se dice yo en Na'vi?",
    answers: ["Tsmúkan", "Nga", "Oe", "Vo"],
    correct: "Oe",
  },
];

// https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/mysql/mysql-quiz.md

export default questions