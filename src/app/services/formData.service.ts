import { Injectable } from '@angular/core';
import { RequestOptions, Request, Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FormDataService {

  constructor(private http: Http) { }

  postFormData(obj: any) {
      return this.http.post('http://localhost:3000/formData/formdata', obj)
        .map(data => {
          return data.json();
        });
  }
}
