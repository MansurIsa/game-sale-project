import React from 'react'
import HeaderFirstContainer from './HeaderFirstContainer'
import HeaderSecondContainer from './HeaderSecondContainer'
import HeaderThirdContainer from './HeaderThirdContainer'
import OtherHeaderPagesLink from './OtherHeaderPagesLink'
import OtherHeaderMainContainer from './OtherHeaderMainContainer'

const OtherHeader = ({otherHeaderPagesLink,otherPageBanner}) => {
    return (
        <header>
            <HeaderFirstContainer />
            <HeaderSecondContainer />
            <HeaderThirdContainer />
            <OtherHeaderPagesLink otherHeaderPagesLink={otherHeaderPagesLink}/>
            <OtherHeaderMainContainer otherPageBanner={otherPageBanner}/>
        </header>
    )
}

export default OtherHeader