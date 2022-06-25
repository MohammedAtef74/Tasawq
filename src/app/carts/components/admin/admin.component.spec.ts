import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AdminComponent", () => {

  let fixture: ComponentFixture<AdminComponent>;
  let component: AdminComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AdminComponent]
    });

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
