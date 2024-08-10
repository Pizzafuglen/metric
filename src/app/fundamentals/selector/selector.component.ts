import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, type OnInit } from '@angular/core';
import {CdkListboxModule} from '@angular/cdk/listbox';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    CommonModule,
    CdkListboxModule,
    ScrollingModule,
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent implements OnInit {
  public readonly options = [{id: 1, value: 'this is a test'},{id: 1, value: 'this is a test'},{id: 1, value: 'this is a test'},{id: 1, value: 'this is a test'},]
  public label = input('');
  ngOnInit(): void {


  }

}
