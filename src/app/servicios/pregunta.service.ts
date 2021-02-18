import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  //incluyo acá el contador y sus métodos, aunque lo mas adecuado sería crear un servicio aparte que lo contenga
  contador = 0;
  contadorDeRespondidas = 0;

  private arrPreguntas: Pregunta[] = [
    {
      titulo: "pregunta 1",
      imagen: "assets/img/totoro.jpg",
      texto: "¿Cuántos Totoros aparecen en la película MI VECINO TOTORO?",
      respuesta1: "Dos",
      respuesta2: "Tres",
      respuesta3: "Cuatro",
      respuestaCorrecta:  "Tres",
      textoRespuesta: "Los Totoro (トトロ) son tres espíritus del bosque que habitan en el interior de un gigantesco árbol milenario. Ellos son: Gran Totoro (El de mayor tamaño, de color gris y el más conocido de los tres.), Totoro Mediano (el de color azul) y Pequeño Totoro (De color blanco, similar a un roedor).",
      
      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""

    },
    {
      titulo: "pregunta 2",
      imagen: "assets/img/ponyo.jpg",
      texto: "¿Cuál era el verdadero nombre de Ponyo?",
      respuesta1: "Brunilda",
      respuesta2: "Lisa",
      respuesta3: "Sosuke",
      respuestaCorrecta:  "Brunilda",
      textoRespuesta: "Fujimoto, un hechicero y científico que alguna vez fue humano, vive bajo la superficie marina junto a su hija, Brunilda, y sus numerosas hermanas. Un día, mientras Fujimoto y sus hijas se encuentran en una excursión en su submarino, Brunilda se escabulle de la vista de su padre y se aleja nadando sobre una medusa. Después de haber sido arrastrada por una red de pesca, Brunilda termina atrapada en un frasco de vidrio. El frasco llega a la orilla de un pequeño pueblo pesquero, donde es encontrada y rescatada por un niño de cinco años llamado Sōsuke. ",
      
      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""

    },
    {
      titulo: "pregunta 3",
      imagen: "assets/img/porco.jpg",
      texto: "¿Qué vehículo manejaba Porco?",
      respuesta1: "Un cohete",
      respuesta2: "Un barco",
      respuesta3: "Un avión",
      respuestaCorrecta:  "Un avión",
      textoRespuesta: "En la pelicula PORCO ROSSO, Porco piloteaba un avión de combate",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    },
    {
      titulo: "pregunta 4",
      imagen: "assets/img/chihiro1.jpg",
      texto: "¿A qué película pertenecen estos personajes?",
      respuesta1: "La princesa Mononoke",
      respuesta2: "El viaje de Chihiro",
      respuesta3: "La tumba de las luciérnagas",
      respuestaCorrecta:  "El viaje de Chihiro",
      textoRespuesta: "Estos personajes pertenecen a la película EL VIAJE DE CHIHIRO. Sus nombres son Chihiro-Sen, el Sin Cara y Boh",
      
      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    },
    {
      titulo: "pregunta 5",
      imagen: "assets/img/ponpoko1.jpg",
      texto: "¿Que animales estaban en guerra en la película POMPOKO?",
      respuesta1: "Las ratas",
      respuesta2: "Los gatos",
      respuesta3: "Los mapaches",
      respuestaCorrecta:  "Los mapaches",
      textoRespuesta: "Los animales en guerra son los mapaches. Según cuenta la tradición popular, los tanuki, una especie de mapache japonés, tienen la habilidad de transformarse en humanos o en otras criaturas con sólo desearlo. Cuando una familia de estos animales descubre que los hombres están acabando con el bosque donde viven para construir una nueva urbanización, se preparan para combatirlos haciendo uso de todo su poder y de sus habilidades en una guerra como nunca antes se ha visto. ",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    }
  ] 

  constructor() { 
    this.cargarDatosAPI();
  }

  getPreguntas(){
    return this.arrPreguntas;
  }

  upContador(){
    this.contador ++;
    console.log("Subio el contador, ahora vale: "+ this.getContador());
  }

  getContador(){
    return this.contador;
  }

  resetContadores(){
    this.contadorDeRespondidas = 0;
    this.contador = 0;
  }

  upContadorRespondidas(){
    this.contadorDeRespondidas ++;
  }

  getContadorRespondidas(){ 
    return this.contadorDeRespondidas;
  }

  aprobado(){
    return this.contador >= 4;
  }

  cargarDatosAPI(){
    //Cargar campos con datos de la API

    //Pregunta 1
    fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
      .then(response => response.json())
      .then(json => this.arrPreguntas[0].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
      .then(response => response.json())
      .then(json => this.arrPreguntas[0].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
      .then(response => response.json())
      .then(json => this.arrPreguntas[0].anio = String(json.release_date)  )

    //Pregunta 2
    fetch('https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786')
      .then(response => response.json())
      .then(json => this.arrPreguntas[1].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786')
      .then(response => response.json())
      .then(json => this.arrPreguntas[1].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786')
      .then(response => response.json())
      .then(json => this.arrPreguntas[1].anio = String(json.release_date)  )

    //Pregunta 3
    fetch('https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8')
      .then(response => response.json())
      .then(json => this.arrPreguntas[2].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8')
      .then(response => response.json())
      .then(json => this.arrPreguntas[2].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8')
      .then(response => response.json())
      .then(json => this.arrPreguntas[2].anio = String(json.release_date)  )

    //Pregunta 4

    fetch('https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c')
      .then(response => response.json())
      .then(json => this.arrPreguntas[3].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c')
      .then(response => response.json())
      .then(json => this.arrPreguntas[3].anio = String(json.release_date)  )

      //Pregunta 5
    fetch('https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].anio = String(json.release_date)  )
    

      
  }
}


export interface Pregunta {
  titulo: String;
  imagen: String;
  texto: String;
  respuesta1: String;
  respuesta2: String;
  respuesta3: String;
  respuestaCorrecta: String;
  textoRespuesta: String;
  nombrePeli: String;
  director: String;
   anio: String;
}