import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MockModule } from "ng-mocks";
import { ItalicizePipe } from "src/app/pipes/italicize.pipe";
import { PhotoPreviewComponent } from "./photo-preview.component";

describe("PhotoPreviewComponent", () => {
  let component: PhotoPreviewComponent;
  let fixture: ComponentFixture<PhotoPreviewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PhotoPreviewComponent, ItalicizePipe],
        imports: [
          BrowserAnimationsModule,
          MockModule(MatCardModule),
          MockModule(MatDialogModule),
          MockModule(MatIconModule),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call openImageinPopup on fullscreen icon click", fakeAsync(() => {
    spyOn(component, "openImageinPopup");
    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector(".mi-resize");
    input.dispatchEvent(new Event("click"));

    fixture.detectChanges();
    tick();
    expect(component.openImageinPopup).toHaveBeenCalled();
  }));

  it("should open photoModal on fullscreen icon click if photoObj is non-null", fakeAsync(() => {
    const matDialog = fixture.debugElement.injector.get(MatDialog);
    spyOn(matDialog, "open");

    component.photoObj = {
      albumId: 4,
      id: 151,
      thumbnailUrl: "https://via.placeholder.com/150/1d2ad4",
      title: "possimus dolor minima provident ipsam",
      url: "https://via.placeholder.com/600/1d2ad4",
    };

    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector(".mi-resize");
    input.dispatchEvent(new Event("click"));

    fixture.detectChanges();
    tick();

    expect(matDialog.open).toHaveBeenCalled();
  }));

  it("should not open photoModal on fullscreen icon click if photoObj is null", fakeAsync(() => {
    const matDialog = fixture.debugElement.injector.get(MatDialog);
    spyOn(matDialog, "open");

    component.photoObj = null;

    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector(".mi-resize");
    input.dispatchEvent(new Event("click"));

    fixture.detectChanges();
    tick();

    expect(matDialog.open).toHaveBeenCalledTimes(0);
  }));
});
