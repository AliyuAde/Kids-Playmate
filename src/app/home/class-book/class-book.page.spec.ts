import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassBookPage } from './class-book.page';

describe('ClassBookPage', () => {
  let component: ClassBookPage;
  let fixture: ComponentFixture<ClassBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
