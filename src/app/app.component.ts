import { Component, OnInit } from '@angular/core';
import { data, IHotel, IVoluptatem, IWeather } from './common/mock/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public hotels = data;
    public selectedWeather: IWeather;
    public selectedVoluptatem: IVoluptatem;

    public ngOnInit(): void {

    }

    shareSelectedItem(selectedHotel: { weather: IWeather, voluptatem: IVoluptatem }) {
        this.selectedWeather = selectedHotel.weather;
        this.selectedVoluptatem = selectedHotel.voluptatem;
        console.log('changeSelectItem(): selectedWeather = ' + this.selectedWeather);
    }
}
