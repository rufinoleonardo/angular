import { Component, OnDestroy, OnInit } from "@angular/core";
import { PostProps } from "../post.model";
import { PostsService } from "../post.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.css"]
})
export class PostList implements OnInit, OnDestroy {
    posts: PostProps[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService){}
    
    ngOnInit(){
        this.posts = this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: PostProps[])=>{
            this.posts = posts;
        });
    }

    ngOnDestroy(): void {
        this.postsSub.unsubscribe();
    }    
}