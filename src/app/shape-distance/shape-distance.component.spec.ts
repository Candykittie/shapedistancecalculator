import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeDistanceComponent } from './shape-distance.component';

describe('ShapeDistanceComponent', () => {
  let component: ShapeDistanceComponent;
  let fixture: ComponentFixture<ShapeDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShapeDistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShapeDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
