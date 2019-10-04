import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddPost } from '../actions/post.action';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/models/post.class';

export interface PostStateModel {
    posts: Post[];
}

@State<PostStateModel>({
    name: 'posts',
    defaults: {
        posts: [],
    }
})

export class PostState {
    constructor() { }

    @Selector()
    static posts(state: string[]) {
      return state.filter((s) => s.indexOf('posts') > -1);    
    }

    @Action(AddPost)
    addPost(ctx: StateContext<PostStateModel>, { payload }: AddPost) {
        const state = ctx.getState();
        ctx.patchState({
            ...state,
            posts: [...state.posts, payload],
        });
    }
}
