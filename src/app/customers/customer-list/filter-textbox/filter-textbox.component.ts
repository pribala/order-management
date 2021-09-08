import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.scss']
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string = '';
  @Input() get filter() {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter);
  }
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
