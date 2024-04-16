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
          <NewsSectionContainer />
          <button className='view_all'>Tüm Yayıncılar</button>
        </section>



      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Home