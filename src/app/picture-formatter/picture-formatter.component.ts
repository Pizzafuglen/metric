import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-picture-formatter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './picture-formatter.component.html',
  styleUrl: './picture-formatter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureFormatterComponent implements OnInit {
  public readonly pictureUrl: string = "url(https://t4.ftcdn.net/jpg/00/61/78/63/360_F_61786387_lXcgAKDil1gWQwzFUgTzMG8RlNH3zI0a.jpg)";
  public readonly pictureForm: FormGroup = this.fb.group({
    objectFit: [''],
    objectX: [''],
    objecty: [''],
    objectHeight: [0],
    objectWidth: [0],
  })

  public objectFit = signal('contain')

  constructor(
    private fb: FormBuilder
  ) {
    this.pictureForm.get('objectFit')?.valueChanges.pipe(takeUntilDestroyed()).subscribe(x => {console.log(x);this.objectFit.update(objectFit => objectFit = x)})
  }
  ngOnInit(): void { }

}
