import { Component, inject, OnInit, signal } from '@angular/core';
import { SanityService } from '../service/sanity.service';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlockContentToTextPipe } from '../pipe/block-content-to-text.pipe';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-view-post',
  imports: [CommonModule, BlockContentToTextPipe, LoaderComponent],
  templateUrl: './view-post.component.html',
})
export class ViewPostComponent implements OnInit {
  private readonly sanityService = inject(SanityService);
  private readonly route = inject(ActivatedRoute);

  protected post = signal<Post | null>(null);
  protected isLoading = signal(true);

  ngOnInit() {
    this.fetchPostDetails();
  }

  protected async fetchPostDetails() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const response = await this.sanityService.getPostBySlug(slug);
    this.post.set(response);
    this.isLoading.set(false);
  }
}
