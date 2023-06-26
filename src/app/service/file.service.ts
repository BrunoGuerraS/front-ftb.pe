import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { DataFileDTO } from '../models/dataFile.models';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private property: any;
  constructor(private http: HttpClient) {
    this.property = environment;
  }

  uploadFile(data: any) {
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<DataFileDTO[]>(`${this.property.url_api}/file`, data, {
      headers,
    });
  }
}
