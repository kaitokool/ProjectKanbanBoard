import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKanbanComponent } from './main-kanban.component';

describe('MainKanbanComponent', () => {
  let component: MainKanbanComponent;
  let fixture: ComponentFixture<MainKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
