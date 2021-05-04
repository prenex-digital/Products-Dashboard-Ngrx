import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridViewComponent } from './grid-view.component';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

describe('GridViewComponent', () => {
  let component: GridViewComponent;
  let fixture: ComponentFixture<GridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GridViewComponent,
        OrderByPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
