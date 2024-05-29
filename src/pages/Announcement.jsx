import React, { useEffect } from 'react'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'
import OtherHeader from '../components/OtherHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getMyAnnouncements } from '../actions/MainAction'
import OtherMyAnnouncements from '../components/OtherMyAnnouncements'

const Announcement = ({otherPageBanner}) => {

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getMyAnnouncements())
    },[dispatch])

    const {myAnnouncements}=useSelector(state=>state.Data)



    return (
        <div>
            <OtherHeader otherHeaderPagesLink="İlanlarım" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    {/* <OtherGamesInput /> */}
                    <h2 className="section_header">İlanlarım</h2>
                    {/* <OtherGamesCardsContainer /> */}
                    <OtherMyAnnouncements myAnnouncements={myAnnouncements}/>
                </section>
            </main>
            <footer>
                <div className="footer_parent_container">
                    <FooterFirstContainer />
                    <FooterSecondContainer />
                    <FooterThirdContainer />
                </div>
                <FooterEndContainer />

            </footer>
        </div>
    )
}

export default Announcement