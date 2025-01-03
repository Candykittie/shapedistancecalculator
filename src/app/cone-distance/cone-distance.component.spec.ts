import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConeDistanceComponent } from './cone-distance.component';

describe('ConeDistanceComponent', () => {
  let component: ConeDistanceComponent;
  let fixture: ComponentFixture<ConeDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConeDistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConeDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
