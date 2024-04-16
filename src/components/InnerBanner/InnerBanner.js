import React from 'react'
import './InnerBanner.scss'
export default function InnerBanner({image,title}) {
  return (
    <div className='wuudly__innerBanner' style={{backgroundImage: `url(${image})`}}>
        <div className="container">
        <h1>{title}</h1>
        </div>
    </div>
  )
}
