import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal, type OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  public slides: InputSignal<any[] | undefined> = input()

  ngOnInit(): void {

  }

}
