import React from 'react'
import AuctionSectionCard from './AuctionSectionCard'
import { Link } from 'react-router-dom'

const AuctionSectionContainer = () => {
    return (
        <div className='auction_section_container'>
            <Link to={''}>
                <AuctionSectionCard />
            </Link>

            <Link to={''}>
                <AuctionSectionCard />
            </Link>
            <Link to={''}>
                <AuctionSectionCard />
            </Link>
            <Link to={''}>
                <AuctionSectionCard />
            </Link>
            <Link to={''}>
                <AuctionSectionCard />
            </Link>
            <Link to={''}>
                <AuctionSectionCard />
            </Link>
        </div>
    )
}

export default AuctionSectionContainer