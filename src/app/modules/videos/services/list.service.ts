import { Injectable } from '@angular/core';
import { YouTubeVideo } from '../../common/models/youtube.model';
import { VimeoVideo } from '../../common/models/vimeo.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public videosList: (YouTubeVideo | VimeoVideo)[];
  public demoList: (YouTubeVideo | VimeoVideo)[] = [
    {
      type: 'youtube',
      id: '1',
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
      addedAt: new Date('08/01/2020'),
    },
    {
      type: 'youtube',
      id: '2',
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
      addedAt: new Date('08/02/2020'),
    },
    {
      type: 'vimeo',
      id: '3',
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
      addedAt: new Date('08/01/2020'),
    },
    {
      type: 'vimeo',
      id: '4',
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
      addedAt: new Date('08/03/2020'),
    }
  ];

  constructor() { }

  public getDemoList(): (YouTubeVideo | VimeoVideo)[] {
    return this.demoList;
  }
}
