import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainUser } from './main-user';

describe('MainUser', () => {
  let component: MainUser;
  let fixture: ComponentFixture<MainUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainUser],
    }).compileComponents();

    fixture = TestBed.createComponent(MainUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
