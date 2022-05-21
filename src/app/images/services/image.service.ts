import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PullImageDto } from '../dtos/pull-image-dto';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private readonly http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${environment.apiUrl}/api/v1/images`);
  }

  deleteImage(imageId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/v1/images/${imageId}`);
  }

  deleteAllImages(): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/v1/images`);
  }

  pullImage(getImageDto: PullImageDto): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/images`, getImageDto);
  }
}
