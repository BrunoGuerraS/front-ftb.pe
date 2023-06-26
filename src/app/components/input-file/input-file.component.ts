import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { ShareDataService } from 'src/app/service/shareData/share-data.service';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent {
  upData = {
    icon: '../../../assets/subir.png',
    fileName: 'suba o arrastre el documento aquí'
  }
  isDragOver: boolean = false;
  readyToSend: boolean = false;
  file: any;
  fileFormated: any
  constructor(
    private fileService: FileService,
    private  shareDataService: ShareDataService
  ) {}
  handleDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.file = event.dataTransfer?.files[0];
    this.upData.icon = '../../../assets/documents.png';
    this.upData.fileName = this.file.name;
    console.log('handleDrop',event.dataTransfer?.files[0])
    this.isDragOver = false;
    this.readyToSend = true;
  }
  sendFile(){
    console.log('enviando data')
    const formData = new FormData()
    formData.append('file', this.file)
    this.fileService.uploadFile(formData).subscribe((res)=>{
      this.shareDataService.putData(res)
    })
  }
}
