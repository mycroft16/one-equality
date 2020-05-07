import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ApiPublicService } from '../api/api-public.service';
import { Observable } from 'rxjs';
import { INewPost, IPostFull, IPostListItem } from '../../interfaces/posts.interface';

@Injectable()
export class PostsService {
    constructor(private apiService: ApiService, private apiPublicService: ApiPublicService) { }

    public createPost(postObj: INewPost): Observable<boolean> {
        return this.apiService.post(
            'Posts/Create',
            {
                body: postObj,
            }
        );
    }


    public fetchPost(id: number): Observable<IPostFull> {
        return this.apiPublicService.get<IPostFull>(
            'Posts/FetchPost',
            {
                params: {
                    id,
                }
            }
        );
    }


    public fetchPostList(): Observable<IPostListItem[]> {
        return this.apiPublicService.get<IPostListItem[]>(
            'Posts/FetchPostList'
        );
    }

    
    public fetchPostListByTag(tag: string): Observable<IPostListItem[]> {
        return this.apiPublicService.get<IPostListItem[]>(
            'Posts/FetchPostListByTag',
            {
                params: {
                    tag,
                }
            }
        );
    }


    public fetchSpotlightList(): Observable<IPostListItem[]> {
        return this.apiPublicService.get<IPostListItem[]>(
            'Posts/FetchSpotlightList'
        );
    }


    public fetchTrendingList(): Observable<IPostListItem[]> {
        return this.apiPublicService.get<IPostListItem[]>(
            'Posts/FetchTrendingList'
        );
    }
}