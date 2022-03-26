import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IPhoto } from "src/app/interfaces/Photo";

@Component({
  selector: "app-photo-preview",
  templateUrl: "./photo-preview.component.html",
  styleUrls: ["./photo-preview.component.scss"],
})
export class PhotoPreviewComponent implements OnInit {
  @Input() photoObj: IPhoto;
  @Input() searchText: string;
  @ViewChild("photoModal", { static: true }) photoModal: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openImageinPopup() {
    if (this.photoObj) {
      this.dialog.open(this.photoModal);
    } else {
      return;
    }
  }
}
