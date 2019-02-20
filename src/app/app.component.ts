import { Component, OnInit } from '@angular/core';
import { data, Voluptatem, Weather } from './common/mock/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public hotels = data;
    public selectedWeather: Weather;
    public selectedVoluptatem: Voluptatem;

    public ngOnInit(): void {

    }

    changeSelectItem(selectedHotel: { weather: Weather, voluptatem: Voluptatem }) {
        this.selectedWeather = selectedHotel.weather;
        this.selectedVoluptatem = selectedHotel.voluptatem;
    }
}
