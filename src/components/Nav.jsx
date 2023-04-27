import React from 'react'
import './nav.css'
import LOGO from '../components/6. Logotype/LogoBlack.svg'
const Nav = () => {
  return (
    <div className='nav'>

        <div className="nav__one">
            <div className="nav__one__item__one">
                <img src={LOGO} alt="logo" srcset=""width={40} />
            </div>
            
                <div className="nav__one__item__two__item">
                    <a href="#aboutus">about us</a>
                    <a href="#">how it works</a>
                    <a href="">pricing</a>
                    <a href="">faqs</a>
            
            </div>
        </div>
        <div className="nav__two">
            <div className="nav__two__item">
                <div className="nav__two__item_one">
                    <a href="">Login</a>

                </div>
                <div className="nav__two__item_two">
                    <a href="">
                         SignUp
                        </a>

                </div>


            </div>
        </div>
    </div>
  )
}

export default Nav