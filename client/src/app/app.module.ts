import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { RecipeComponent } from './recipe/recipe.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    AboutComponent,
    RecipeComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
