
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddPost, RemovePost } from "./post.actions";
import { PostsStateModel } from "./post.model";

@State({
    name: 'posts',
    defaults: {
        posts: []
    }
})
export class PostsState {
    @Selector()
    static getPosts(state: PostsStateModel) { return state.posts; }

    // Añade un nuevo post al estado
    @Action(AddPost)
    add({ getState, patchState }: StateContext<PostsStateModel>, { payload }: AddPost) {
        const state = getState();
        patchState({
            posts: [...state.posts, payload]
        });
    }


    // Elimina un post del estado
    @Action(RemovePost)
    remove({ getState, patchState }: StateContext<PostsStateModel>, { payload }: RemovePost) {
        patchState({
            posts: getState().posts.filter(post => post.id !== payload)
        });
    }
}