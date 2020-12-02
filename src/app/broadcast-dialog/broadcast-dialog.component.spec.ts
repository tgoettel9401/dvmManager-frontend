import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastDialogComponent } from './broadcast-dialog.component';

describe('BroadcastDialogComponent', () => {
  let component: BroadcastDialogComponent;
  let fixture: ComponentFixture<BroadcastDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
