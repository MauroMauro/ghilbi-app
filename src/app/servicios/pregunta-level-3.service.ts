import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntaLevel3Service {

  //incluyo acá el contador y sus métodos, aunque lo mas adecuado sería crear un servicio aparte que lo contenga
  contador = 0;
  contadorDeRespondidas = 0;

  private arrPreguntas: PreguntaMasDificil[] = [
    {
      titulo: "pregunta 1",
      imagen: "assets/img/arriety2.jpg",
      texto: "La historia de Arriety esta basada en un libro. ¿Cómo se llama ese libro?",
      respuesta1: "Los diminutos",
      respuesta2: "Los Incursores",
      respuesta3: "Las aventuras de Arriety",
      respuestaCorrecta:  "Los Incursores",
      textoRespuesta: "La historia está basada en la novela fantástica LOS INCURSORES , de la escritora británica Mary Norton.",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""

    },
    {
      titulo: "pregunta 2",
      imagen: "assets/img/luciernagas.jpg",
      texto: "¿Cuál de estas películas se estrenó antes?",
      respuesta1: "Nausicäa del Valle del Viento",
      respuesta2: "El castillo en el cielo",
      respuesta3: "La tumba de las luciérnagas",
      respuestaCorrecta:  "El castillo en el cielo",
      textoRespuesta: "EL CASTILLO EN EL CIELO se estrenó en 1986",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""

    },
    {
      titulo: "pregunta 3",
      imagen: "assets/img/viento.jpg",
      texto: "¿Cuál de estas películas se estrenó después?",
      respuesta1: "Se levanta el viento",
      respuesta2: "La colina de las amapolas",
      respuesta3: "El cuento de la princesa Kaguya",
      respuestaCorrecta:  "El cuento de la princesa Kaguya",
      textoRespuesta: "La película de la princesa Kaguya se estrenó en 2013",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""

    },
    {
      titulo: "pregunta 4",
      imagen: "assets/img/gatos.jpg",
      texto: "¿A qué película pertenecen estos personajes?",
      respuesta1: "Cuentos de Terramar",
      respuesta2: "Kiki: Entregas a domicilio",
      respuesta3: "Haru en el reino de los gatos o El regreso del gato",
      respuestaCorrecta:  "Haru en el reino de los gatos o El regreso del gato",
      textoRespuesta: "Los personajes pertenecen a la película Haru en el reino de los gatos.",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""

    },
    {
      titulo: "pregunta 5",
      imagen: "assets/img/kaguya.jpeg",
      texto: "¿A qué película pertenecen estos personajes?",
      respuesta1: "Se levanta el viento",
      respuesta2: "La colina de las amapolas",
      respuesta3: "El cuento de la princesa Kaguya",
      respuestaCorrecta:  "El cuento de la princesa Kaguya",
      textoRespuesta: "La película de la princesa Kaguya se estrenó en 2013",

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
    console.log("Subio el contador de mas dificiles, ahora vale: "+ this.getContador());
  }

  getContador(){
    return this.contador;
  }

  resetContadores(){
    this.contadorDeRespondidas = 0;
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
  fetch('https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6')
    .then(response => response.json())
    .then(json => this.arrPreguntas[0].nombrePeli = String(json.title)  )

  fetch('https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6')
    .then(response => response.json())
    .then(json => this.arrPreguntas[0].director = String(json.director)  )

  fetch('https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6')
    .then(response => response.json())
    .then(json => this.arrPreguntas[0].anio = String(json.release_date)  )

  //Pregunta 2

  fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
    .then(response => response.json())
    .then(json => this.arrPreguntas[1].director = String(json.director)  )

  fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
    .then(response => response.json())
    .then(json => this.arrPreguntas[1].anio = String(json.release_date)  )

  //Pregunta 3

  fetch('https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4')
    .then(response => response.json())
    .then(json => this.arrPreguntas[2].director = String(json.director)  )

  fetch('https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4')
    .then(response => response.json())
    .then(json => this.arrPreguntas[2].anio = String(json.release_date)  )

  //Pregunta 4

  fetch('https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81')
    .then(response => response.json())
    .then(json => this.arrPreguntas[3].director = String(json.director)  )

  fetch('https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81')
    .then(response => response.json())
    .then(json => this.arrPreguntas[3].anio = String(json.release_date)  )

    //Pregunta 5

  fetch('https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4')
    .then(response => response.json())
    .then(json => this.arrPreguntas[4].director = String(json.director)  )

  fetch('https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4')
    .then(response => response.json())
    .then(json => this.arrPreguntas[4].anio = String(json.release_date)  )
  
}
}



export interface PreguntaMasDificil {
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