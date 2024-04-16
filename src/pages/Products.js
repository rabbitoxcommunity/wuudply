import React, { useState } from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'
import Plywood from '../components/Products/Plywood'
import Doors from '../components/Products/Doors'
import BlockBoard from '../components/Products/BlockBoard'
import Decorative from '../components/Products/Decorative'

export default function Products() {
    const [tabs, setTabs] = useState('plywood')
    return (
        <div className='innerpage wuudly__products'>
            <InnerBanner image={'assets/img/products.jpg'} title='Wuudply Products' />
            <div className="products__tabs">
                <div className="container">
                    <div className="tab__products">
                        <div className={`productGrid ${tabs === 'plywood' ? 'active' : ''}`} onClick={() => setTabs('plywood')}>
                            <div className="image"><img src="assets/img/products/1.jpg" alt="" /></div>
                            <div className="title">Plywood <img src="assets/img/products/arrow.svg" alt="" /></div>
                        </div>
                        <div className={`productGrid ${tabs === 'doores' ? 'active' : ''}`} onClick={() => setTabs('doores')}>
                            <div className="image"><img src="assets/img/products/2.jpg" alt="" /></div>
                            <div className="title">Doores <img src="assets/img/products/arrow.svg" alt="" /></div>
                        </div>
                        <div className={`productGrid ${tabs === 'blockBoard' ? 'active' : ''}`} onClick={() => setTabs('blockBoard')}>
                            <div className="image"><img src="assets/img/products/3.jpg" alt="" /></div>
                            <div className="title">Block board <img src="assets/img/products/arrow.svg" alt="" /></div>
                        </div>
                        <div className={`productGrid ${tabs === 'decorative' ? 'active' : ''}`} onClick={() => setTabs('decorative')}>
                            <div className="image"><img src="assets/img/products/4.jpg" alt="" /></div>
                            <div className="title">Decorative veneers <img src="assets/img/products/arrow.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__descriptions">
                <div className="container">

                    {
                        tabs === 'plywood' &&
                        <Plywood />
                    }
                    {
                        tabs === 'doores' &&
                        <Doors />
                    }
                    {
                        tabs === 'blockBoard' &&
                        <BlockBoard />
                    }
                    {
                        tabs === 'decorative' &&
                        <Decorative />
                    }
                </div>
            </div>
        </div>
    )
}
