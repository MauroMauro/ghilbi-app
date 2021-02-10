import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPreguntaComponent } from './box-pregunta.component';

describe('BoxPreguntaComponent', () => {
  let component: BoxPreguntaComponent;
  let fixture: ComponentFixture<BoxPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPreguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
