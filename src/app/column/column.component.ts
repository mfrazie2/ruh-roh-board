import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'column',
  template: `
    <mat-toolbar>
      <mat-toolbar-row>
        <h1>{{columnTitle}}!</h1>
        <button type="button"
                (click)="addItemClick()"
        >Add New Item</button>
      </mat-toolbar-row>
    </mat-toolbar>
    <ng-container *ngFor="let item of items">
      <mat-card class="column-item">
        <mat-card-title>{{item.title}}</mat-card-title>
        <mat-card-subtitle *ngIf="item.description">{{item.description}}</mat-card-subtitle>
      </mat-card>
    </ng-container>
  `,
  styles: [`h1 { font-family: Lato; }`, `mat-toolbar-row { display: grid; grid-template-columns: 1fr auto; }`  ]
})
export class ColumnComponent  {
  @Input() columnTitle: string;
  @Input() items: any[];

  @Output() addNewItem: EventEmitter<string> = new EventEmitter<string>();
  // = [
  // `.column-item { border: black solid 1px; margin-bottom: 1em; padding: 12px; }`
  //   { title: 'v1.4.4 is done', description: null },
  //   { title: 'v1.4.4 is done', description: null },
  //   { title: 'v1.4.4 is done', description: " not null " },
  //   { title: 'v1.4.4 is done', description: null },
  // ];
  addItemClick() {
    console.log(`adding new item: ${this.columnTitle}`)
    this.addNewItem.emit(this.columnTitle);
  }
}
