import React from 'react'
import { Link } from 'react-router-dom'
import PublishersSectionCard from './PublishersSectionCard'

const PublishersSectionContainer = () => {
  return (
    <div className='publishers_section_container auction_section_container'>
        <Link to={''}>
            <PublishersSectionCard/>
        </Link>
        <Link to={''}>
            <PublishersSectionCard/>
        </Link>
        <Link to={''}>
            <PublishersSectionCard/>
        </Link>
        <Link to={''}>
            <PublishersSectionCard/>
        </Link>
        <Link to={''}>
            <PublishersSectionCard/>
        </Link>
        <Link to={''}>
            <PublishersSectionCard/>
        </Link>
    </div>
  )
}

export default PublishersSectionContainer