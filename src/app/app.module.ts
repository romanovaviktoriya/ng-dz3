import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelWidgetComponent } from './hotel-widget/hotel-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { VoluptatemWidgetComponent } from './voluptatem-widget/voluptatem-widget.component';
import { PhonePipe } from './common/pipe/phone.pipe';
import { UniquePipe } from './common/pipe/unique.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HotelWidgetComponent,
        WeatherWidgetComponent,
        VoluptatemWidgetComponent,
        PhonePipe,
        UniquePipe
    ],
    imports: [
        BrowserModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
