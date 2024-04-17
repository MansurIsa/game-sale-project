import React from 'react'

const FooterEndContainer = () => {

    let date=new Date().getFullYear()
  return (
    <div className='footer_end_container'>
        <p>Copyright © 2005 - {date} | GameSatış (Biradım Game LTD.) Gizlilik ve Çerez Politikası | Kullanıcı Sözleşmesi</p>
    </div>
  )
}

export default FooterEndContainer