import React, { useState } from 'react'
import './Loader.scss'
function Loader() {
  return (
    <div className='setLoading'>
          <div className="lds-ripple"><div></div><div></div></div>
        </div>
  )
}

export default Loader