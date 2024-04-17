import React from 'react'
import FooterSecondCard from './FooterSecondCard'
import FooterSecondLogoCard from './FooterSecondLogoCard'

const FooterSecondContainer = () => {
    return (
        <div className='footer_second_container'>
            <FooterSecondLogoCard />
            <div className="footer_second_inner_container">
                <FooterSecondCard />
                <FooterSecondCard />
                <FooterSecondCard />
                <FooterSecondCard />
                <FooterSecondCard />
            </div>

        </div>
    )
}

export default FooterSecondContainer