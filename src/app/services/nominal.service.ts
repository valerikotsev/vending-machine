import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nominal } from '../vm/vm.model';

@Injectable({
  providedIn: 'root'
})
export class NominalService {

  private _nominals!: Nominal[];

  constructor(private http: HttpClient) { }

  public listNominals(): Observable<Nominal[]> {
    return this.http.get<Nominal[]>(environment.apiUrl + '/nominals');
  }

  public get nominals(): Nominal[] {
    return this._nominals;
  }

  public set nominals(nominals: Nominal[]) {
    this._nominals = nominals;
  }
}
