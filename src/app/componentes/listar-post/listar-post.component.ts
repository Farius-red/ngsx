
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Posts } from '../../store/post/post.model';
import { AddPost, RemovePost } from '../../store/post/post.actions';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {
  public posts: Observable<Posts>;

  constructor(private store: Store) {
    this.posts = this.store.select(state => state.posts.posts)
  }

  ngOnInit(): void {
  }

  public removePost(id: string) {
    const post = new RemovePost(id);
    this.store.dispatch(post);
  }

  addPost(post: Posts) {
    const newposts = new AddPost(post);
    this.store.dispatch(newposts);
  }

}
