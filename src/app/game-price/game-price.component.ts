import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, effect, signal } from '@angular/core';
import { Game, GamePriceService } from './game-price.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import _ from 'lodash';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, ColDef, GridApi } from 'ag-grid-community';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  private api: GridApi = new GridApi;
  public selectionForm: FormGroup = this.fb.group({
    noGames: [0]
  })
  public cheapestGames = computed<Game[]>(() => _.chunk(this.games().sort((a, b) => a.salePrice - b.salePrice), this.selectionForm.get('noGames')?.value)[1] ?? []);

  public gridOptions: GridOptions = {
    rowData: [],
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
    onGridReady: (param) => this.api = param.api,
  }

  constructor(
    private gameService: GamePriceService,
    private fb: FormBuilder
  ) {
    effect(() => { this.api.setGridOption('rowData', []) })
  }

  ngOnInit(): void {
    this.load()
  }

  public load(): void {
    this.gameService.getAllDeals().subscribe(games => this.games.set(games))
  }
}
