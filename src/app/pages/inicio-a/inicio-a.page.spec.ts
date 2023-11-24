import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAPage } from './inicio-a.page';

describe('InicioAPage', () => {
  let component: InicioAPage;
  let fixture: ComponentFixture<InicioAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
