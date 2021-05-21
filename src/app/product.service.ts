import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl:string = "../assets/album.json";

  constructor(private _http:HttpClient) { }

  getAlbum(id:number) : Observable<string>{
    return this._http.get<string>(this._albumUrl);
  }
}

