import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MockComponent } from "ng-mocks";
import { AlbumComponent } from "src/app/components/album/album.component";
import { BodyComponent } from "./body.component";

describe("BodyComponent", () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BodyComponent, MockComponent(AlbumComponent)],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
