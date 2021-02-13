import { Component, OnInit } from '@angular/core';

//servicio
import {PreguntaService, Pregunta} from 'src/app/servicios/pregunta.service'
import {PreguntaLevel2Service, PreguntaDificil} from 'src/app/servicios/pregunta-level-2.service'
import {PreguntaLevel3Service, PreguntaMasDificil} from 'src/app/servicios/pregunta-level-3.service';

@Component({
  selector: 'app-box-pregunta',
  templateUrl: './box-pregunta.component.html',
  styleUrls: ['./box-pregunta.component.css']
})
export class BoxPreguntaComponent implements OnInit {

  arrPreguntas: Pregunta[] = [];
  arrPreguntasDificiles: PreguntaDificil[] = [];
  arrPreguntasMasDificiles: PreguntaMasDificil[] = [];

  constructor(private preguntaServicio: PreguntaService, private preguntaServicioDificil: PreguntaLevel2Service, private preguntaServicioMasDificil: PreguntaLevel3Service) { }

  ngOnInit(): void {
    this.arrPreguntas = this.preguntaServicio.getPreguntas();
    this.arrPreguntasDificiles = this.preguntaServicioDificil.getPreguntas();
    this.arrPreguntasMasDificiles = this.preguntaServicioMasDificil.getPreguntas();
    
  }

  getPreguntaServicio(){ //este método se usa en la plantilla en el ngIf
    return this.preguntaServicio;
  }

  getPreguntaServicioDificil(){ //este método se usa en la plantilla en el ngIf
    return this.preguntaServicioDificil;
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

    // acciones sobre los 'contadores'
    if(respuestaElegida == respuestaCorrecta){     
      contenedorPreguntas?.replaceWith(contenedorResultadoPos);

      if(this.preguntaServicio.getContadorRespondidas() < 3){
        this.preguntaServicio.upContador();
        this.preguntaServicio.upContadorRespondidas();        
      } else {
        if(this.preguntaServicioDificil.getContadorRespondidas() < 3){
          this.preguntaServicioDificil.upContador();
          this.preguntaServicioDificil.upContadorRespondidas();
        } else {
          if(this.preguntaServicioMasDificil.getContadorRespondidas() < 3){
            this.preguntaServicioMasDificil.upContador();
            this.preguntaServicioMasDificil.upContadorRespondidas();
          }
        }
      }

      
    }else{
      contenedorPreguntas?.replaceWith(contenedorResultadoNeg);

      if(this.preguntaServicio.getContadorRespondidas() < 3){
        this.preguntaServicio.upContadorRespondidas();
      } else if (this.preguntaServicioDificil.getContadorRespondidas() < 3){
          this.preguntaServicioDificil.upContadorRespondidas();
      } else if (this.preguntaServicioMasDificil.getContadorRespondidas() < 3){
        this.preguntaServicioMasDificil.upContadorRespondidas();
    }
      
    }


    //Acciones sobre el DOM
    if(this.preguntaServicio.aprobado() && this.preguntaServicio.getContadorRespondidas() >= 3){
      document.getElementById("bloque-preguntas-faciles").style.display = 'none';

      
      if(this.preguntaServicioDificil.getContadorRespondidas() <= 0){
        //Solo se mostrará este alert si todavia no se "entró" al nivel de difíciles
        
        location.hash = "#" + "bloque-preguntas-dificiles";
        this.showMessage("Pasaste al segundo nivel!", "success");
      } 
       



      if(this.preguntaServicioDificil.aprobado() && this.preguntaServicioDificil.getContadorRespondidas() >= 3){
        document.getElementById("bloque-preguntas-dificiles").style.display = 'none';

        if(this.preguntaServicioMasDificil.getContadorRespondidas() <= 0){
          alert("Pasaste al nivel 3 pués respondiste correctamente: " + this.preguntaServicioDificil.getContador()); 
          
          location.hash = "#" + "bloque-preguntas-mas-dificiles";
          this.showMessage("Pasaste al ultimo nivel", "success");
        }
           
  
      } else if(!this.preguntaServicioDificil.aprobado() && this.preguntaServicioDificil.getContadorRespondidas() >= 3){
          alert("Finalizo la trivia, NO pasaste de nivel pués respondiste correctamente: " + this.preguntaServicioDificil.getContador() + "\nIntentalo de nuevo!");
          this.showMessage("Respondiste mal la mayoría de las preguntas, regresas al principio", "danger");
          this.preguntaServicioDificil.resetContadores();
          location.reload(); //Se actualiza la página, perdió el 2do nivel
          location.hash = "#" + "bloque-preguntas";
          
      } 

      if(this.preguntaServicioMasDificil.aprobado() && this.preguntaServicioMasDificil.getContadorRespondidas() >= 3){
        document.getElementById("bloque-preguntas-mas-dificiles").style.display = 'none';
        alert("Ganaste pués respondiste correctamente: " + this.preguntaServicioMasDificil.getContador()); 
        this.showMessage("Respondiste bien la mayoría de las preguntas, GANASTE!", "success");
   
  
      } else if(!this.preguntaServicioMasDificil.aprobado() && this.preguntaServicioMasDificil.getContadorRespondidas() >= 3){
          this.showMessage("Respondiste mal la mayoría de las preguntas, regresas al principio", "danger");
          alert("Finalizo la trivia, NO pasaste de nivel pués respondiste correctamente: " + this.preguntaServicioMasDificil.getContador() + "\nIntentalo de nuevo!");
          this.preguntaServicioMasDificil.resetContadores();
          location.reload(); //Se actualiza la página, perdió el 3er nivel
          location.hash = "#" + "bloque-preguntas-dificiles";
          
      } 


    } else if(!this.preguntaServicio.aprobado() && this.preguntaServicio.getContadorRespondidas() >= 3){
        this.showMessage("Respondiste mal la mayoría de las preguntas, regresas al principio", "danger");
        this.preguntaServicio.resetContadores();
        location.reload(); //Se actualiza la página
        location.hash = "#" + "bloque-preguntas";
    }
   

    
  }


  showMessage(message, cssClass) {
    

    document.getElementById("bloque-mensajes").innerHTML = `

        <div >
          <div class="card bg-${cssClass} text-white p-4 text-center">

            <div class="card-body">
                <div class="display-4">
                    ${message}
                </div>
            </div>

          </div>
        </div>
      
    `;

    document.getElementById("bloque-mensajes").style.display= ("block");

    

    // Remove the Message after 3 seconds
      setTimeout(function () {
        document.getElementById("bloque-mensajes").style.display= ("none");
      }, 3000);
  }

 

}
