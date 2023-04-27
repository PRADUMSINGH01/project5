import React from 'react'
import './price.css'
import img from './6. Logotype/img1.svg'
const Price = () => {
  return (
    <div className='price'>


        <div className="price__one">
            <img src={img} alt=""  width={400}/>
        </div>

        <div className="price__two">

            <div className="price__two__price">
                <p>pricing</p>
            </div>

            <div className="price__two__item">
                <div className="price__two__price__headline">
                    <h1>Select a membership level
the right price for you.</h1>

                </div>
                <div className="price__two__price__para">
                    <p>Prices listed in USD. Taxes may apply. 
By using program you agree to our terms and policies.</p>
                </div>

            </div>

        </div>



    </div>
  )
}

export default Price