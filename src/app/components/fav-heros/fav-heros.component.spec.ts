import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavHerosComponent } from './fav-heros.component';

describe('FavHerosComponent', () => {
  let component: FavHerosComponent;
  let fixture: ComponentFixture<FavHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
