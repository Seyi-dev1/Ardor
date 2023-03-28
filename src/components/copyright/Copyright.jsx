import React from 'react'
import './copyright.scss'


const Copyright = () => {
    const year = new Date().getFullYear()
    
  return (
    <div className='rights_container'>
        <h3 className="text">©{year} Colette-Rocks. All rights reserved.</h3>
    </div>
  )
}

export default Copyright