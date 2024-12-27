import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemetSestanyolComponent } from './aemet-sestanyol.component';

describe('AemetSestanyolComponent', () => {
  let component: AemetSestanyolComponent;
  let fixture: ComponentFixture<AemetSestanyolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AemetSestanyolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AemetSestanyolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
