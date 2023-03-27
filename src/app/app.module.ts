import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { SubirRecetaComponent } from './pages/subir-receta/subir-receta.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MostrarRecetasComponent } from './pages/mostrar-recetas/mostrar-recetas.component';
import { MostrarUnaRecetaComponent } from './pages/mostrar-una-receta/mostrar-una-receta.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    SubirRecetaComponent,
    PerfilComponent,
    MostrarRecetasComponent,
    MostrarUnaRecetaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
