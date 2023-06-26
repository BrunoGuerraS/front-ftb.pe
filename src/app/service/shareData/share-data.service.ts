import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataFileDTO } from 'src/app/models/dataFile.models';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private sharedData = new BehaviorSubject<DataFileDTO[]>([]);
  sharedData$ = this.sharedData.asObservable();

  constructor() {}
  putData(data: DataFileDTO[]) {
    this.sharedData.next(data);
  }
}
