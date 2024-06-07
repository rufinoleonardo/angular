import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { PostProps } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: PostProps[] = [];
    private postsUpdated = new Subject<PostProps[]>();

    getPosts() {
        return [...this.posts];
        //return this.posts;
    }
    
    getPostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    addPost({title, content} : PostProps){
        const post: PostProps = {title, content}
        this.posts.push(post);
        this.postsUpdated.next([...this.posts])
    }
}