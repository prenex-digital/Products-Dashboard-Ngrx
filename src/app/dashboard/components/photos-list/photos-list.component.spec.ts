import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosListComponent } from './photos-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosListComponent ],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
