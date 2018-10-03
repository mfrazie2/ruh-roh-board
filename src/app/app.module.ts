import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { NewItemComponent } from './new-item/new-item.component';

import { ServicesModule } from './services/services.module';

@NgModule({
  imports:      [ BrowserModule, SharedModule, ServicesModule, MaterialModule, BrowserAnimationsModule, ],
  declarations: [ AppComponent, BoardComponent, ColumnComponent, NewItemComponent, ],
  entryComponents: [ NewItemComponent, ],
  providers:    [ ServicesModule, SharedModule, MaterialModule, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
