import { Component, OnInit } from '@angular/core';
import { DataFileDTO } from 'src/app/models/dataFile.models';
import { ShareDataService } from 'src/app/service/shareData/share-data.service';

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.css'],
})
export class TableSectionComponent implements OnInit {
  public data: DataFileDTO[] = [];
  constructor(
    private shareDataService: ShareDataService
  ) {}
  ngOnInit(): void {
    this.shareDataService.sharedData$.subscribe((res) => {
      this.data = res;
    });
  }

}
