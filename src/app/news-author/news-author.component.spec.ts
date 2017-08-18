import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAuthorComponent } from './news-author.component';

describe('NewsAuthorComponent', () => {
  let component: NewsAuthorComponent;
  let fixture: ComponentFixture<NewsAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
