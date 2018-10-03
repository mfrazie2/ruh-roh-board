import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  // styleUrls: [ './new-item.component.css' ]
})
export class NewItemComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(`made it here! New Item!`)
  }

}
