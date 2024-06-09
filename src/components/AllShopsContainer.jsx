import React, { useEffect } from 'react'
import AllShopsCard from './AllShopsCard'
import { useDispatch, useSelector } from 'react-redux'
import { getShopList } from '../actions/MainAction'

const AllShopsContainer = () => {


  const dispatch=useDispatch()
  const {shopList}=useSelector(state=>state.Data)

  useEffect(()=>{
    dispatch(getShopList())
  },[dispatch])

  console.log(shopList);

  return (
    <div className='container all_shops_container'>
      {
        shopList?.map((data,i)=>{
          return <AllShopsCard key={i} data={data}/>
        })
      }
        
        
    </div>
  )
}

export default AllShopsContainer