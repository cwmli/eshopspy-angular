import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameusDetailComponent } from './gameus-detail.component';

describe('GameusDetailComponent', () => {
  let component: GameusDetailComponent;
  let fixture: ComponentFixture<GameusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
