import * as Actions from "src/store/constants/fetchMovies.const";

const store = {
    response: {},
    errors: {},
    settings: {},
    componetLoader: false,
    componentProgress: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = store, action) {
    switch (action.type) {
        case Actions.SEARCH_MOVIES:
            return {
                ...state,
                searchedResults: action.payload,
                componetLoader: false,
                componentProgress: false,
            };

        case Actions.MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.payload,
                componetLoader: false,
                componentProgress: false,
            };
        case Actions.START_LOADER:
            return {
                ...state,
                componetLoader: true,
                componentProgress: false,
            };
        default:
            return state;
    }
}
