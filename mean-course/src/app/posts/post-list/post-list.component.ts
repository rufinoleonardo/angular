import { Component, Input } from "@angular/core";
import { PostProps } from "../post.model";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.css"]
})
export class PostList {
    // posts = [
    //     {title:"First Post", content: "this is the fist post's content"},
    //     {title:"Second Post", content: "this is the second post's content"},
    //     {title:"Third Post", content: "this is the third post's content"}
    // ]

    @Input() posts: PostProps[] = [];
}