import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.class';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Store } from '@ngxs/store';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[]

  constructor(
    private router: Router, 
    private postService: PostService,
    private store: Store) { 
  }

  ngOnInit() {
    this.postService.dispatchPostToStore()
    this.store.select(state => state.posts.posts).subscribe(post => {
      this.posts = post
    })
  }

  goTo(key: string) {
    this.router.navigate(['post/' + key])
  }

}
