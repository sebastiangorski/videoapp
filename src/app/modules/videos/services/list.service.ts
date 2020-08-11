import { Injectable } from '@angular/core';
import { YouTubeVideo } from '../../common/models/youtube.model';
import { VimeoVideo } from '../../common/models/vimeo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public videosList$: BehaviorSubject<(YouTubeVideo | VimeoVideo)[]> = new BehaviorSubject<(YouTubeVideo | VimeoVideo)[]>([]);

  demoList: (YouTubeVideo | VimeoVideo)[] = [
    {
      type: 'youtube',
      videoID: 'ODDTeIxFpyA',
      snippet: {
        title: 'YouTube Video Title 1',
        publishedAt: new Date(),
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/ODDTeIxFpyA/mqdefault.jpg',
            width: 320,
            height: 180
          }
        }
      },
      statistics: {
        viewCount: '23423',
        likeCount: '456',
      },
      addedAt: new Date('2020-08-17T01:11:00'),
      favorite: true,
    },
    {
      type: 'youtube',
      videoID: 'oLb5ZxQXJkU',
      snippet: {
        title: 'YouTube Video Title 2',
        publishedAt: new Date(),
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/oLb5ZxQXJkU/mqdefault.jpg',
            width: 320,
            height: 180
          }
        }
      },
      statistics: {
        viewCount: '223423',
        likeCount: '4456',
      },
      addedAt: new Date('2020-07-17T03:24:00'),
    },
    {
      type: 'vimeo',
      videoID: '934461428',
      name: 'Vimeo Video Title 1',
      pictures: {
        sizes: {
          width: 1920,
          height: 1080,
          link: 'https://i.vimeocdn.com/video/934461428_1920x1080.jpg?r=pad'
        }
      },
      stats: {
        plays: 15323,
      },
      metadata: {
        connections: {
          likes: {
            total: 4526,
          }
        }
      },
      addedAt: new Date('2020-08-12T04:21:00'),
    },
    {
      type: 'vimeo',
      videoID: '936041761',
      name: 'Vimeo Video Title 2',
      pictures: {
        sizes: {
          width: 1920,
          height: 1080,
          link: 'https://i.vimeocdn.com/video/936041761_640x360.jpg?r=pad'
        }
      },
      stats: {
        plays: 52323,
      },
      metadata: {
        connections: {
          likes: {
            total: 4526,
          }
        }
      },
      addedAt: new Date('2020-08-08T02:44:00'),
    }
  ];

  constructor() { }

  public loadDemoList(): (YouTubeVideo | VimeoVideo)[] {
    this.videosList$.next([...this.demoList]);
    return;
  }

  public clearList(): (YouTubeVideo | VimeoVideo)[] {
    this.videosList$.next([]);
    return;
  }

  public updateList(videosList): (YouTubeVideo | VimeoVideo)[] {
    this.videosList$.next([...videosList]);
    return;
  }

}
