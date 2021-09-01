import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { RegisterHeroComponent } from './components/register-hero/register-hero.component';
import {CsvComponent} from './components/csv/csv.component';



const routes:Routes=[
  {path:'', component:HeroComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path:'registrar', component: RegisterHeroComponent},
  {path:'csv',component:CsvComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
