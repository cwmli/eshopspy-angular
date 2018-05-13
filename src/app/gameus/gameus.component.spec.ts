import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameusComponent } from './gameus.component';

describe('GameusComponent', () => {
  let component: GameusComponent;
  let fixture: ComponentFixture<GameusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
