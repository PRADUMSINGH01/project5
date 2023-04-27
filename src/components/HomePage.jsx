import React from "react";
import "./homepage.css";
import img1 from '../components/6. Logotype/img.svg'
const HomePage = () => {
  return (
    <div className="homepage">
        <div className="homepage__one">


            <div className="homepage__one__item"> 

               <div className="homepage__one__item__headline">
              <h1>Always Track & Analyze Your Business Statistics To Succeed.</h1>
              </div>

              <div className="homepage__one__item__para">
              <p>
              A better way to manage your sales, team, clients & marketing — on
              a single platform. Powerful, affordable & easy.
              </p>
               </div>

                <div className="homepage__one__item__email">
                <div className="homepage__one__item__email__input">
                 <input type="email" className="input" placeholder="enter your email"/>
                 <div className="get__started">
                    get started
                </div>
                 </div>

              <div className="homepage__one__item__pay">

                <div className="icon_one"></div>

                <div className="icon_two"></div>

                <div className="icon_three"></div>
                </div>
                </div>
            
            </div>

      </div>


       <div className="homepage__two">
           <div className="homepage__two__item">
           <img src={img1} alt="immg" srcset="" />
            </div>
        </div>


</div>
  );
};

export default HomePage;
