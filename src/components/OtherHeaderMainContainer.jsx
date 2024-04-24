import React from 'react'

const OtherHeaderMainContainer = ({otherPageBanner,otherHeaderPagesLink}) => {
    return (
        <div className='other_header_main_container' style={{ background: `url(${otherPageBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}>
            <div className="other_bg_shadow">
                <h1 className='other_header_title'>{otherHeaderPagesLink}</h1>

            </div>

        </div>
    )
}

export default OtherHeaderMainContainer