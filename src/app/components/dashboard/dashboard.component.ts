import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

import { PostService } from 'src/app/shared/services/post.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  posts:any



  constructor(
    public authService: AuthService,
    private service:PostService) {}
    ngOnInit(): void {
      this.service.getPosts()
      .subscribe(response => {
        this.data = response;

      this.posts = this.data.data.memes
      console.log(this.posts);


    });
  }

}
