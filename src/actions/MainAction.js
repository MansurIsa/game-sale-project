import axios from "axios";
import { baseUrl } from "../MAIN_API";
import { getHighlightProductsFunc, getMyAnnouncementsFunc, getMyFavoriesFunc, getProductElFunc, getProductsFunc, getSearchİnpValFunc, getUserObjFunc, isLoading, stopLoading } from "../redux/MainReducer";

export const getUserObj = (email) => async dispatch => {
    // dispatch(isLoading())
    return await axios.get(`${baseUrl}accounts/detail/${email}`)
        .then(resp => {
            dispatch(getUserObjFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getHighlightProducts = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/highlighted/list`)
        .then(resp => {
            dispatch(getHighlightProductsFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getProducts = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/list`)
        .then(resp => {
            dispatch(getProductsFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getProductEl = (id) => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/${id}`)
        .then(resp => {
            dispatch(getProductElFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getSearchİnpVal = (name) => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/search/${name}`)
        .then(resp => {
            dispatch(getSearchİnpValFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getMyAnnouncements = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/list-my-products`)
        .then(resp => {
            dispatch(getMyAnnouncementsFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getMyFavories = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/list-my-favorites`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token_game')}`
        },
    })
        .then(resp => {
            dispatch(getMyFavoriesFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}
