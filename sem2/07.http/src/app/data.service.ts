import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./definitions";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data = [];
  constructor(private _http: HttpClient) { }

  public getCategories(): Observable<Array<Category>> {
    return this._http.get<Array<Category>>('https://edu.chrum.it/js_dev_ng/data/products.json');
  }
}
