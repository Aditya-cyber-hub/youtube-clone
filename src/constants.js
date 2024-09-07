const YOUTUBE_API_KEY = "AIzaSyAtjA8H_3YfQrwC4dfIZYO_Zmf7ZcX7bAg";
// const YOUTUBE_API_KEY = "AIzaSyCOYId38JvBy-ESuGCEntck1or4CBWtFGg";
// const SEARCH_API_KEY = "cfa10522e4ae6987c390ab72e9393908";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  YOUTUBE_API_KEY +
  "&maxResults=50";

export const YOUTUBE_COMMENTS_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id&part=snippet&part=replies&key=" +
  YOUTUBE_API_KEY +
  "videoId=";

// export const YOUTUBE_SEARCH_API_URL =
// "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iphone";

export const YOUTUBE_GET_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  YOUTUBE_API_KEY +
  "&q=";

// export const SUGGESTIONS_URL =
//   "https://api.addsearch.com/v1/suggest/" + SEARCH_API_KEY + "?term=";
