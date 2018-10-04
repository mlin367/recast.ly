var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('Request successful')
      callback(data.items);
    },
    error: function (error) {
      console.error('Failed request', error);
    }
  });
};

window.searchYouTube = searchYouTube;

