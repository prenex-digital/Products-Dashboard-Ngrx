import { inject, TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardService', () => {
  let service: DashboardService;
  let postsLength = 101;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(DashboardService);
  });

  it('Call getAllPosts to return Observable of posts',
    inject([
      DashboardService
    ],
      (service: DashboardService) => {
        let allPosts = service.getAllPosts();
        allPosts.subscribe(posts => {
          expect(posts.length).toEqual(postsLength);
        });
      })
  );

  it('Call getAllPhotos to return Observable of photos',
    inject([
      DashboardService
    ],
      (service: DashboardService) => {
        let allPhotos = service.getAllPhotos();
        allPhotos.subscribe(photos => {
          expect(photos.length).toEqual(postsLength);
        });
      })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
