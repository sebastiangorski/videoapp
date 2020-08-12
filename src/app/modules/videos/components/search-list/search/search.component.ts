import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from '../../../../common/components/popups/info-popup/info-popup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getVideoId } from 'get-video-id';
import { stringify } from '@angular/compiler/src/util';
import { ApiService } from '../../../services/api.service';
import { ListService } from '../../../services/list.service';
import { YouTubeVideo } from '../../../../common/models/youtube.model';
import { VimeoVideo } from '../../../../common/models/vimeo.model';
export declare let require: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  inputForm: FormGroup;
  getVideoId = require('get-video-id');
  videosList: (YouTubeVideo | VimeoVideo)[] = [];

  constructor(public matDialog: MatDialog,
              private formBuilder: FormBuilder,
              private apiService: ApiService,
              private listService: ListService) { }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      input: ['', Validators.required]
    });
  }

  openInfoPopup(): void {
    this.matDialog.open(InfoPopupComponent);
  }

  onSubmit(): void {
    const link = this.inputForm.value.input;
    const id = this.getVideoId(link);

    if (id.service === 'youtube') {
      this.apiService.getYouTubeVideo(id.id).subscribe(response => {

        const newYouTubeVideo = new YouTubeVideo({
          type: 'youtube',
          videoID: id.id,
          snippet: {
            title: response.snippet.title,
            publishedAt: response.snippet.publishedAt,
            thumbnails: {
              medium: {
                url: response.snippet.thumbnails.medium.url,
                width: response.snippet.thumbnails.medium.width,
                height: response.snippet.thumbnails.medium.height
              }
            }
          },
          statistics: {
            viewCount: response.statistics.viewCount,
            likeCount: response.statistics.likeCount
          },
          addedAt: Date.now(),
          favorite: false
        });

        this.videosList.push(newYouTubeVideo);
        this.listService.updateList(this.videosList);
      }, error => {
        console.log(error);
      });
    }

    if (id.service === 'vimeo') {
      this.apiService.getVimeoVideo(id.id).subscribe(response => {

        const newVimeoVideo = new VimeoVideo({
          type: 'vimeo',
          videoID: id.id,
          name: response.name,
          pictures: {
            sizes: response.pictures.sizes,
          },
          stats: {
            plays: response.stats.plays
          },
          metadata: {
            connections: {
              likes: {
                total: response.metadata.connections.likes.total
              }
            }
          },
          addedAt: Date.now(),
          favorite: false,
          });

        this.videosList.push(newVimeoVideo);
        this.listService.updateList(this.videosList);
      }, error => {
        console.log(error);
      });
    }

    this.inputForm.reset();

  }
}
