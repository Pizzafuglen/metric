import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent implements OnInit {

  ngOnInit(): void { }

}
