import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { filter, map, tap } from 'rxjs/operators';
import { Post } from 'src/app/models/post.class';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id: string
  post: Post

  constructor(
    private route: ActivatedRoute,
    private store: Store
    ) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.store.select(state => state.posts.posts).pipe(
      map(posts => posts.filter(post => post.key === this.id)[0]),
    ).subscribe((post: Post) => {
      this.post = post
    })
  }


}
