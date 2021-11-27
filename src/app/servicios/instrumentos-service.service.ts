import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Observable  } from 'rxjs';
import { Instrumento } from '../model/instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosServiceService {

  constructor( private http:HttpClient) { }

  url = environment.apiURL ; 

  getInstrumentos():Observable<Instrumento[]>{
    return this.http.get<Instrumento[]>(this.url)
  }

}
