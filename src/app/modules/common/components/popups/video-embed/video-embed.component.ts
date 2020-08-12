import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  safeYouTubeUrl;
  safeVimeoUrl;
  videoID;
  isYouTube: boolean;

  constructor(public dialogRef: MatDialogRef<VideoEmbedComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private sanitizer: DomSanitizer) {

    this.videoID = this.data.id;
    this.safeYouTubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoID}`);
    this.safeVimeoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.videoID}`);

  }

  ngOnInit(): void {
    this.isYouTube = this.data.type === 'youtube';
  }

}
