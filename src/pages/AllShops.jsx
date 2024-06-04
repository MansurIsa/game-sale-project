import React from 'react'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'
import OtherHeader from '../components/OtherHeader'
import OtherGamesInput from '../components/OtherGamesInput'
import AllShopsSearchContainer from '../components/AllShopsSearchContainer'
import AllShopsContainer from '../components/AllShopsContainer'

const AllShops = ({otherPageBanner}) => {
  return (
    <div>
    <OtherHeader otherHeaderPagesLink="Tüm mağazalar" otherPageBanner={otherPageBanner} />
    <main>
        <section>
             <AllShopsSearchContainer />
             <AllShopsContainer/>
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

export default AllShops