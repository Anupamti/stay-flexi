import { API_ENDPOINT } from "src/service/api";
import requestInstance from "src/service/request";
import * as Actions from "src/store/constants/fetchMovies.const";
import { toast } from "react-toastify";

function paramsFuction(key, data) {
    let finalParams = {}
    finalParams[`${key}`] = data
    finalParams['apikey'] = 'db70a6ef'
    return finalParams
}

/* Fucntions to store the data in the redux store after the api data is fetched*/
export function fetchSearchedMovies(payload) {
    return {
        type: Actions.SEARCH_MOVIES,
        payload,
    };
}


/* Fucntions to call api */
export function apiFetchSearchMovies(search) {

    const params = paramsFuction(API_ENDPOINT.search, search)
    return (dispatch) => {
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