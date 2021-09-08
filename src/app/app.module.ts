import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NopageFoundComponent } from './nopage_found/nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
