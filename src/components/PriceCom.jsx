import React from 'react'
import './Pricecom.css'
const PriceCom = ({price , headline, point1,point2,point3,}) => {
  return (
    <div className='pricecom'>


        <div className="pricecom__price">
            <h1>{price}</h1><p>/ per month</p>
        </div>

        <div className="pricecom__para">
            <h3>{headline}</h3>
        </div>

        <div className="pricecom__point">

            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>



        </div>

        <div className="pricecom__sub">

            <p>Join</p>



        </div>





    </div>
  )
}

export default PriceCom