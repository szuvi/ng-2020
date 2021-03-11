import { Injectable } from '@angular/core';
import {categories} from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data = categories;
  constructor() { }

  public getCategories() {
    return this._data;
  }
}
