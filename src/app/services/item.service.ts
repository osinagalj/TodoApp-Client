import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private url = environment.apiBaseURL + 'api/v0/tasks/';
  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveItem(Item: Item): Observable<any> {
    return this.http.post(this.url, Item);
  }

  updateItem(Item: Item): Observable<any> {
    return this.http.put(this.url + Item.id, Item);
  }

  getItem(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
