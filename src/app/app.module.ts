import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { BoxPreguntaComponent } from './componentes/box-pregunta/box-pregunta.component';

//Servicios
import { PreguntaService } from './servicios/pregunta.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BoxPreguntaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PreguntaService],
  bootstrap: [AppComponent]
})
export class AppModule { }


