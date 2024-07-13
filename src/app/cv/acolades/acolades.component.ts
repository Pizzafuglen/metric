import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CarouselComponent } from '../../fundamentals/carousel/carousel.component';
interface Acolade {
  title: string,
  fromDate: string,
  toDate: string | 'NOW',
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
     fromDate: '01-02-2000',
     toDate: '01-02-2001',
     description: '',
     tags: ['Tag1', 'Tag2', 'Tag3'],
    },
    {
      title: 'Test1',
      fromDate: '',
     toDate: '',
      description: 'This is a test description for my acolades slider',
      tags: ['Tag1', 'Tag2', 'Tag3'],
     },
     {
      title: 'Test2',
      fromDate: '',
     toDate: '',
      description: 'This is a test description for my acolades slider',
      tags: ['Tag1', 'Tag2', 'Tag3'],
     },
     {
      title: 'Test3',
      fromDate: '',
     toDate: '',
      description: 'This is a test description for my acolades slider',
      tags: ['Tag1', 'Tag2', 'Tag3'],
     },
  ]

  public currentAcolade: Acolade | null = null;

  public selectCurrentAcolade(): Acolade {
    return this.testAcolades[0]
  }
  ngOnInit(): void { }
}
