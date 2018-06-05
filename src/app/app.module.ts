import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MarvelHeroesComponent } from './marvel-heroes/marvel-heroes.component';
import { DcComicsComponent } from './dc-comics/dc-comics.component';

import { RouterModule, Routes } from "@angular/router";

const routeLists : Routes = [
  { path:'', component: DcComicsComponent},
  { path:'marvels', component:MarvelHeroesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroesComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
