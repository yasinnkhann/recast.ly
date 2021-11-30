import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    contentType: 'application/json',
    data: {
      q: query,
      key: API_KEY
    },
    success: function(data) {
      callback(data);
    },
    error: function(error) {
      callback(error);
    }
  });
};

export default searchYouTube;
