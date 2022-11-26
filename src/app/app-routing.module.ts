import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RecuperarComponent } from './seguridad/recuperar/recuperar.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { CambiocontraseniaComponent } from './page/cambiocontrasenia/cambiocontrasenia.component';
import { DocumentosComponent } from './page/documentos/documentos.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'cambiocontrasenia', component: CambiocontraseniaComponent },
  { path: 'documentos', component: DocumentosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 