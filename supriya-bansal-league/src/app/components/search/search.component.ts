import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() data: any[];
  @Input() placeholder: string;
  @Input() filterProp: string[];
  @Output() filteredData = new EventEmitter();
  @Output() searchText = new EventEmitter();

  form = this.fb.group({
    searchText: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  filter() {
    const searchOutput = [];
    this.filterProp.forEach((filterProperty) => {
      searchOutput.push(
        ...this.data.filter(
          (dataItems) =>
            dataItems[filterProperty].indexOf(
              this.form.get('searchText').value
            ) !== -1
        )
      );
    });

    this.filteredData.emit(searchOutput);
    this.searchText.emit(this.form.get('searchText').value);
  }
}
