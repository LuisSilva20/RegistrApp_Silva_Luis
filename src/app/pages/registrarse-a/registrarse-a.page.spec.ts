import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarseAPage } from './registrarse-a.page';

describe('RegistrarseAPage', () => {
  let component: RegistrarseAPage;
  let fixture: ComponentFixture<RegistrarseAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarseAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
