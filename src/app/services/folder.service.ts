import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FolderService {
  //url = 'http://localhost:8080/api/v0/folders/';

  private url = environment.apiBaseURL + 'api/v0/folders/';

  constructor(private http: HttpClient) { }

  getFolders(): Observable<any> {
    return this.http.get(this.url);
  }

  getItemsByFolder(id:string): Observable<any> {
    return this.http.get(this.url + 'tasks/' + id);
  }

  deleteFolder(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveFolder(Folder: Folder): Observable<any> {
    return this.http.post(this.url, Folder);
  }

  updateFolder(Folder: Folder): Observable<any> {
    return this.http.put(this.url + Folder.id, Folder);
  }

  getFolder(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
