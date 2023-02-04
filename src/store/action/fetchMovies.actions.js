import { API_ENDPOINT } from "src/service/api";
import requestInstance from "src/service/request";
import * as Actions from "src/store/constants/fetchMovies.const";
import { toast } from "react-toastify";

/** 
 * paramsFuction makes params based on the api request
 * */
function paramsFuction(key, data) {
    let finalParams = {}
    finalParams[`${key}`] = data
    finalParams['apikey'] = 'db70a6ef'
    return finalParams
}

/** 
 * Function to store the data in the redux store after the api data is fetched
 * */
export function fetchSearchedMovies(payload) {
    return {
        type: Actions.SEARCH_MOVIES,
        payload,
    };
}

export function fetchMoviesId(payload) {
    return {
        type: Actions.MOVIE_DETAILS,
        payload,
    };
}


export function startLoader(payload) {
    return {
        type: Actions.START_LOADER,
        payload,
    };
}


/** 
 * Fucntions to call api 
 * */
export function apiFetchSearchMovies(search) {
    const params = paramsFuction(API_ENDPOINT.search, search)

    return (dispatch) => {
        dispatch(startLoader())
        requestInstance
            .get('', { params })
            .then((response) => {
                dispatch(fetchSearchedMovies(response?.data?.Search));
            })
            .catch((err) => {
                console.log(err);
                toast.err(err)
            });
    };
}

export function apiFetchMovieDetails(movieId) {
    const params = paramsFuction(API_ENDPOINT?.movieId, movieId)
    return (dispatch) => {
        dispatch(startLoader())
        requestInstance
            .get('', { params })
            .then((response) => {
                dispatch(fetchMoviesId(response?.data));
            })
            .catch((err) => {
                console.log(err);
                toast.err(err)
            });
    };
}