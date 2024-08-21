import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

fdescribe('UpdateComponent', () => {
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

  it('it should get productId', () => {
    expect(component.productId).toBe(2) 
  })

  it('should update the form based on productId', () => {
    const getProductById = {
      "id": 2,
      "name": "Watermelon",
      "description": "Cooling and refreshing watermelons.",
      "price": 10
    };

    spyOnProperty(component, 'updateProductForm').and.callThrough()
    productServiceSpy.getProductById.and.returnValue(of(getProductById)) 

    component.updateForm();

    setTimeout(function() {
      // Your test logic after waiting 5 seconds
      // expect(true).toBe(true);
      expect(productServiceSpy.getProductById.calls.count()).toBe(1);
      expect(component.updateProductForm.value).toEqual(getProductById)

  }, 5000);


  })


});
