import { YouTubeManager, YouTubeLib, CachedYouTubeLib } from "./Proxy";

// Client code using the proxy pattern
const youTubeService = new YouTubeLib();
const youTubeProxy = new CachedYouTubeLib(youTubeService);
const manager = new YouTubeManager(youTubeProxy);

// The first attempt gets the data from the youTubeService
manager.reactOnUserInput();

// The second attempt gets the data from the cache
manager.reactOnUserInput();