import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MockModule } from "ng-mocks";
import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchComponent],
        imports: [ReactiveFormsModule, MockModule(MatFormFieldModule)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should correctly render the passed @Input placeholder value", () => {
    component.placeholder = "Search";
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".search-box input").placeholder).toBe(
      "Search"
    );
  });

  it("should check the call to @Output Emitter : filteredData", () => {
    component.data = [
      { id: 1, userId: 1, title: "text1" },
      { id: 2, userId: 1, title: "text2" },
      { id: 2, userId: 1, title: "Album3" },
    ];

    component.filterProp = ["title"];
    component.form.get("searchText").patchValue("text");

    spyOn(component.filteredData, "emit");

    const nativeElement = fixture.nativeElement;

    const input = nativeElement.querySelector(".search-box input");
    input.dispatchEvent(new Event("input"));

    fixture.detectChanges();
    expect(component.filteredData.emit).toHaveBeenCalled();
  });
});
