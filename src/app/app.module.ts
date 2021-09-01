import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule,MatCheckboxModule, MatToolbarModule,
        MatMenuModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

import { AppComponent } from './components/app/app.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { RegisterHeroComponent } from './components/register-hero/register-hero.component';
import { FavHerosComponent } from './components/fav-heros/fav-heros.component';
import { CsvComponent } from './components/csv/csv.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ToolbarComponent,
    LateralMenuComponent,
    HeroDetailComponent,
    RegisterHeroComponent,
    FavHerosComponent,
    CsvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
