import React from 'react'
import OtherHeader from '../components/OtherHeader'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'

const About = ({otherPageBanner}) => {
    return (
        <div>
            <OtherHeader otherHeaderPagesLink="Hakkımızda" otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    {/* <OtherGamesInput /> */}
                    <h2 className="section_header">Hakkımızda</h2>
                    {/* <OtherGamesCardsContainer /> */}
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

export default About