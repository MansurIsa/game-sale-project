import React from 'react'
// import HeaderHead from '../components/HeaderHead'
import HeaderFirstContainer from '../components/HeaderFirstContainer'
import HeaderSecondContainer from '../components/HeaderSecondContainer'
import HeaderThirdContainer from '../components/HeaderThirdContainer'
import HeaderFourthContainer from '../components/HeaderFourthContainer'
import HeaderFifthContainer from '../components/HeaderFifthContainer'
import MainFirstContainer from '../components/MainFirstContainer'
import MainSecondContainer from '../components/MainSecondContainer'
import AuctionSectionContainer from '../components/AuctionSectionContainer'
import NewsSectionContainer from '../components/NewsSectionContainer'
import PublishersSectionContainer from '../components/PublishersSectionContainer'
import PlayerMarketSectionContainer from '../components/PlayerMarketSectionContainer'
import FooterFirstContainer from '../components/FooterFirstContainer'
import FooterSecondContainer from '../components/FooterSecondContainer'
import FooterThirdContainer from '../components/FooterThirdContainer'
import FooterEndContainer from '../components/FooterEndContainer'

const Home = () => {
  return (
    <div>
      <header>
        <HeaderFirstContainer />
        <HeaderSecondContainer />
        <HeaderThirdContainer />
        <HeaderFourthContainer />
        <HeaderFifthContainer />
      </header>
      <main>
        <section>
          <MainFirstContainer />
        </section>
        <section>
          <MainSecondContainer />
        </section>
        <section>
          <MainFirstContainer />
        </section>
        <section className='container'>
          <h2 className="section_header">Açık Artırma</h2>
          <AuctionSectionContainer />
          <button className='view_all'>Tüm Açık Artırmalar</button>
        </section>
        <section className='container'>
          <h2 className="section_header">Haberler</h2>
          <NewsSectionContainer />
          <button className='view_all'>Tüm Haberler</button>
        </section>

        <section className='container'>
          <h2 className="section_header">Yayıncılar</h2>
          <PublishersSectionContainer />
          <button className='view_all'>Tüm Yayıncılar</button>
        </section>

        <section className='container'>
          <h2 className="section_header">Türkiye'nin En Büyük Oyuncu Pazarı</h2>
          <PlayerMarketSectionContainer />

        </section>


      </main>
      <footer>
        <div className="footer_parent_container">
          <FooterFirstContainer />
          <FooterSecondContainer/>
          <FooterThirdContainer/>
        </div>
        <FooterEndContainer/>

      </footer>
    </div>
  )
}

export default Home