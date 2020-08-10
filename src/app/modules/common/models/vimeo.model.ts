export interface VimeoVideo {
    type: string;
    videoID: string;
    name: string;
    pictures: {
        sizes: {
            width: number;
            height: number;
            link: string;
        }
    };
    stats: {
        plays: number;
    };
    metadata: {
        connections: {
            likes: {
                total: number;
            }
        }
    };
    addedAt: Date;
    favorite?: boolean;
}
