import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CarouselComponent } from '../../fundamentals/carousel/carousel.component';

@Component({
    selector: 'app-acolades',
    standalone: true,
    templateUrl: './acolades.component.html',
    styleUrl: './acolades.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CarouselComponent
    ]
})
export class AcoladesComponent implements OnInit {
  public testAcolades = [
    {
     title: 'Test',
     duration: '2014-2015',
     description: 'This is a test description for my acolades slider'
    },
    {
      title: 'Test1',
      duration: '2014-2015',
      description: 'This is a test description for my acolades slider'
     },
     {
      title: 'Test2',
      duration: '2014-2015',
      description: 'This is a test description for my acolades slider'
     },
     {
      title: 'Test3',
      duration: '2014-2015',
      description: 'This is a test description for my acolades slider'
     },
  ]
  ngOnInit(): void { }

}
