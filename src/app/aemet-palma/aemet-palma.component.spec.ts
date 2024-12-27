import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemetPalmaComponent } from './aemet-palma.component';

describe('AemetPalmaComponent', () => {
  let component: AemetPalmaComponent;
  let fixture: ComponentFixture<AemetPalmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AemetPalmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AemetPalmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
