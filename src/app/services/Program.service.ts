import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

constructor(private http: HttpClient) { }

// connect front to back

apiUrl = 'http://localhost:3000/CustomPrograms';

//get all data 

getAllData():Observable<any>
{
  return this.http.get(`${this.apiUrl}`);
}

}
