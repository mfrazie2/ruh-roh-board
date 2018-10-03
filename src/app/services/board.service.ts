import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from './URL-SECRET';

@Injectable()
export class BoardService {
  private _baseURL: string = BASE_URL;
  constructor(private _http: HttpClient) {
  }

  getAllBoardData() {
    return this._http.get(this._baseURL)
      // .take(1)
      // .map(res => res)
      // .catch(err => {
      //   console.error(err);
      //   return Observable.throw(err);
      // });
  }
}