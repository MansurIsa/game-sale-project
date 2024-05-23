import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OtherHeader from '../components/OtherHeader';
import DetailPageSectionFirstContainer from '../components/DetailPageSectionFirstContainer';
import FooterFirstContainer from '../components/FooterFirstContainer';
import FooterSecondContainer from '../components/FooterSecondContainer';
import FooterThirdContainer from '../components/FooterThirdContainer';
import FooterEndContainer from '../components/FooterEndContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductEl } from '../actions/MainAction';

const DetailProduct = ({ otherPageBanner }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { productEl } = useSelector(state => state.Data)
    console.log(id);
    // const {products}=useSelector(state=>state.Data)
    // const product = products.find((product) => product.title === title);

    useEffect(() => {
        dispatch(getProductEl(id))
    }, [dispatch])

    return (
        <div>
            <OtherHeader otherHeaderPagesLink={productEl.title} otherPageBanner={otherPageBanner} />
            <main>
                <section>
                    <DetailPageSectionFirstContainer product={productEl} />
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

export default DetailProduct