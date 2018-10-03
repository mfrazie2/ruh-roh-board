import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { MatDialog } from '@angular/material';

import { NewItemComponent } from '../new-item/new-item.component';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.css' ]
})
export class BoardComponent implements OnInit {
  board: any;
  titles = [ 'happy', 'meh', 'sad' ];

  constructor(
    private _boardService: BoardService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(`made it here! Board!`)
    if (this.board == undefined) {
      this._boardService.getAllBoardData()
        .subscribe(data => {
          // console.log(data);
          this.board = data;
        });
    }
  }

  openDialog(event: string) {
    this.dialog.open(NewItemComponent, {
      data: {
        type: event,
      }
    });
  }

}
