import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MockModule } from "ng-mocks";
import { ValidationMessageComponent } from "./validation-message.component";

describe("ValidationMessageComponent", () => {
  let component: ValidationMessageComponent;
  let fixture: ComponentFixture<ValidationMessageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ValidationMessageComponent],
        imports: [MockModule(MatFormFieldModule)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should not have hint element with message propertyCheck is not provided.", () => {
    component.data = ["D1", "D2"];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".mi-hint")).toBeFalsy();
  });

  it("should not have hint element with message if data is non-empty.", () => {
    component.data = ["D1", "D2"];
    component.propertyCheck = "length";
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".mi-hint")).toBe(null);
  });

  it("should create hint element with message if data is empty.", () => {
    component.data = [];
    component.message = "Data unavailable";
    component.propertyCheck = "length";

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".mi-hint").textContent).toBe(
      component.message
    );
  });
});
