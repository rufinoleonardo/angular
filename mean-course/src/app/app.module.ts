import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostList } from './posts/post-list/post-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostsService } from './posts/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync(),
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
