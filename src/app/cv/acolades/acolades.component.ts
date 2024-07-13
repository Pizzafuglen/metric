import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CarouselComponent } from '../../fundamentals/carousel/carousel.component';
interface Acolade {
  title: string,
  duration: string,
  description: string,
  tags: string[],
}

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
  public testAcolades: Acolade[] = [
    {
     title: 'Test',
     duration: '2014-2015',
     description: 'This is a test description for my acolades slider',
     tags: ['Tag1', 'Tag2', 'Tag3'],
    },
    {
      title: 'Test1',
      duration: '2014-2015',
      description: 'This is a test description for my acolades slider',
      tags: ['Tag1', 'Tag2', 'Tag3'],
     },
     {
      title: 'Test2',
      duration: '2014-2015',
      description: 'This is a test description for my acolades slider',
      tags: ['Tag1', 'Tag2', 'Tag3'],
     },
     {
      title: 'Test3',
      duration: '2014-2015',
      description: 'This is a test description for my acolades slider',
      tags: ['Tag1', 'Tag2', 'Tag3'],
     },
  ]

  public currentAcolade: Acolade | null = null;

  public selectCurrentAcolade(): Acolade {
    return this.testAcolades[1]
  }
  ngOnInit(): void { }
}
