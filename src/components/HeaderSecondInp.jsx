import React, { useState, useEffect, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { getSearchİnpVal } from '../actions/MainAction';
import HeaderSearchInpProducts from './HeaderSearchInpProducts';

const HeaderSecondInp = () => {
    const [searchİnpValue, setSearchİnpValue] = useState("");
    const [showResults, setShowResults] = useState(false);
    const inputRef = useRef(null);
    const resultsRef = useRef(null);

    const dispatch = useDispatch();
    const productsSearchList = useSelector(state => state.Data.productsSearchList);

    const searchİnpValueFunc = (e) => {
        setSearchİnpValue(e.target.value);
    };

    const searchInpSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearchİnpVal(searchİnpValue));
        setShowResults(true);
    };

    const handleClickOutside = (event) => {
        if (
            resultsRef.current && 
            !resultsRef.current.contains(event.target) &&
            inputRef.current && 
            !inputRef.current.contains(event.target)
        ) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (productsSearchList.length > 0) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    }, [productsSearchList]);

    return (
        <form onSubmit={searchInpSubmit} className='header_second_inp_container'>
            <button type="submit"><CiSearch className='header_second_search' /></button>
            <input
                ref={inputRef}
                value={searchİnpValue}
                onChange={searchİnpValueFunc}
                type="search"
                placeholder='Oyun Ara...'
            />
            {showResults && (
                <div ref={resultsRef}>
                    <HeaderSearchInpProducts />
                </div>
            )}
        </form>
    );
};

export default HeaderSecondInp;
