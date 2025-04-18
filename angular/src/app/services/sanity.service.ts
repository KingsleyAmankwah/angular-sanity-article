import { Injectable } from '@angular/core';
import { client } from '../config/sanity-client';
import { getAllPostsQuery, getPostBySlugQuery } from '../queries/posts.groq';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  async getPost() {
    try {
      return await client.fetch(getAllPostsQuery);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getPostBySlug(slug: string): Promise<Post | null> {
    try {
      const query = getPostBySlugQuery(slug);
      return await client.fetch(query);
    } catch (error) {
      console.error(`Error fetching post with slug "${slug}":`, error);
      throw error;
    }
  }
}
