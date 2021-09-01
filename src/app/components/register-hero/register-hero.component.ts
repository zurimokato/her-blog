import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/class/hero';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-hero',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.css']
})
export class RegisterHeroComponent implements OnInit {

  heroForm: FormGroup;

  hero:Hero={ id:0,name:"",image:"",desc:""  };
  id:number;
  name:string;
  image:string;
  desc:string;

  constructor(private heroSerivce:HeroService) { 
   
  }
  
  ngOnInit() {
    
  }

  registrarHeroe():void{

    if(this.id!=undefined && this.name!=undefined && this.image!=undefined && this.desc!=undefined){
      this.hero.id=this.id;
      this.hero.name=this.name;
      this.hero.image=this.image;
      this.hero.desc=this.desc;
      console.log(this.hero);
      this.heroSerivce.registraHeroe(this.hero);
    }else{
      console.log(this.hero);
      alert("Heroe no valido");
    }
    
    
    
    
  }

  

}
