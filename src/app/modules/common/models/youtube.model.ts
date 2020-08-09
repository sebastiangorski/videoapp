export interface YouTubeVideo {
    type: string;
    id: string;
    videoID: string;
    snippet: {
        title: string;
        publishedAt: Date;
        thumbnails: {
            medium: {
                url: string;
                width: number; // 320
                height: number; // 180
            }
        }
    };
    statistics: {
        viewCount: string;
        likeCount: string;
    };
    addedAt: Date;
    favorite?: boolean;
}