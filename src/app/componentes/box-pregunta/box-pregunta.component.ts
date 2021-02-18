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
  mostrarPregunta: boolean = true;

  constructor(private preguntaServicio: PreguntaService, private preguntaServicioDificil: PreguntaLevel2Service, private preguntaServicioMasDificil: PreguntaLevel3Service) { }

  ngOnInit(): void {
    this.arrPreguntas = this.preguntaServicio.getPreguntas();
    this.arrPreguntasDificiles = this.preguntaServicioDificil.getPreguntas();
    this.arrPreguntasMasDificiles = this.preguntaServicioMasDificil.getPreguntas();
    
  }

  getMostrarPregunta(){
    return this.mostrarPregunta;
  }

  setMostrarPregunta(){
    if(this.mostrarPregunta){
      this.mostrarPregunta = false;
    }else {this.mostrarPregunta = true;}
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
    <div class="card text-white bg-success" data-aos="zoom-in" style="font-family: 'Bellota'" >
    <div class="card-header">
      <b class="text-white ">Respuesta Correcta!</b>
    </div>
    <div class="card-body">        
        <p class="texto-respuesta">
            ${textoRespuesta}
        </p>
    </div>
    </div>
    `;

    contenedorResultadoNeg.innerHTML =`
    <div class="card text-white bg-danger" data-aos="zoom-in" style="font-family: 'Bellota'" >
    <div class="card-header">
      <b class="text-white ">Respuesta Incorrecta</b>
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

      if(this.preguntaServicio.getContadorRespondidas() < 5){
        this.preguntaServicio.upContador();
        this.preguntaServicio.upContadorRespondidas();        
      } else {
        if(this.preguntaServicioDificil.getContadorRespondidas() < 5){
          this.preguntaServicioDificil.upContador();
          this.preguntaServicioDificil.upContadorRespondidas();
        } else {
          if(this.preguntaServicioMasDificil.getContadorRespondidas() < 5){
            this.preguntaServicioMasDificil.upContador();
            this.preguntaServicioMasDificil.upContadorRespondidas();
          }
        }
      }

      
    }else{
      contenedorPreguntas?.replaceWith(contenedorResultadoNeg);

      if(this.preguntaServicio.getContadorRespondidas() < 5){
        this.preguntaServicio.upContadorRespondidas();
      } else if (this.preguntaServicioDificil.getContadorRespondidas() < 5){
          this.preguntaServicioDificil.upContadorRespondidas();
      } else if (this.preguntaServicioMasDificil.getContadorRespondidas() < 5){
        this.preguntaServicioMasDificil.upContadorRespondidas();
    }
      
    }


    //Acciones sobre el DOM
    if(this.preguntaServicio.aprobado() && this.preguntaServicio.getContadorRespondidas() >= 5){
      document.getElementById("bloque-preguntas-faciles").style.display = 'none';

      
      if(this.preguntaServicioDificil.getContadorRespondidas() <= 0){
        location.hash = "#" + "inicio";
        this.showMessage("Excelente! Pasaste al segundo nivel!", "success");
        
      } 
       



      if(this.preguntaServicioDificil.aprobado() && this.preguntaServicioDificil.getContadorRespondidas() >= 5){
        document.getElementById("bloque-preguntas-dificiles").style.display = 'none';

        if(this.preguntaServicioMasDificil.getContadorRespondidas() <= 0){
          
          location.hash = "#" + "inicio";
          this.showMessage("Super! Pasaste al ultimo nivel", "success");
        }
           
  
      } else if(!this.preguntaServicioDificil.aprobado() && this.preguntaServicioDificil.getContadorRespondidas() >= 5){
          this.showMessage("Respondiste mal la mayoría de las preguntas, regresas al principio", "danger");
          this.preguntaServicioDificil.resetContadores();
          location.reload(); //Se actualiza la página, perdió el 2do nivel
          location.hash = "#" + "inicio";
          
      } 

      if(this.preguntaServicioMasDificil.aprobado() && this.preguntaServicioMasDificil.getContadorRespondidas() >= 5){
        document.getElementById("bloque-preguntas-mas-dificiles").style.display = 'none';
        this.showMessage("Respondiste bien la mayoría de las preguntas, sos un auténtico <b>Ghibli-fan!</b>", "warning");
   
  
      } else if(!this.preguntaServicioMasDificil.aprobado() && this.preguntaServicioMasDificil.getContadorRespondidas() >= 5){
          this.showMessage("Respondiste mal la mayoría de las preguntas, regresas al principio", "danger");
          this.preguntaServicioMasDificil.resetContadores();
          location.reload(); //Se actualiza la página, perdió el 5er nivel
          location.hash = "#" + "inicio";
          
      } 


    } else if(!this.preguntaServicio.aprobado() && this.preguntaServicio.getContadorRespondidas() >= 5){
        this.showMessage("Respondiste mal la mayoría de las preguntas, regresas al principio", "danger");
        this.preguntaServicio.resetContadores();
        location.reload(); //Se actualiza la página
        location.hash = "#" + "inicio";
    }
   

    
  }


  showMessage(message, cssClass) {
    
    var imagen;

    if(cssClass == 'warning'){
      imagen = 'assets/img/arbol-alert.svg';
    }else if (cssClass == 'danger'){
      imagen = 'assets/img/kodama-alert.svg';
    }else if (cssClass == 'success'){
      imagen = 'assets/img/totoro-alert.svg';
    }



    document.getElementById("bloque-mensajes").innerHTML = `

        <div data-aos="zoom-in" >
          <div class="card bg-${cssClass} p-4 text-center">

            <div class="card-body text-uppercase">
                <div class="h2">
                    ${message}
                </div>

                <div class="card border border-0 bg-${cssClass}" >  
                  <div class="card-body">
                  <img class="img-fluid" src=" ${imagen}" alt=""> 
                  </div>
                                       
                </div>


            </div>

          </div>
        </div>
      
    `;

    document.getElementById("bloque-mensajes").style.display= ("block");

    

    // Remove the Message after 5 seconds
      setTimeout(function () {
        document.getElementById("bloque-mensajes").style.display= ("none");
      }, 5000);
  }

 

}
