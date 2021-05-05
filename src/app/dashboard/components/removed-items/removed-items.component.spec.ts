import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemovedItemsComponent } from './removed-items.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RemovedItemsComponent', () => {
  let component: RemovedItemsComponent;
  let fixture: ComponentFixture<RemovedItemsComponent>;

  beforeEach(async () => {
    const initialState: any = {
      posts: [],
      photos: []
    }

    await TestBed.configureTestingModule({
      declarations: [RemovedItemsComponent],
      providers: [
        provideMockStore({ initialState })
      ],
      schemas: [NO_ERRORS_SCHEMA]
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
