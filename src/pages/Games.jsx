import React from 'react'
import OtherHeader from '../components/OtherHeader'
import OtherGamesInput from '../components/OtherGamesInput'
import OtherGamesCardsContainer from '../components/OtherGamesCardsContainer'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'

const Games = ({ otherPageBanner }) => {
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Oyunlar" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <OtherGamesInput />
                    <OtherGamesCardsContainer />
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

export default Games