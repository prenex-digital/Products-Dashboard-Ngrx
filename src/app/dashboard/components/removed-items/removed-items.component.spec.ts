import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemovedItemsComponent } from './removed-items.component';
import { StoreModule } from '@ngrx/store';

describe('RemovedItemsComponent', () => {
  let component: RemovedItemsComponent;
  let fixture: ComponentFixture<RemovedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedItemsComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
