import { Component, inject, OnInit, signal } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { BlockContentToTextPipe } from '../pipe/block-content-to-text.pipe';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [BlockContentToTextPipe, CommonModule, LoaderComponent],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  private readonly sanityService = inject(SanityService);
  private readonly router = inject(Router);

  protected posts = signal<Post[]>([]);
  protected isLoading = signal(true);

  ngOnInit() {
    this.loadPosts();
  }

  protected async loadPosts() {
    const fetchPosts = await this.sanityService.getPost();
    this.posts.set(fetchPosts);
    this.isLoading.set(false);
  }

  protected navigateToPostBySlug(slug: string) {
    this.router.navigate(['post', slug]);
  }
}
