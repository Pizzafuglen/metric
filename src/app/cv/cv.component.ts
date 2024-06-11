import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
    selector: 'app-cv',
    standalone: true,
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        AboutMeComponent
    ]
})
export class CvComponent implements OnInit {

  ngOnInit(): void { }

}
