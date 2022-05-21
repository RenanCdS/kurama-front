import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateContainerDto } from '../dtos/create-container-dto';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private readonly http: HttpClient) { }

  getContainers(): Observable<Container[]> {
    return this.http.get<Container[]>(`${environment.apiUrl}/api/v1/containers`);
  }

  deleteContainer(containerId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/v1/containers/${containerId}`);
  }

  deleteAllContainers(): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/v1/containers`);
  }

  createContainer(createContainerDto: CreateContainerDto): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/containers`, createContainerDto);
  }
}
