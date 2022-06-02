import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosVendaComponent } from './pontos-venda.component';

describe('PontosVendaComponent', () => {
  let component: PontosVendaComponent;
  let fixture: ComponentFixture<PontosVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontosVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
