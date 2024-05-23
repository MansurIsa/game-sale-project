import React from 'react'
import OtherHeader from '../components/OtherHeader'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'
import PlayerMarketFilterContainer from '../components/PlayerMarketFilterContainer'
import PlayerMarketFilterCardsContainer from '../components/PlayerMarketFilterCardsContainer'

const PlayerMarket = ({ otherPageBanner }) => {
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Oyuncu Pazarı" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <h2 className="section_header">Oyuncu Pazarı Vitrini</h2>
                    <div className="player_market_section_first_container container">
                        <PlayerMarketFilterContainer/>
                        <PlayerMarketFilterCardsContainer/>

                    </div>
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