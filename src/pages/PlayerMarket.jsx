import React from 'react'
import OtherHeader from '../components/OtherHeader'
import OtherPlayerMarketButtons from '../components/OtherPlayerMarketButtons'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'

const PlayerMarket = ({ otherPageBanner }) => {
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Oyuncu Pazarı" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <OtherPlayerMarketButtons />
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

export default PlayerMarket