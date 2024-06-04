import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Select } from 'antd';
import { Option } from 'antd/es/mentions';

const AllShopsSearchContainer = () => {
    return (
        <div className='container all_shops_search_container'>
            <form className='other_games_input'>
                <button><CiSearch className='header_second_search' /></button>
                <input type="search" placeholder='Buradan mağaza arayabilirsiniz.' />
            </form>
            <Select
                placeholder="Sıralamanızı seçin"
                style={{ width: 300, marginTop: 10}}
                // onChange={handleChange}
            >
                <Option value="manySuccess">Çok başarılı</Option>
                <Option value="muchSuccess">Az başarılı</Option>
                <Option value="aZ">Mağaza adı A-dan Z-ye</Option>
                <Option value="zA">Mağaza adı Z-den A-ya</Option>
            </Select>
        </div>
    )
}

export default AllShopsSearchContainer