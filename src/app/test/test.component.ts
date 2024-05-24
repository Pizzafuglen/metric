import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  public testArr = [{id: 1, sub: [2,3,4]}, {id: 2, sub: [3,4]}, {id: 3, sub: [4]}, {id: 4, sub: []}];
  public storageArr: any  = []

  constructor() {
    this.testArr.forEach(x=>this.recursive(x, []))
    console.log(this.storageArr)
  }
  ngOnInit(): void { }

  public recursive(obj: {id: number, sub: number[]} | undefined, path: {id: number, sub: number[]}[] ) {
    console.log(obj)
    if (obj!.sub.length > 0) {
      if(!path.some(x => x.id === obj?.id)) {
        path.push(obj!)

        obj?.sub.forEach(o => {
          if (o !== obj?.id) {
            this.recursive(this.testArr?.find(x => x.id === o), path)
          }
        })
      }
    } else {
      if(!path.some(x => x.id === obj?.id)) {
        path.push(obj!)
        this.storageArr.push(path)
      }
    }
  }
}
