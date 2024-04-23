import React from 'react'
import { RxSlash } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const OtherHeaderPagesLink = ({ otherHeaderPagesLink }) => {
    return (
        <div className="other_header_pages_link container">
            <Link to='/'>Anasayfa</Link>
            <RxSlash />
            <p>{otherHeaderPagesLink}</p>
        </div>
    )
}

export default OtherHeaderPagesLink