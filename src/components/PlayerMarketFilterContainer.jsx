import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList, getGameCategoryFilterList, getProductsFilter } from '../actions/MainAction';
import axios from 'axios';
import { baseUrl } from '../MAIN_API';

const PlayerMarketFilterContainer = () => {
    const dispatch = useDispatch();
    const { categoryList, gameCategoryFilterList} = useSelector(state => state.Data);

    const [muchVal, setMuchVal] = useState("");
    const [manyVal, setManyVal] = useState("");
    const [sellerVal, setSellerVal] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [selectedProperties, setSelectedProperties] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(getCategoryList());
        if (categoryId) {
            dispatch(getGameCategoryFilterList(categoryId));
        }
    }, [dispatch, categoryId]);

    const muchValHandler = (e) => {
        setMuchVal(e.target.value);
    };

    const manyValHandler = (e) => {
        setManyVal(e.target.value);
    };

    const sellerValHandler = (e) => {
        setSellerVal(e.target.value);
    };

    const categoryFilter = (e) => {
        setCategoryId(e.target.value);
        dispatch(getGameCategoryFilterList(e.target.value));
    };

    const categoryPropertyFilter = (e) => {
        const propertyId = parseInt(e.target.id);
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedProperties([...selectedProperties, propertyId]);
        } else {
            setSelectedProperties(selectedProperties.filter(id => id !== propertyId));
        }
    };

    const filterBtnHandle =() => {
        const queryParams = new URLSearchParams();
        if (muchVal) queryParams.append("min_price", muchVal);
        if (manyVal) queryParams.append("max_price", manyVal);
        if (sellerVal) queryParams.append("seller_name", sellerVal);
        if (selectedProperties.length > 0) {
            selectedProperties.forEach(prop => queryParams.append("properties", prop));
        }

        console.log(queryParams.toString());

        // const url = `${baseUrl}/product/list/filter?${queryParams.toString()}`;
        dispatch(getProductsFilter(queryParams.toString()))

      
        // try {
        //     const response = await axios.get(url, {
        //         headers: {
        //             'Accept': 'application/json'
        //         }
        //     });

        //     console.log(response.data);

        //     if (response.status === 200) {
        //         setProducts(response.data);
        //     } else {
        //         console.error("Filter request failed:", response.statusText);
        //     }
        // } catch (error) {
        //     console.error("Error in filter request:", error);
        // }
    };

    

    return (
        <div className='player_market_filter_container'>
            <div className="player_market_filter_inner_container">
                <h3>Kategoriler</h3>
                <input className='player_market_filter_search_inp' type="search" placeholder='Arama yapın...' />
                <div className="player_market_filter_inp_checkbox_parent_container">
                    <select onChange={categoryFilter}>
                        <option value="">Kateqoriya seçin</option>
                        {
                            categoryList?.map((data, i) => (
                                <option key={i} value={data.id}>{data.title}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="player_market_filter_inner_container">
                {
                    gameCategoryFilterList?.map((data, i) => (
                        <div key={i} className="player_market_filter_inp_checkbox_category_filter_container">
                            <h3>{data?.name}</h3>
                            <div className="player_market_filter_inp_checkbox_category_filter_inner_container">
                                {
                                    data?.values?.map((val, i) => (
                                        <div key={i} className="player_market_filter_inp_checkbox_container">
                                            <input onChange={categoryPropertyFilter} id={val?.id} type="checkbox" />
                                            <label htmlFor={val?.id}>{val?.value}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Fiyat Aralığı (₺)</h3>
                <div className='player_market_filter_much_many_price'>
                    <input value={muchVal} onChange={muchValHandler} type="number" placeholder='En az' />
                    <input value={manyVal} onChange={manyValHandler} type="number" placeholder='En çox' />
                </div>
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Satıcı Filtrele</h3>
                <input value={sellerVal} onChange={sellerValHandler} className='player_market_filter_search_inp' type="search" placeholder='Satıcı ara...' />
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Kelime Filtrele</h3>
                <input className='player_market_filter_search_inp' type="search" placeholder='Kelime yaz...' />
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Diğer Özellikler</h3>
                <div className="player_market_filter_inp_checkbox_parent_container player_market_filter_inp_checkbox_parent_end_container">
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Çevrimçi Satıcı</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Otomatik Teslimat</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Güvenilir Satıcı</p>
                    </div>
                </div>
            </div>
            <button onClick={filterBtnHandle}>Filtre Uygula</button>

          
        </div>
    );
};

export default PlayerMarketFilterContainer;
