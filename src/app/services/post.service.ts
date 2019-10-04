import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddPost } from '../store/actions/post.action';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = [
    {
        answerA: "a",
        answerB: "a",
        category: " Animals ",
        creationDate: null,
        creator: "kPaqylegPzcxgnKHWJtggIfipZz1",
        description: "a",
        finished: false,
        key: "-LlOJ-hCYx16mKhwzUyU",
        title: "a"
    },
    {
        answerA: "b",
        answerB: "b",
        category: " Animals ",
        creationDate: null,
        creator: "kPaqylegPzcxgnKHWJtggIfipZz1",
        description: "b",
        finished: false,
        key: "-LlOJ-hCYx16mKhwzUyx",
        title: "b",
    },
    {
        answerA: "c",
        answerB: "c",
        category: " Animals ",
        creationDate: null,
        creator: "kPaqylegPzcxgnKHWJtggIfipZz1",
        description: "c",
        finished: false,
        key: "-LlOJ-hCYx16mKhwzUyz",
        title: "c"
    },
    {
        answerA: "d",
        answerB: "d",
        category: " Animals ",
        creationDate: null,
        creator: "kPaqylegPzcxgnKHWJtggIfipZz1",
        description: "d",
        finished: false,
        key: "-LlOJ-hCYx16mKhwzUyd",
        title: "d"
    }
]

  constructor(private store: Store) { }


  dispatchPostToStore() {
    this.posts.forEach(post => {
      this.store.dispatch(new AddPost(post))
    })
  }
}
