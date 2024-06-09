import React from 'react'
import FooterEndContainer from '../components/FooterEndContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterFirstContainer from '../components/FooterFirstContainer'
import OtherHeader from '../components/OtherHeader'
import OtherAuctionsCardsContainer from '../components/OtherAuctionsCardsContainer'

const Auctions = ({ otherPageBanner }) => {
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Açık Artırmalar" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    {/* <OtherGamesInput /> */}
                    <h2 className="section_header">Tüm Açık Artırmalar</h2>
                    <OtherAuctionsCardsContainer />
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

export default Auctions