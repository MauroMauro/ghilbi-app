import { Component, OnInit } from '@angular/core';

//servicio
import {PreguntaService, Pregunta} from 'src/app/servicios/pregunta.service'

@Component({
  selector: 'app-box-pregunta',
  templateUrl: './box-pregunta.component.html',
  styleUrls: ['./box-pregunta.component.css']
})
export class BoxPreguntaComponent implements OnInit {

  arrPreguntas: Pregunta[] = [];

  constructor(private preguntaServicio: PreguntaService) { }

  ngOnInit(): void {
    this.arrPreguntas = this.preguntaServicio.getPreguntas();
    //console.log(this.arrPreguntas);
  }

  contestacion(respuestaElegida: String, respuestaCorrecta: String, textoRespuesta: String):void {

    const contenedorPreguntas = document.getElementById("contenedor-respuestas");
    const contenedorResultadoPos = document.createElement("div");
    const contenedorResultadoNeg = document.createElement("div");

    contenedorResultadoPos.innerHTML =`
    <div class="card border border-success">
    <div class="card-header">
      <b class="text-success">Respuesta Correcta!</b>
    </div>
    <div class="card-body">
        
        <p class="texto-respuesta">
            ${textoRespuesta}
        </p>
    </div>
    </div>
    `;

    contenedorResultadoNeg.innerHTML =`
    <div class="card border border-danger">
    <div class="card-header">
      <b class="text-danger">Respuesta Incorrecta</b>
    </div>
        <div class="card-body">
            <p class="texto-respuesta">
              ${textoRespuesta}
            </p>
        </div>
        </div>
        `;

    if(respuestaElegida == respuestaCorrecta){
      contenedorPreguntas?.replaceWith(contenedorResultadoPos);
      this.preguntaServicio.upContador();
      this.preguntaServicio.upContadorRespondidas();
    }else{
      contenedorPreguntas?.replaceWith(contenedorResultadoNeg);
      this.preguntaServicio.upContadorRespondidas();
    }

    if(this.preguntaServicio.getContadorRespondidas() >= 3){
      alert("Finalizo la trivia, respondiste correctamente: " + this.preguntaServicio.getContador());
    }
    
  }

}
