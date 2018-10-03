import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BoardService } from './board.service';

@NgModule({
  imports:      [ SharedModule, ],
  providers:    [ BoardService ],
})
export class ServicesModule { }
