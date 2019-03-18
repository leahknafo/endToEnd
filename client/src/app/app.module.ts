import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { RecipeComponent } from './recipe/recipe.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ContactComponent } from './contact/contact.component';
const config: SocketIoConfig= { url: 'http://localhost:8888', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RecipeComponent,
    AddComponent,
    ListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
