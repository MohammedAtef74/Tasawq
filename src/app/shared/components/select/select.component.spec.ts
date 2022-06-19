import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SelectComponent } from "./select.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SelectComponent", () => {

  let fixture: ComponentFixture<SelectComponent>;
  let component: SelectComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SelectComponent]
    });

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
