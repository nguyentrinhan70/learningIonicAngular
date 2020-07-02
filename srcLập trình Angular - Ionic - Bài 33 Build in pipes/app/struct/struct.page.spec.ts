import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StructPage } from './struct.page';

describe('StructPage', () => {
  let component: StructPage;
  let fixture: ComponentFixture<StructPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StructPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
