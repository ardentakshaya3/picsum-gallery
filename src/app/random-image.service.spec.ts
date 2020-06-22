import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RandomImage } from './random-image.service';

describe('RandomImage', () => {
  let service: RandomImage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        RandomImage,
      ]

});
    service = TestBed.inject(RandomImage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
