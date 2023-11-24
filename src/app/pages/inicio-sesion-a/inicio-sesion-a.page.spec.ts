import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionAPage } from './inicio-sesion-a.page';

describe('InicioSesionAPage', () => {
  let component: InicioSesionAPage;
  let fixture: ComponentFixture<InicioSesionAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioSesionAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
