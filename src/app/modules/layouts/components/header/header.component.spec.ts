import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MockComponent } from "ng-mocks";
import { SettingsComponent } from "src/app/modules/shared/components/settings/settings.component";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent, MockComponent(SettingsComponent)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Gallery'`, () => {
    expect(component.title).toEqual("Gallery");
  });

  it("should render title in h1 tag", () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Gallery");
  });
});
