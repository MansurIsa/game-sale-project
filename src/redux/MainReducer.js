import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        handleLoginRegister: (state, action) => {
            state.loginRegisterModal = true;
        },
        closeForm: (state, action) => {
            state.loginRegisterModal = false;
        },
        getUserObjFunc: (state, action) => {
            state.userObj = action.payload;
        },
        getHighlightProductsFunc: (state, action) => {
            state.highlightProducts = action.payload;
        },
        getProductsFunc: (state, action) => {
            state.products = action.payload;
        },
        getProductElFunc: (state, action) => {
            state.productEl = action.payload;
        },
        getSearchİnpValFunc: (state, action) => {
            state.productsSearchList = action.payload;
        },
        getMyAnnouncementsFunc: (state, action) => {
            state.myAnnouncements = action.payload;
        },
        shopCreateBtn: (state, action) => {
            state.shopCreateModal = true;
        },
        modalOverlayFunc: (state, action) => {
            state.shopCreateModal = false;
            state.announceCreateModal=false
        },
        getMyFavoriesFunc: (state, action) => {
            state.myFavories = action.payload;
        },
        setRefreshed: (state) => {
            state.refreshed = true;
        },
        isLoading: (state) => {
            state.loader = true;
        },
        stopLoading: (state) => {
            state.loader = false;
        },
        getShopListFunc: (state, action) => {
            state.shopList = action.payload;
        },



        getAuctionListFunc: (state, action) => {
            state.auctionList = action.payload;
        },
        getAuctionElFunc:  (state, action) => {
            state.auctionEl=action.payload
        },
        getNewsListFunc: (state, action) => {
            state.newsList=action.payload
        },
        getNewsElFunc:  (state, action) => {
            state.newsEl=action.payload
        },



        announceCreateBtnFunc: (state, action) => {
            state.announceCreateModal = true;
        },

        getProductListFilterFunc: (state, action) => {
            state.productListFilter=action.payload
        },
        getCategoryListFunc: (state, action) => {
            state.categoryList=action.payload
        },
        getGameCategoryFilterListFunc: (state, action) => {
            state.gameCategoryFilterList=action.payload
        },
        getProductsFilterFunc: (state, action) => {
            state.filterProducts=action.payload
        },
    }
});

export const Data = MainSlice.reducer;
export const {
    handleLoginRegister,
    closeForm,
    getUserObjFunc,
    getProductsFunc,
    getProductElFunc,
    getHighlightProductsFunc,
    getSearchİnpValFunc,
    getMyAnnouncementsFunc,
    shopCreateBtn,
    modalOverlayFunc,
    getMyFavoriesFunc,
    setRefreshed,
    isLoading,
    stopLoading,
    getShopListFunc,
    getAuctionListFunc,
    getAuctionElFunc,
    getNewsListFunc,
    getNewsElFunc,
    announceCreateBtnFunc,
    getCategoryListFunc,
    getProductListFilterFunc,
    getGameCategoryFilterListFunc,
    getProductsFilterFunc
} = MainSlice.actions;
