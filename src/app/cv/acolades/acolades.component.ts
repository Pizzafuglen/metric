import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Signal, signal, WritableSignal, type OnInit } from '@angular/core';
import { CarouselComponent } from '../../fundamentals/carousel/carousel.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
interface Acolade {
  title: string,
  fromDate: string,
  toDate: string | 'NOW',
  description: string,
  days?: string,
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
    CarouselComponent,
    CdkListbox,
    CdkOption
  ],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [style({transform: 'translateX(-100%)'}), animate(100)]),
      transition('* => void', [animate(100, style({transform: 'translateX(100%)'}))]),
    ]),
  ]
})
export class AcoladesComponent implements OnInit {
  public workAcolades: Acolade[] = [
    {
      title: 'Student Worker: Software Engineer - CompuSoft A/S',
      fromDate: '2023-11',
      toDate: 'now',
      days: this.getDays('2023-11', 'now')?.toString(),
      description: 'As a student worker, tasks have been fullstack oriented, including both frontend (writing in TS usign Angular as a framework), and backend written in C#/.NET. Work has primarily been done on the online tool suite provided for B2B customers, but does include working on a distributed interface system (including unmanned ticketing stations, POS terminals, etc.) ',
      tags: ['Angular', '.NET', 'MSQL', 'HTML', 'CSS', 'JS', 'TS', 'SCRUM', 'TFS', 'Pervasive SQL', 'Slack', 'Teams'],
    },
    {
      title: 'Ambassador for Software Technology - University of Southern Denmark',
      fromDate: '2022-02',
      toDate: 'now',
      days: this.getDays('2022-02','now')?.toString(),
      description: 'Tasked with introducing the future Software Engineers of Denmark to the intricacies of the field',
      tags: [ 'Candidate Interaction', 'Planning', 'SCRUM Workshops'],
    },
    {
      title: 'Student Mentor for Software Technology - University of Southern Denmark',
      fromDate: '2024-08',
      toDate: 'now',
      days: this.getDays('2024-08','now')?.toString(),
      description: 'Responsible for the introduction provided the new students, as they start their journey to becomming fully fledged engineers. This includes arranging outside field-expert talks, as well as managing sessions with the new students',
      tags: ['Supervision', 'Planning', 'Project Management', 'Economic Mangement', 'Mentorship'],
    },
    {
      title: 'Teachers Assistant: Object Oriented Programming - University of Southern Denmark',
      fromDate: '2024-08',
      toDate: 'now',
      days: this.getDays('2024-08','now')?.toString(),
      description: 'Complementing the lectures held by professors - Helping and explaning content and context regarding Object Oriented Programming in Java',
      tags: ['Java', 'Computer Science', 'Mentorship'],
    },
    {
      title: 'Student Worker: CoSELab Software Analysis - University of Southern Denmark',
      fromDate: '2023-05',
      toDate: '2024-04',
      days: this.getDays('2023-05','2024-05')?.toString(),
      description: 'Working along side a fellow student, under the watchful eye of assistant Professor Miguel Enrique Campusano Araya, developing a platform for uploading/pulling code repos and analysing them, based on the Sokrates codeanalysis tool',
      tags: ['Project Management', 'Product Ownership', 'PHP', 'Laravel', 'Bootstrap', 'Docker', 'Cloud Computing'],
    },
    {
      title: 'Intern: Software Engineer - CompuSoft A/S',
      fromDate: '2024-02',
      toDate: '2024-06',
      days: this.getDays('2024-02','2024-07')?.toString(),
      description: 'During the internship the tasks were fullstack scoped, dealing with both Frontend and Backend change requests, all in a production environment, reaching B2B and final customers',
      tags: ['Angular', '.NET', 'MSQL', 'HTML', 'CSS', 'JS', 'TS', 'SCRUM', 'TFS', 'Pervasive SQL', 'Slack', 'Teams'],
    },
    {
      title: 'Student Mentor for Software Technology - University of Southern Denmark',
      fromDate: '2023-08',
      toDate: '2024-01',
      days: this.getDays('2023-08','2024-01')?.toString(),
      description: 'Responsible for the introduction provided the new students, as they start their journey to becomming fully fledged engineers. This includes arranging outside field-expert talks, as well as managing sessions with the new students',
      tags: ['Supervision', 'Planning', 'Project Management', 'Economic Mangement', 'Mentorship'],
    },
    {
      title: 'Teachers Assistant: Web Techonologies - University of Southern Denmark',
      fromDate: '2023-08',
      toDate: '2024-01',
      days: this.getDays('2023-08','2024-01')?.toString(),
      description: 'Complementing the lectures held by professors - Running through the intricacies of creating web applications, focussed around PHP/Laravel',
      tags: ['Web Technologies', 'REST API', 'PHP', 'Laravel', 'Blade', 'HTML', 'CSS', 'JS', 'MySQL', ],
    },
    {
      title: 'Teachers Assistant: General Software Engineering - University of Southern Denmark',
      fromDate: '2023-02',
      toDate: '2023-06',
      days: this.getDays('2023-02','2023-07')?.toString(),
      description: 'Complementing the lectures held by professors - Diving into the tools, patterns, and processes that make up the Software Engineering dicipline',
      tags: ['SCRUM', 'XP', 'Jira', 'User Stories', 'ER Diagrams'],
    },
    {
      title: 'Teachers Assistant: Advanced Object Oriented Programming - University of Southern Denmark',
      fromDate: '2023-02',
      toDate: '2023-06',
      days: this.getDays('2023-02','2023-07')?.toString(),
      description: 'Complementing the lectures held by professors - Helping and explaning content and context regarding Advanced Object Oriented Programming in Java',
      tags: ['Java', 'Computer Science', 'Mentorship'],
    },
    {
      title: 'Teachers Assistant: Object Oriented Programming - University of Southern Denmark',
      fromDate: '2022-08',
      toDate: '2023-01',
      days: this.getDays('2022-08','2023-01')?.toString(),
      description: 'Complementing the lectures held by professors - Helping and explaning content and context regarding Object Oriented Programming in Java',
      tags: ['Java', 'Computer Science', 'Mentorship'],
    },
  ]

  public educationalAcolades: Acolade[] = [
    {
      title: 'Software Techonology BEng in Engineering - University of Southern Denmark',
      fromDate: '2021-08',
      toDate: 'now',
      days: this.getDays('2021-08','now')?.toString(),
      description: '',
      tags: [],
    },
    {
      title: 'Political Science Bachelor\'s Programme (2 Semesters Finished) - University of Southern Denmark',
      fromDate: '2020-08',
      toDate: '2021-06',
      days: this.getDays('2020-08','2021-06')?.toString(),
      description: '',
      tags: [],
    },
    {
      title: 'Robot Systems Engineering BSc in Engineering (1 Semester Finished) - University of Southern Denmark',
      fromDate: '2019-08',
      toDate: '2020-01',
      days: this.getDays('2019-08','2020-01')?.toString(),
      description: '',
      tags: [],
    },
    {
      title: 'Math/Physics - Kold College HTX (High School)',
      fromDate: '2016-08',
      toDate: '2019-06',
      days: this.getDays('2016-08','2019-06')?.toString(),
      description: '',
      tags: [],
    },
  ]

  public getDays(from: string, to: string) {
    const fromDate = new Date(parseInt(from.split('-')[0]), parseInt(from.split('-')[1]));
    let toDate = new Date();
    if (to !== 'now') {
      toDate = new Date(parseInt(to.split('-')[0]), parseInt(to.split('-')[1]));
      return Math.round((toDate.getTime() - fromDate.getTime())/(1000 * 3600 * 24))
    } else {
      return Math.round((Date.now() - fromDate.getTime())/(1000 * 3600 * 24))
    }
  }

  ngOnInit(): void { }
}
