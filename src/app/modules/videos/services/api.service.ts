import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.httpClient.get<YouTubeVideo>(this.configService.get('youTubeApiUrl') + `?part=snippet&part=statistics` + `&id=${id}&key=` + this.configService.get('youTubeApiKey')).pipe(
        map(result => new YouTubeVideo(result.items[0]))
    );
  }

  getVimeoVideo(id): Observable<VimeoVideo> {
    return this.httpClient.get<VimeoVideo>(this.configService.get('vimeoApiUrl') + `/${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.configService.get('vimeoApiAccessToken'),
      })
    }).pipe(
        map(result => new VimeoVideo(result))
    );
  }
}
