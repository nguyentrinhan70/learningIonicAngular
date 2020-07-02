import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnPipePage } from './learn-pipe.page';

describe('LearnPipePage', () => {
  let component: LearnPipePage;
  let fixture: ComponentFixture<LearnPipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnPipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
