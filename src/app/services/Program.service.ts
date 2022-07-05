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

getAllData():Observable<any> {
  return this.http.get(`${this.apiUrl}`);
}

//create data

createData(data: any):Observable<any> {
  console.log(data, 'createapi=>');
  
  return this.http.post(`${this.apiUrl}`, data);
}

// delete single data

deleteData(id: any):Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

updateData(data: any, id: any): Observable<any> {
  let ids = id;
  return this.http.put(`${this.apiUrl}/${ids}`, data);
}







}
