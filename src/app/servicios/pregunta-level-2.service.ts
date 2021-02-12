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
      titulo: "pregunta dificil 1",
      imagen: "assets/img/totoro.jpg",
      texto: "Pregunta sobre totoro",
      respuesta1: "Respuesta a",
      respuesta2: "Respuesta b",
      respuesta3: "Respuesta c",
      respuestaCorrecta:  "Respuesta b",
      textoRespuesta: "Data sobre la pelicula, la pregunta y la respuesta"

    },
    {
      titulo: "pregunta dificil 2",
      imagen: "assets/img/ponyo.jpg",
      texto: "Pregunta sobre Ponyo",
      respuesta1: "Respuesta a",
      respuesta2: "Respuesta b",
      respuesta3: "Respuesta c",
      respuestaCorrecta:  "Respuesta a",
      textoRespuesta: "Data sobre la pelicula, la pregunta y la respuesta"

    },
    {
      titulo: "pregunta dificil 3",
      imagen: "assets/img/porco.jpg",
      texto: "Pregunta sobre Porco",
      respuesta1: "Respuesta a",
      respuesta2: "Respuesta b",
      respuesta3: "Respuesta c",
      respuestaCorrecta:  "Respuesta a",
      textoRespuesta: "Data sobre la pelicula, la pregunta y la respuesta"

    }
  ] 

  constructor() { 
    console.log("Servicio listo para usar");
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

  upContadorRespondidas(){
    this.contadorDeRespondidas ++;
  }

  getContadorRespondidas(){ 
    return this.contadorDeRespondidas;
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
}