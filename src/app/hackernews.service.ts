import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const BASE_URL = 'https://node-hnapi.herokuapp.com';

@Injectable()
export class HackerNewsService {

  constructor(private http: Http) { }

  getLatestStories(page: number = 1) {
    return this.http.get(`${BASE_URL}/news?page=${page}`)
      .map((response: Response) => response.json());
  }

  getUser(id: string) {
    return this.http.get(`${BASE_URL}/user/${id}`)
      .map((response: Response) => response.json());
  }

}
