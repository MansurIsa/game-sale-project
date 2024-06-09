import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'
import OtherHeader from '../components/OtherHeader'
import {getNewsEl } from '../actions/MainAction'
import DetailNewsPageContainer from '../components/DetailNewsPageContainer'

const DetailNews = ({ otherPageBanner }) => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getNewsEl(id))
    },[dispatch])

    const { newsEl } = useSelector(state => state.Data)

    console.log(newsEl);
    
    return (
        <div>
            <OtherHeader otherHeaderPagesLink={newsEl?.title} otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <DetailNewsPageContainer news={newsEl} />
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

export default DetailNews