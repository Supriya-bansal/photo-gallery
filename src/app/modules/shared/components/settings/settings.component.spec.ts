import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MockModule } from "ng-mocks";
import { SettingsService } from "src/app/services/settings.service";
import { SettingsComponent } from "./settings.component";

describe("SettingsComponent", () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let service: SettingsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [MockModule(MatMenuModule), MockModule(MatIconModule)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    service = TestBed.inject(SettingsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should toggle service parameter - mode : light/dark of SettingsService", () => {
    component.toggleMode("light");
    expect(service.mode).toBe("light");

    component.toggleMode("dark");
    expect(service.mode).toBe("dark");
  });

  it("should toggle service parameter - align : horizontal/vertical of SettingsService", () => {
    component.toggleAlignment("horizontal");
    expect(service.align).toBe("horizontal");

    component.toggleAlignment("vertical");
    expect(service.align).toBe("vertical");
  });
});
