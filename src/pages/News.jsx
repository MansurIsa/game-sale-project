import React from 'react'
import FooterEndContainer from '../components/FooterEndContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterFirstContainer from '../components/FooterFirstContainer'
import OtherHeader from '../components/OtherHeader'
import OtherNewsCardsContainer from '../components/OtherNewsCardsContainer'

const News = ({ otherPageBanner }) => {
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Haberler" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    {/* <OtherGamesInput /> */}
                    <h2 className="section_header">Tüm haberler</h2>
                    <OtherNewsCardsContainer />
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

export default News