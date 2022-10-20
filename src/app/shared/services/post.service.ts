import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://api.imgflip.com/get_memes';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);
  }

}
