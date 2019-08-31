import { Component } from '@angular/core';
import { FaceRecognitionService } from '../face-recognition.service';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent {

  imageUrl = "";
  jsonFile;
  
  constructor(private service: FaceRecognitionService) { }


  getFaceData(url): void {
    if(url) {
      this.imageUrl = url.value;
      if(this.imageUrl) {
        this.service.getFaceData(this.imageUrl).subscribe(data => this.jsonFile = data);
      }
    }
  }
}