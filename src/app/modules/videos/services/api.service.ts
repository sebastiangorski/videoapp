import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { YouTubeVideo } from '../../common/models/youtube.model';
import { Observable } from 'rxjs';
import { VimeoVideo } from '../../common/models/vimeo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private configService: ConfigService,
              private httpClient: HttpClient) {}

  getYouTubeVideo(id): Observable<YouTubeVideo> {
    return this.httpClient.get<YouTubeVideo>(this.configService.get('youTubeApiUrl') + `?id=${id}=` + this.configService.get('youTubeApiKey')).pipe(
        map(result => new YouTubeVideo(result))
    );
  }

  getVimeoVideo(id): Observable<VimeoVideo> {
    return null;
  }
}
