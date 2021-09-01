import { Component, OnInit, OnChanges } from '@angular/core';
import {Hero} from '../../class/hero';
import {HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnChanges {
 
  heroes:Hero[];

  constructor(private heroService:HeroService) { }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
    this.getAlgo();
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Hubo un cambio");
  }

  getAlgo():void{
    this.heroService.getData().subscribe(object=>console.log(object));
  }

 

}
