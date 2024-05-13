import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, signal } from '@angular/core';
import { Game, GamePriceService } from './game-price.service';
import {MatButtonModule} from '@angular/material/button'
import _ from 'lodash';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, ColDef } from 'ag-grid-community';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-price',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    AgGridAngular,
    ReactiveFormsModule
  ],
  templateUrl: './game-price.component.html',
  styleUrl: './game-price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePriceComponent implements OnInit {
  public cheapestGames = computed<Game[]>(() => _.chunk(this.games().sort((a, b) => a.salePrice - b.salePrice), 3)[1]);
  public games = signal<Game[]>([])

  public selectionForm: FormGroup = this.fb.group({
    noGames: [0]
  })

  public columnDefs: ColDef[] = [
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
      ]
  // TODO: Use GridOptions instead

  public gridOptions: GridOptions = {
    rowData: this.cheapestGames(),
    columnDefs: this.columnDefs,
    onGridReady: () => this.load(),
  }

  constructor(
    private gameService: GamePriceService,
    private fb: FormBuilder
  ) {
    // effect(() => {console.log(this.games() ? this.games() : ''); console.log(this.cheapestGames() ? this.cheapestGames() : ''); console.log(this.cheapestGames() ? typeof(this.cheapestGames()[1]?.salePrice): '')})
  }

  ngOnInit(): void {
    // this.load()
  }

  public load(): void {
    this.gameService.getAllDeals().subscribe(games => this.games.set(games))
  }
}
