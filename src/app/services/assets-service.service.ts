import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Figurina } from '../models/figurina';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardId } from '../models/card-id';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private httpClient: HttpClient) { }

  public figurina: Array<Figurina>=[];
  public cardDetails: Array<CardId> = [];

  public getData() : Observable<Array<CardId>> {
    return this.httpClient.get<Array<CardId>>(environment.baseAPIURL + "/assets/id.json");
  }

  public getDetail(id: Number): Observable<Figurina>{
    return this.httpClient.get<Figurina>(environment.baseAPIURL +'/assets/figurina_'+id+'.json');
  }

}
