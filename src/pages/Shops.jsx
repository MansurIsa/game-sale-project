import React from 'react'
import FooterEndContainer from '../components/FooterEndContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterFirstContainer from '../components/FooterFirstContainer'
import OtherHeader from '../components/OtherHeader'
import ShopCreateBtns from '../components/ShopCreateBtns'
import ForwardShops from '../components/ForwardShops'
import { useSelector } from 'react-redux'
import ShopCreateModal from '../components/modals/ShopCreateModal'

const Shops = ({ otherPageBanner }) => {

    const {shopCreateModal}=useSelector(state=>state.Data)
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Mağazalar" otherPageBanner={otherPageBanner} />
            <main>

                <ShopCreateBtns />

                <section>
                    <h2 className="section_header">ÖNE ÇIKAN MAĞAZALAR</h2>
                    <ForwardShops/>
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

            {shopCreateModal && <ShopCreateModal/>}
        </div>
    )
}

export default Shops