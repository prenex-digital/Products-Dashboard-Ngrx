import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViewComponent } from './list-view.component';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListViewComponent,
        OrderByPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
