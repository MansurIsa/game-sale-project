import React from 'react'
import MainSecondCard from './MainSecondCard'
import { Link } from 'react-router-dom'

const OtherMyAnnouncements = ({ myAnnouncements }) => {
  return (
    <div className='main_second_container container'>
      {
        myAnnouncements?.map((data, i) => {
          return (
            <Link to={`/${data.title}/${data.id}`}>
              <MainSecondCard key={i} data={data} />
            </Link>
          )
        })
      }


    </div>
  )
}

export default OtherMyAnnouncements