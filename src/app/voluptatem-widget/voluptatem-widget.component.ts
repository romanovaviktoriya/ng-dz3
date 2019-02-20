import { Component, Input, OnInit } from '@angular/core';
import { Voluptatem } from './../common/mock/data';

@Component({
  selector: 'app-voluptatem-widget',
  templateUrl: './voluptatem-widget.component.html',
  styleUrls: ['./voluptatem-widget.component.css']
})
export class VoluptatemWidgetComponent implements OnInit {

  @Input() Voluptatem: Voluptatem;

  constructor() { }

  ngOnInit() {
  }

}
