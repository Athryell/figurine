import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ElencoFigurineComponent } from './elenco-figurine/elenco-figurine.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { RegisterComponent } from './register/register.component';
import {CookieService} from 'ngx-cookie-service';


export class AppBootstrapModule {}
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ElencoFigurineComponent,
    CardDetailComponent,
    LoginComponent,
    ToastComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
