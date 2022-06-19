import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProductComponent", () => {

  let fixture: ComponentFixture<ProductComponent>;
  let component: ProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProductComponent]
    });

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
