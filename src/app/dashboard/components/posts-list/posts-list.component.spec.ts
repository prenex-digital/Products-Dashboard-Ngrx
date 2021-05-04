import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsListComponent } from './posts-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
