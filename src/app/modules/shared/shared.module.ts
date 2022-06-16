import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { SettingsComponent } from "./components/settings/settings.component";

const modules = [FormsModule, ReactiveFormsModule, CommonModule];

@NgModule({
  declarations: [SettingsComponent],
  imports: [...modules, MaterialModule],
  exports: [...modules, MaterialModule, SettingsComponent],
})
export class SharedModule {}
