import { TestBed } from '@angular/core/testing';

import { PreguntaLevel3Service } from './pregunta-level-3.service';

describe('PreguntaLevel3Service', () => {
  let service: PreguntaLevel3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntaLevel3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
