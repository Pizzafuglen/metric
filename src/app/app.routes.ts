import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
   {
    path: 'weather-component',
    component: WeatherComponent},
   {
    path: '',
    component: CvComponent}

];
