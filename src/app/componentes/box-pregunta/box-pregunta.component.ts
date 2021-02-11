import { Component, OnInit } from '@angular/core';

//servicio
import {PreguntaService, Pregunta} from 'src/app/servicios/pregunta.service'
import {PreguntaLevel2Service, PreguntaDificil} from 'src/app/servicios/pregunta-level-2.service'

@Component({
  selector: 'app-box-pregunta',
  templateUrl: './box-pregunta.component.html',
  styleUrls: ['./box-pregunta.component.css']
})
export class BoxPreguntaComponent implements OnInit {

  arrPreguntas: Pregunta[] = [];
  arrPreguntasDificiles: PreguntaDificil[] = [];

  constructor(private preguntaServicio: PreguntaService, private preguntaServicioDificil: PreguntaLevel2Service) { }

  ngOnInit(): void {
    this.arrPreguntas = this.preguntaServicio.getPreguntas();
    this.arrPreguntasDificiles = this.preguntaServicioDificil.getPreguntas();
    //console.log(this.arrPreguntas);
  }

  getPreguntaServicio(){
    return this.preguntaServicio;
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
      if(this.preguntaServicio.contador >= 2){
        alert("Finalizo la trivia, pasaste de nivel pués respondiste correctamente: " + this.preguntaServicio.getContador());
        document.getElementById("bloque-preguntas-faciles").style.display = 'none';
        
      } else {
        alert("Finalizo la trivia, NO pasaste de nivel pués respondiste correctamente: " + this.preguntaServicio.getContador() + "\nIntentalo de nuevo!");
        location.reload(); //Se actualiza la página
      }
    }
    
  }

}
