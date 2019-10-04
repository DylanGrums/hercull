import { Post } from 'src/app/models/post.class';

export class AddPost {
    static readonly type = "[Post] Added post"
    
    constructor(public payload: Post) {}
}
