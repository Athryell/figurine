import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoFigurineComponent } from './elenco-figurine.component';

describe('ElencoFigurineComponent', () => {
  let component: ElencoFigurineComponent;
  let fixture: ComponentFixture<ElencoFigurineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoFigurineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoFigurineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
