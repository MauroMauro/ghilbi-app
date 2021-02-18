import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntaLevel2Service {


  //incluyo acá el contador y sus métodos, aunque lo mas adecuado sería crear un servicio aparte que lo contenga
  contador = 0;
  contadorDeRespondidas = 0;

  private arrPreguntas: PreguntaDificil[] = [
    {
      titulo: "pregunta 1",
      imagen: "assets/img/mononoke2.jpg",
      texto: "¿Cómo se llama la princesa Mononoke?",
      respuesta1: "San",
      respuesta2: "Sen",
      respuesta3: "Lady Eboshi",
      respuestaCorrecta:  "San",
      textoRespuesta: "La princesa Mononoke se llama San. Mononoke (物の怪（もののけ) no es un nombre, sino una descripción que puede ser traducida en este contexto como «espíritu vengador»; por lo que el título de la película literalmente podría traducirse como La princesa de los espíritus vengadores. ",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    },
    {
      titulo: "pregunta 2",
      imagen: "assets/img/castillo2.jpg",
      texto: "¿Quién movía el castillo vagabundo?",
      respuesta1: "El demonio Calcifer",
      respuesta2: "El mago Howl",
      respuesta3: "Se movía solo",
      respuestaCorrecta:  "El demonio Calcifer",
      textoRespuesta: "Quien movía el castillo y le otorgaba sus cualidades mágicas era Calcifer, un demonio-fuego esclavizado por el mago HOWL que vivía en la chimenea.",


      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    },
    {
      titulo: "pregunta 3",
      imagen: "assets/img/kiki.jpg",
      texto: "Kiki, la pequeña bruja vive sobre una tienda, ¿Qué vende esa tienda?",
      respuesta1: "Pan",
      respuesta2: "Sombreros",
      respuesta3: "Pócimas mágicas",
      respuestaCorrecta:  "Pan",
      textoRespuesta: "En su estancia en la ciudad marítima, Kiki vive sobre la panadería de Osono, una señora de la que Kiki se hace amiga.",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    },
    {
      titulo: "pregunta 4",
      imagen: "assets/img/laputa.jpg",
      texto: "¿Cómo se llama el castillo de la película EL CASTILLO EN EL CIELO?",
      respuesta1: "Howl",
      respuesta2: "Castillo Vagabundo",
      respuesta3: "Laputa",
      respuestaCorrecta:  "Laputa",
      textoRespuesta: "La película sigue las aventuras de Pazu y Sheeta, dos jóvenes que intentarán evitar que una antigua piedra mágica caiga en manos de un grupo de agentes militares, quienes intentarán usarla para llegar a una legendaria isla flotante llamada «Laputa».",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    },
    {
      titulo: "pregunta 5",
      imagen: "assets/img/kiki.jpg",
      texto: "Kiki, la pequeña bruja vive sobre una tienda, ¿Qué vende esa tienda?",
      respuesta1: "Pan",
      respuesta2: "Sombreros",
      respuesta3: "Pócimas mágicas",
      respuestaCorrecta:  "Pan",
      textoRespuesta: "En su estancia en la ciudad marítima, Kiki vive en un cuarto sobre la panadería de Osono, una señora de la que Kiki se hace amiga.",

      //Datos de la API
      nombrePeli: "",
      director: "",
      anio: ""
    }
  ] 

  constructor() { 
    this.cargarDatosAPI();
  }

  cargarDatosAPI(){
    //Cargar campos con datos de la API

    //Pregunta 1
    fetch('https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6')
      .then(response => response.json())
      .then(json => this.arrPreguntas[0].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6')
      .then(response => response.json())
      .then(json => this.arrPreguntas[0].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6')
      .then(response => response.json())
      .then(json => this.arrPreguntas[0].anio = String(json.release_date)  )

    //Pregunta 2
    fetch('https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa')
      .then(response => response.json())
      .then(json => this.arrPreguntas[1].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa')
      .then(response => response.json())
      .then(json => this.arrPreguntas[1].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa')
      .then(response => response.json())
      .then(json => this.arrPreguntas[1].anio = String(json.release_date)  )

    //Pregunta 3
    fetch('https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
      .then(response => response.json())
      .then(json => this.arrPreguntas[2].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
      .then(response => response.json())
      .then(json => this.arrPreguntas[2].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
      .then(response => response.json())
      .then(json => this.arrPreguntas[2].anio = String(json.release_date)  )

    //Pregunta 4
    fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
      .then(response => response.json())
      .then(json => this.arrPreguntas[3].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
      .then(response => response.json())
      .then(json => this.arrPreguntas[3].anio = String(json.release_date)  )

      //Pregunta 5
    fetch('https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].nombrePeli = String(json.title)  )

    fetch('https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].director = String(json.director)  )

    fetch('https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e')
      .then(response => response.json())
      .then(json => this.arrPreguntas[4].anio = String(json.release_date)  )
    
  }

  getPreguntas(){
    return this.arrPreguntas;
  }

  upContador(){
    this.contador ++;
    console.log("Subio el contador de dificiles, ahora vale: "+ this.getContador());
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
}


export interface PreguntaDificil {
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