import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import {CdkTreeModule, FlatTreeControl} from '@angular/cdk/tree';
import _ from 'lodash';
import { ArrayDataSource } from '@angular/cdk/collections';

interface TestObject {
  id: number,
  sub: number[],
}
interface Relation {
  parent: TestObject,
  child?: TestObject,
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    CdkTreeModule,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  public testArr = [{ id: 1, sub: [2, 3, 4] }, { id: 2, sub: [1, 3, 4] }, { id: 3, sub: [4] },  { id: 4, sub: [] },];

  public parentChildArr: Relation[] = [];
  public resultingArray: string[] = [];
  public newArr: {id: number, sub: number[], level: number, expandable: boolean, isExpanded: boolean}[] = [];

  public treeControl = new FlatTreeControl<{id: number, sub: number[], level: number, expandable: boolean, isExpanded: boolean}>(
    node => node.level,
    node => node.expandable,
  )

  public hasChild = (_: number, node: {id: number, sub: number[], level: number, expandable: boolean, isExpanded: boolean}) => node.expandable;

  public getParentNode(node: {id: number, sub: number[], level: number, expandable: boolean, isExpanded: boolean}) {
    const nodeIndex = this.newArr.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; --i) {
      if(this.newArr[i].level === node.level - 1) {
        return this.newArr[i];
      }
    }
    return null
  }

  public shouldRender(node: {id: number, sub: number[], level: number, expandable: boolean, isExpanded: boolean}) {
    let parent = this.getParentNode(node);
    while(parent) {
      if (!parent.isExpanded){
        return false;
      }
      parent = this.getParentNode(parent)
    }
    return true;
  }

  public dataSource = new ArrayDataSource(this.newArr)

  constructor() {
    this.defineParentChild(this.testArr)
    this.parentChildArr.forEach(relation => this.recursive(relation, 0))
    console.log(this.resultingArray)
    console.log(this.newArr)
  }
  ngOnInit(): void { }

  public defineParentChild(arr: TestObject[] ) {
    arr.forEach((parent: TestObject) => {
      if(parent.sub.length > 0) {
        parent.sub.forEach(sub => {
          this.parentChildArr.push({parent: parent, child: this.testArr.find(test => test.id === sub)})
        })
      } else {
        this.parentChildArr.push({parent: parent})
      }
    })
  }

  // Start off by defining the relations between the different objects in a huge array - X
  // Then recursively, run through the array, adding the different relations to a "path"-array
  // When you reach a "leaf"-node, add the current "path" to a seperate array
  // Run the method recursively on the same "base"-array, while checking there cannot be two identical paths
  // If an identical path is spotted, stop one short and add it the the separate array for storage

  // Menu 1 can contain menu 5, but menu 5 can't contain meny 1, as that would result in a circular dependency

  public recursive(obj: Relation, level: number) {
    this.newArr.push({...obj.parent, expandable: obj.parent.sub.length > 0, level, isExpanded: false})
    if (obj.parent.sub.length > 0) {
      this.recursive(this.parentChildArr.find(relation => relation.parent.id === obj.child?.id && obj.parent.id !== relation.child?.id)!, level + 1)
    }
  }
}
