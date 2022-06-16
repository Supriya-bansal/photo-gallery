import { Component, OnInit, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(public service: SettingsService) {}

  ngOnInit(): void {}

  toggleMode(mode: string) {
    this.service.mode = mode;
  }

  toggleAlignment(align: string) {
    this.service.align = align;
  }
}
