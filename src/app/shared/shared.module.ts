import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ FormsModule, HttpClientModule, ReactiveFormsModule, ],
  declarations: [ ],
  providers:    [ ],
})
export class SharedModule { }
