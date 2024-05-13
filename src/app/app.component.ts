import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { GamePriceComponent } from "./game-price/game-price.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, WeatherComponent, GamePriceComponent]
})
export class AppComponent {
  title = 'metric';
}
