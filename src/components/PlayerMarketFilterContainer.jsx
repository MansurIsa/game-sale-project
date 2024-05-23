import React from 'react'

const PlayerMarketFilterContainer = () => {
    return (
        <div className='player_market_filter_container'>
            <div className="player_market_filter_inner_container">
                <h3>Kategoriler</h3>
                <input className='player_market_filter_search_inp' type="search" placeholder='Arama yapın...' />
                <div className="player_market_filter_inp_checkbox_parent_container">
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Valorant</p>
                    </div>
                </div>

            </div>

            <div className="player_market_filter_inner_container">
                <h3>Fiyat Aralığı (₺)</h3>
                <div className='player_market_filter_much_many_price'>
                    <input type="text" placeholder='En az' />
                    <input type="text" placeholder='En çok' />
                </div>
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Satıcı Filtrele</h3>
                <input className='player_market_filter_search_inp' type="search" placeholder='Satıcı ara...' />
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Kelime Filtrele</h3>
                <input className='player_market_filter_search_inp' type="search" placeholder='Kelime yaz...' />
            </div>

            <div className="player_market_filter_inner_container">
                <h3>Diğer Özellikler</h3>
                <div className="player_market_filter_inp_checkbox_parent_container player_market_filter_inp_checkbox_parent_end_container">
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Çevrimçi Satıcı</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Otomatik Teslimat</p>
                    </div>
                    <div className="player_market_filter_inp_checkbox_container">
                        <input type="checkbox" />
                        <p>Güvenilir Satıcı</p>
                    </div>



                </div>

            </div>
            <button>Filtre Uygula</button>

        </div>
    )
}

export default PlayerMarketFilterContainer