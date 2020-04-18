import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl = 'http://localhost:90/api/images';


  public uploadImage(formData: FormData): Observable<any> {
    const file = formData.get('file') as File;
    const url = this.baseUrl + `/upload?file=${file.name}`;
    console.log(url);
    return this.httpClient.post(url, formData , {responseType: 'text'});
  }

}
