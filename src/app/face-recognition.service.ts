import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceRecognitionService {

  apiKey = "Microsoft Face API key";
  apiUrl = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
  headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": this.apiKey,
  };
  params = {
    returnFaceId: "true",
    returnFaceLandmarks: "false",
    returnFaceAttributes:"age,gender,headPose,smile,facialHair,glasses,emotion," +
        "hair,makeup,occlusion,accessories,blur,exposure,noise"
};

  constructor(private http: HttpClient) {}

  getFaceData(imageUrl: string): Observable<any> {
    let body = '{"url": ' + '"' + imageUrl + '"}';
      return this.http.post(this.apiUrl, body,
       { headers: this.headers,  params: this.params });
  }
}
