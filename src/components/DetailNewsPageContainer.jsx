import React from 'react'

const DetailNewsPageContainer = ({news}) => {
  return (
    <div className='detail_news_page_container'>
        <img src={news?.cover} alt="" />
        <h3>{news?.title}</h3>
        <p>{news?.content}</p>
    </div>
  )
}

export default DetailNewsPageContainer