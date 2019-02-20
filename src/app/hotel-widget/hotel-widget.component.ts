import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {data, IWidget, IWeather, IVoluptatem} from '../common/mock/data';

@Component({
  selector: 'app-hotel-widget',
  templateUrl: './hotel-widget.component.html',
  styleUrls: ['./hotel-widget.component.css']
})
export class HotelWidgetComponent implements OnInit {

  @Output() hotelSelect = new EventEmitter<{ weather: IWeather, voluptatem: IVoluptatem }>();
  widget: IWidget[];
  filtered: IWidget[];
  selectedType = 'hero';
  widgetImage: string;

  constructor() { }

  ngOnInit() {
    this.widget = data;
    this.filter();
    this.hotelSelect.emit(this.setSelectedData(0));
  }

  filter() {
    this.filtered = this.widget.filter((dataItem: IWidget) => {
      if (dataItem.type === this.selectedType) {
        console.log('filter(): dataItem.weather.title = ' + dataItem.weather.title);
        return dataItem;
      }
    });

    this.widgetImage = this.filtered[0].hotel.img;
  }

  setSelectedData(index: number) {
    const weather = this.filtered[index].weather;
    const voluptatem = this.filtered[index].voluptatem;
    console.log('setSelectedData(): index=' + index + ', weather.title = ' + weather.title + ', voluptatem = ' + voluptatem);
    return {
      weather, voluptatem
    };
  }

  onClick(selectedHotelId: number) {
    this.hotelSelect.emit(this.setSelectedData(selectedHotelId));
    this.widgetImage = this.filtered[selectedHotelId].hotel.img;
    console.log('onClick(): selectedHotelId=' + selectedHotelId);
  }

  onTypeSelect(type: string) {
    this.selectedType = type.toLowerCase();
    this.filter();
    this.hotelSelect.emit(this.setSelectedData(0));
    console.log('onTypeSelect(): type=' + type);
  }
}
