import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductsService>;
  productServiceSpy = jasmine.createSpyObj('ProductService', ['getProductById', 'updateProduct'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ UpdateComponent ],
      providers: [
        {provide: ActivatedRoute, 
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 2
              }
            }
          }
        },
        {provide: 'ProductService', useValue: productServiceSpy}
      ]

    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(UpdateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
