import axios from 'axios';

export function createArticle(data) {
  let url = `http://127.0.0.1:8000/api/`;

  return function (dispatch) { 
    axios.post(url, {
      title: data.title,
      content: data.content,
    })
      .then((response) => dispatch({
        type: "POST_ARTICLE",
        payload: response.data
      })).catch((response) => dispatch({
        type: "POST_ARTICLE",
        payload: "Error with the request",
        error: response
      }))
  }
}

export function updateArticle(id, data) {
  let url = `http://127.0.0.1:8000/api/${id}/`;

  return function (dispatch) { 
    axios.put(url,  {
      title: data.title,
      content: data.content,
    })
      .then((response) => dispatch({
        type: "UPDATE_ARTICLE",
        payload: response.data
      })).catch((response) => dispatch({
        type: "UPDATE_ARTICLE",
        payload: "Error with the request",
        error: response
      }))
  }
}
