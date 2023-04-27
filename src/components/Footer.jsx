import React from 'react'
import './footer.css'
import fb from './6. Logotype/fb.svg'
import twi from './6. Logotype/twi.svg'
import g from './6. Logotype/g.svg'
import yt from './6. Logotype/yt.svg'
import li from './6. Logotype/in.svg'
import Logo from './6. Logotype/LogoWhite.svg'
export const Icon=({fb})=>{
    return(<div style={{color:"white", border:"1px dashed white", padding:"1px"}}>
<img src={fb} alt="" width={30}/>
        </div>)
}


const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer__one">
            <div className="" style={{margin:"4%"}}>
                <img src={Logo} alt="" />
            </div>

            <div className="footer__icon">
                <Icon fb={fb}/>
                <Icon fb={twi}/>
                <Icon fb={yt}/>
                <Icon
                 fb={li}/>
                                 <Icon fb={g}/>
            </div>
            <div className="footer__para">
                <p>Want to recieve our awesome 
stories?</p>
            </div>
            <div className="footer__copy"><p>© pradum singh Design, all rights reserved.</p></div>
        </div>

        <div className="footer__two">
            <div className="" style={{display:"flex ", fontFamily:"Nunito",flexDirection:"column"}}>
                <h3>Email</h3>
                <p>hs947518@gmail.com</p>
            </div>
        </div>
        <div className="footer__three">
            <div className="" style={{display:"flex" , flexDirection:"column"}}>
                <p>About Us</p>
                <p>How it Works</p>
                <p>Pricing</p>
                <p>FAQs</p>
            </div>

        </div>
        <div className="footer__four">
        <div className="" style={{display:"flex" , flexDirection:"column"}}>
                <p>Lead generation</p>
                <p>Customer engagement</p>
                <p>Customer support</p>
                <p>Outbound Messages</p>
            </div>

        </div>


    </div>
  )
}

export default Footer