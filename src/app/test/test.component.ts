import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import _ from 'lodash';

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
  public testArr = [{ id: 1, sub: [2, 3, 4] }, { id: 2, sub: [1, 3, 4] }, { id: 3, sub: [4] },  { id: 4, sub: [] },{ id: 2, sub: [3, 4] }, { id: 3, sub: [4] }, { id: 2, sub: [3, 4] }, { id: 3, sub: [4] }];

  public parentChildArr: {parent: { id: number, sub: number[] }, child: { id: number, sub: number[] }}[] = [];

  public storageArr: any = []
  public test2: any = []

  constructor() {
    this.defineParentChild(this.testArr)
    this.parentChildArr.forEach(relation => this.recursive(relation, []))
    // console.log(this.parentChildArr);
    console.log(this.test2)

  }
  ngOnInit(): void { }

  public defineParentChild(arr: any[] ) {
    arr.forEach((parent: { id: number, sub: number[] }) => {
      if(parent.sub.length > 0) {
        parent.sub.forEach(sub => {
          this.parentChildArr.push({parent: parent, child: this.testArr!.find(test => test.id === sub)!})
        })
      } else {
        this.parentChildArr.push({parent: parent, child: {id: 0, sub: []}})
      }
    })
  }

  // Start off by defining the relations between the different objects in a huge array - X
  // Then recursively, run through the array, adding the different relations to a "path"-array
  // When you reach a "leaf"-node, add the current "path" to a seperate array
  // Run the method recursively on the same "base"-array, while checking there cannot be two identical paths
  // If an identical path is spotted, stop one short and add it the the separate array for storage

  // Menu 1 can contain menu 5, but menu 5 can't contain meny 1, as that would result in a circular dependency

  public recursive(obj: {parent: { id: number, sub: number[] }, child: { id: number, sub: number[] }}, path: { id: number, sub: number[] }[]) {
    if(!path.some(p => p.id === obj.parent.id)) {
      path.push(obj.parent)
    }
    path.push(obj.child)

    this.test2.push(_.cloneDeep(path))
    if (obj?.child?.sub?.length > 0) {
      // console.log(this.parentChildArr.find(relation => relation.parent.id === obj.child.id && obj.child.id !== relation.child.id));

      this.recursive(this.parentChildArr.find(relation => relation?.parent?.id === obj?.child?.id && obj?.parent?.id !== relation?.child?.id)!, path)
    }
  }
}
