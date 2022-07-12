import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export enum API_PARAMS{
  PROGRAMS = 'CustomPrograms',
  SEANCE = 'CustomSeances',
  EXECISE = 'CustomExercises'

}

@Injectable({
  providedIn: 'root'
})

export class ProgramService {

  
constructor(private http: HttpClient) {
}
 
// connect front to back

apiUrl = 'http://localhost:3000/';

//get all data 

getAllData(apiParams: string):Observable<any> {
  return this.http.get(`${this.apiUrl}${apiParams}`);
}



//create data

createData(data: any, apiParams: string):Observable<any> {
  console.log(data, 'createapi=>');
  
  return this.http.post(`${this.apiUrl}${apiParams}`, data);
}

// delete single data

deleteData(id: any, apiParams: string):Observable<any> {
  return this.http.delete(`${this.apiUrl}${apiParams}/${id}`);
}

// update single data

updateData(data: any,apiParams: string, id: any): Observable<any> {
  let ids = id;
  return this.http.put(`${this.apiUrl}${apiParams}${ids}`, data);
}


}

