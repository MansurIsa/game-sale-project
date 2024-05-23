import axios from "axios"
import { baseUrl } from "../MAIN_API";
import { getProductElFunc, getProductsFunc, getUserObjFunc } from "../redux/MainReducer";


export const getUserObj=(email)=>async dispatch=>{
    // dispatch(headerLoading())
    return await axios.get(`${baseUrl}accounts/detail/${email}`)
    .then(resp=>{
        dispatch(getUserObjFunc(resp.data))
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