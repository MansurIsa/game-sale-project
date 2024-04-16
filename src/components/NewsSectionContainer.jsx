import React from 'react'
import NewsSectionCard from './NewsSectionCard'
import { Link } from 'react-router-dom'

const NewsSectionContainer = () => {
    return (
        <div className='auction_section_container news_section_container'>
            <Link to={''}>
                <NewsSectionCard />
            </Link>
            <Link to={''}>
                <NewsSectionCard />
            </Link>
            <Link to={''}>
                <NewsSectionCard />
            </Link>
            <Link to={''}>
                <NewsSectionCard />
            </Link>
        </div>
    )
}

export default NewsSectionContainer