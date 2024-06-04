import React from 'react'
import { Link } from 'react-router-dom'
import MainSecondCard from './MainSecondCard'

const OtherMyFavories = ({myFavories}) => {
    return (
        <div className='main_second_container container'>
            {
                myFavories?.map((data, i) => {
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

export default OtherMyFavories