import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPersonPage } from './list-person.page';

describe('ListPersonPage', () => {
  let component: ListPersonPage;
  let fixture: ComponentFixture<ListPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
