import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  board$: any;
  titles = [ 'happy', 'meh', 'sad' ];

  constructor() {
  }

  ngOnInit() {
    // if (this.board$ == undefined) {
    //   this._boardService.getAllBoardData()
    //     // .take(1)
    //     .subscribe(data => {
    //       console.log(data);
    //       this.board$ = data;
    //     });
    // }
  }

}
