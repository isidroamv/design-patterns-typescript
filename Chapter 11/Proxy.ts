interface ThirdPartyYouTubeLib {
    getVideos(): string[];
    getVideoInfo(videoId: string): string;
    dowloadVideo(videoId: string): string;
}

// The proxy class
export class YouTubeLib implements ThirdPartyYouTubeLib {
    getVideos(): string[] {
        // Send a request to YouTube
        console.log("Fetching videos...");
        return ["video1", "video2", "video3"];
    }
    getVideoInfo(videoId: string): string {
        // Get metadata from YouTube
        console.log("Fetching video info...");
        return "video info";
    }
    dowloadVideo(videoId: string): string {
        // Download video file from YouTube
        console.log("Downloading video...");
        return "video.mp4";
    }
}

export class CachedYouTubeLib implements ThirdPartyYouTubeLib {
    private lib: ThirdPartyYouTubeLib;
    private cacheVideos: { [key: string]: string[] } = {};
    private cacheMetaData: { [key: string]: string } = {};
    private cacheVideoFile: { [key: string]: string } = {};

    constructor(lib: ThirdPartyYouTubeLib) {
        this.lib = lib;
    }

    getVideos(): string[] {
        if (!this.cacheVideos["videos"]) {
            this.cacheVideos["videos"] = this.lib.getVideos();
        } else {
            console.log("Fetching videos from cache...");
        }
        return this.cacheVideos["videos"];
    }

    getVideoInfo(videoId: string): string {
        if (!this.cacheMetaData[videoId]) {
            this.cacheMetaData[videoId] = this.lib.getVideoInfo(videoId);
        } else {
            console.log("Fetching video info from cache...");
        }
        return this.cacheMetaData[videoId];
    }

    dowloadVideo(videoId: string): string {
        if (!this.cacheVideoFile[videoId]) {
            this.cacheVideoFile[videoId] = this.lib.dowloadVideo(videoId);
        } else {
            console.log("Fetching video file from cache...");
        }
        return this.cacheVideoFile[videoId];
    }
}

export class YouTubeManager {
    private lib: ThirdPartyYouTubeLib;

    constructor(lib: ThirdPartyYouTubeLib) {
        this.lib = lib;
    }

    renderVideoPage(id: string) {
        this.lib.getVideoInfo(id);
    }

    renderListPage() {
        this.lib.getVideos();
    }

    reactOnUserInput() {
        this.renderListPage();
        this.renderVideoPage("123");
    }
}
