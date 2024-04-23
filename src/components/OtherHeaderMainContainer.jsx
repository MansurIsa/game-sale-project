import React from 'react'

const OtherHeaderMainContainer = ({otherPageBanner}) => {
    return (
        <div className='other_header_main_container' style={{ background: `url(${otherPageBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}>
            <div className="other_bg_shadow">
                

            </div>

        </div>
    )
}

export default OtherHeaderMainContainer