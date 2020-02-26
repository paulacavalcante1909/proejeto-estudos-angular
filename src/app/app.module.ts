import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostarComponent } from './inicial/postar/postar.component';
import { ListaPostsComponent } from './inicial/lista-posts/lista-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicialComponent,
    NavBarComponent,
    PostarComponent,
    ListaPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
