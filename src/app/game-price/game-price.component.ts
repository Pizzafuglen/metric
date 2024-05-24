import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, effect, signal } from '@angular/core';
import { Game, GamePriceService } from './game-price.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import _ from 'lodash';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-game-price',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    AgGridAngular,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './game-price.component.html',
  styleUrl: './game-price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePriceComponent implements OnInit {
  public games = signal<Game[]>([])
  public cheapestGames: Game[] = [];
  public selectionForm = this.fb.group({
    noGames: [0],
  });

  public gridOptions: GridOptions = {
    columnDefs: [
      {
        field: 'internalName',
      },
      {
        field: 'title',
      },
      {
        field: 'metacriticLink',
      },
      {
        field: 'dealID',
      },
      {
        field: 'storeID',
      },
      {
        field: 'gameID',
      },
      {
        field: 'salePrice',
      },
      {
        field: 'normalPrice',
      },
      {
        field: 'isOnSale',
      },
      {
        field: 'savings',
      },
      {
        field: 'metacriticScore',
      },
      {
        field: 'steamRatingText',
      },
      {
        field: 'steamRatingPercent',
      },
      {
        field: 'steamRatingCount',
      },
      {
        field: 'steamAppID',
      },
      {
        field: 'releaseDate',
      },
      {
        field: 'lastChange',
      },
      {
        field: 'dealRating',
      },
      {
        field: 'thumb',
      }
    ],
  }

  constructor(
    private gameService: GamePriceService,
    private fb: FormBuilder
  ) {
    this.selectionForm.get('noGames')?.valueChanges.pipe(takeUntilDestroyed()).subscribe(x => {
      this.cheapestGames = (_.chunk(this.games(), x ?? 1)[0] as Game[]) ?? [];
    })
   }
  ngOnInit(): void {
    this.load()
  }
  public load(): void {
    this.gameService.getAllDeals().subscribe(games => this.games.set(games))
  }
}
