import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITodoResponse } from '../models/todo-response.interface';
import { map } from 'rxjs';
import { getRandomDate } from '../../utility/randomDateGenerator';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private http = inject(HttpClient);

  getTodos() {
    return this.http.get<ITodoResponse[]>('https://jsonplaceholder.typicode.com/todos?_limit=20').pipe(
      map(data => data.map(d => ({
            ...d,
            creationDate: getRandomDate()
        })
    )));
  }
}
