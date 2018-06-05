import { Component, OnInit } from '@angular/core';
import { HeroesServiceService } from '../heroes-service.service';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css'],
  providers: [ HeroesServiceService ]
})
export class MarvelHeroesComponent implements OnInit {

  heroes:string[];
  inputHero = null;
  btnDisable = false;
  adding = false;

  addHero() {
    this.heroes.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  }

  addMore() {
    this.adding = !this.adding;
  }

  constructor(private ajax: HeroesServiceService) {
    this.heroes = this.ajax.heroes;
  }

  ngOnInit() {
  }

}
