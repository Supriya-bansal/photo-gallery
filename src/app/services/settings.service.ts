import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  mode = "light";
  align = "horizontal";
  constructor() {}
}
