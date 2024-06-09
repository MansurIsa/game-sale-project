import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'
import OtherHeader from '../components/OtherHeader'
import { getAuctionEl } from '../actions/MainAction'
import DetailAuctionPageSectionFirstContainer from '../components/DetailAuctionPageSectionFirstContainer'

const DetailAuction = ({ otherPageBanner }) => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAuctionEl(id))
    },[dispatch])

    const { auctionEl } = useSelector(state => state.Data)

    console.log(auctionEl);

    return (
        <div>
            <OtherHeader otherHeaderPagesLink={auctionEl?.title} otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <DetailAuctionPageSectionFirstContainer auction={auctionEl} />
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

export default DetailAuction