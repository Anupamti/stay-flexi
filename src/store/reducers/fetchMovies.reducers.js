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

        default:
            return state;
    }
}
