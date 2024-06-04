import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { GamePriceComponent } from "./game-price/game-price.component";
import { PictureFormatterComponent } from "./picture-formatter/picture-formatter.component";
import { TestComponent } from "./test/test.component";
import { SelectorComponent } from "./fundamentals/selector/selector.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, WeatherComponent, GamePriceComponent, PictureFormatterComponent, TestComponent, SelectorComponent]
})
export class AppComponent {
  title = 'metric';
}
