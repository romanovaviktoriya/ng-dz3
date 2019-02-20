import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {data, Widget, Weather, Voluptatem} from '../common/mock/data';

@Component({
  selector: 'app-hotel-widget',
  templateUrl: './hotel-widget.component.html',
  styleUrls: ['./hotel-widget.component.css']
})
export class HotelWidgetComponent implements OnInit {

  @Output() poiSelect = new EventEmitter<{ weather: Weather, voluptatem: Voluptatem }>();
  widget: Widget[];
  filtered: Widget[];
  selectedType = 'hero';
  widgetImage: string;

  constructor() { }

  ngOnInit() {
    this.widget = data;
    this.filter();
    this.poiSelect.emit(this.setSelectedData(0));
  }

  filter() {
    this.filtered = this.widget.filter((dataItem: Widget) => {
      if (dataItem.type === this.selectedType) {
        return dataItem;
      }
    });

    this.widgetImage = this.filtered[0].hotel.img;
  }

  setSelectedData(index: number) {
    const weather = this.filtered[index].weather;
    const voluptatem = this.filtered[index].voluptatem;

    return {
      weather, voluptatem
    };
  }

  onClick(selectedPoiId: number) {
    this.poiSelect.emit(this.setSelectedData(selectedPoiId));
    this.widgetImage = this.filtered[selectedPoiId].hotel.img;
  }

  onTypeSelect(type: string) {
    this.selectedType = type.toLowerCase();
    this.filter();
    this.poiSelect.emit(this.setSelectedData(0));
  }
}
