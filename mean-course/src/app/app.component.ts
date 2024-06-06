import { Component } from '@angular/core';
import { PostProps } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storedPosts: PostProps[] = [];

  onPostAdded(post){
    this.storedPosts.push(post);
  }
}
