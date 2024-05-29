import axios from "axios"
import { baseUrl } from "../MAIN_API";
import { getHighlightProductsFunc, getMyAnnouncementsFunc, getProductElFunc, getProductsFunc, getSearchİnpValFunc, getUserObjFunc } from "../redux/MainReducer";


export const getUserObj=(email)=>async dispatch=>{
    // dispatch(headerLoading())
    return await axios.get(`${baseUrl}accounts/detail/${email}`)
    .then(resp=>{
        dispatch(getUserObjFunc(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getHighlightProducts=()=>async dispatch=>{
    return await axios.get(`${baseUrl}product/highlighted/list`)
    .then(resp=>{
        dispatch(getHighlightProductsFunc(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getProducts=()=>async dispatch=>{
    return await axios.get(`${baseUrl}product/list`)
    .then(resp=>{
        dispatch(getProductsFunc(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getProductEl=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}product/${id}`)
    .then(resp=>{
        dispatch(getProductElFunc(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSearchİnpVal=(name)=>async dispatch=>{
    return await axios.get(`${baseUrl}product/search/${name}`)
    .then(resp=>{
        dispatch(getSearchİnpValFunc(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getMyAnnouncements=()=>async dispatch=>{
    return await axios.get(`${baseUrl}product/list-my-products`)
    .then(resp=>{
        dispatch(getMyAnnouncementsFunc(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}