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

  it('should correctly render the passed @Input value for products array', () => {
    component.products = [
      {
        isFav: true,
        name: "dolor sit qui",
        oldPrice: "$325",
        picture: "http://placehold.it/370x250",
        price: "$227",
        rating: 5,
        savings: "$175",
        size: "M - Medium",
        url: "product/5a3964f2b3701658152a1c81",
        _id: "5a3964f2b3701658152a1c81"
      }
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('dolor sit qui');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
