import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';
import { ProductsModule } from '../products.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../products.interface';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductsService>;
  productServiceSpy = jasmine.createSpyObj('ProductsService', ['getProducts', 'deleteProduct']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
    })
    .compileComponents()

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

});
