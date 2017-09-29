export default function reducer(state={articles:[], fetching: false, fetched: false, error: {}}, action) {
    switch(action.type) {
        case "FETCH_ARTICLES_PENDING": {
            return {...state, fetching: true};
        }
        case "FETCH_ARTICLES_FULFILLED": {
            return {...state, fetching: false, articles: action.payload.data.articles};
        }
        case "FETCH_ARTICLES_REJECTED": {
            return {...state, fetching: false, error: action.payload};
        }
        default : {
            return state;
        }
    }
}