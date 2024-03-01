import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollFormComponent } from './poll-form.component';

describe('PollFormComponent', () => {
  let component: PollFormComponent;
  let fixture: ComponentFixture<PollFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PollFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
