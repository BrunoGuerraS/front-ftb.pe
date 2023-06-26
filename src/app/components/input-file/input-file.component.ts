import { Component } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent {
  upData = {
    icon: '../../../assets/subir.png',
    fileName: 'descargue o arrastre el documento aquí'
  }
  isDragOver: boolean = false;
  readyToSend: boolean = false;
  file: any;
  constructor() {}
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
}
