import axios from "axios";
export default function fetchArticles() {
    return function(dispatch) {
        dispatch({
            type : "FETCH_ARTICLES", 
            payload: axios.get("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=28f2a4c77ed74779bab417860eeec110")
        });
  }
}