import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAPage } from './perfil-a.page';

describe('PerfilAPage', () => {
  let component: PerfilAPage;
  let fixture: ComponentFixture<PerfilAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
