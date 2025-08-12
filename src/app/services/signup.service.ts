import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  getStudents(){
    return this.http.get('https://mocki.io/v1/7e5e366c-8e8b-45fb-826d-adc07552abd9')
  }
}
