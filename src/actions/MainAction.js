import axios from "axios";
import { baseUrl } from "../MAIN_API";
import { getAuctionElFunc, getAuctionListFunc, getCategoryListFunc, getGameCategoryFilterListFunc, getHighlightProductsFunc, getMyAnnouncementsFunc, getMyFavoriesFunc, getNewsElFunc, getNewsListFunc, getProductElFunc, getProductListFilterFunc, getProductsFilterFunc, getProductsFunc, getSearchİnpValFunc, getShopListFunc, getUserObjFunc, isLoading, stopLoading } from "../redux/MainReducer";

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


export const getShopList = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}accounts-shop/list`)
        .then(resp => {
            dispatch(getShopListFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}















export const getAuctionList = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}auction/list`)
        .then(resp => {
            dispatch(getAuctionListFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}


export const getAuctionEl = (id) => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}auction/detail/${id}`)
        .then(resp => {
            dispatch(getAuctionElFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}



export const getNewsList = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}blog/list`)
        .then(resp => {
            dispatch(getNewsListFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}


export const getNewsEl = (id) => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}blog/retrieve/${id}`)
        .then(resp => {
            dispatch(getNewsElFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}


export const getProductListFilter = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}product/list/filter`)
        .then(resp => {
            dispatch(getProductListFilterFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}


export const getCategoryList = () => async dispatch => {
    dispatch(isLoading());
    return await axios.get(`${baseUrl}game-category/list`)
        .then(resp => {
            dispatch(getCategoryListFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}

export const getGameCategoryFilterList= (id) => async dispatch => {
    // dispatch(isLoading());
    return await axios.get(`${baseUrl}game-category/filter/list/${id}`)
        .then(resp => {
            dispatch(getGameCategoryFilterListFunc(resp.data));
            // dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            // dispatch(stopLoading());
        });
}




export const getProductsFilter = (test) => async dispatch => {
    dispatch(isLoading());
    return await axios.get(test?`${baseUrl}/product/list/filter?${test}`: `${baseUrl}/product/list/filter`)
        .then(resp => {
            dispatch(getProductsFilterFunc(resp.data));
            dispatch(stopLoading());
        }).catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
}