import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyFavories } from '../actions/MainAction'
import OtherHeader from '../components/OtherHeader'
import OtherMyFavories from '../components/OtherMyFavories'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'

const Favories = ({otherPageBanner}) => {
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getMyFavories())
    },[dispatch])

    const {myFavories}=useSelector(state=>state.Data)

    console.log(myFavories);
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Favori İlanlarım" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <OtherMyFavories myFavories={myFavories} />
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

export default Favories