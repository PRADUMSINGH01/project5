import React, { useState } from "react";
import "./faq.css";
import img from "./6. Logotype/img3.svg";
const Faq = () => {

    const  [faq,setfaq] = useState(true);
    const  [faq1,setfaq1] = useState(false);
    const  [faq2,setfaq2] = useState(false);
    const  [faq3,setfaq3] = useState(false);
    const  [faq4,setfaq4] = useState(false);

    function faqq(e){
        if(!faq){
            setfaq(true)
        }else{
            setfaq(false)
        }

    }

    
    function faqq1(e){
        if(!faq){
            setfaq1(true)
        }else{
            setfaq1(false)
        }

    }

    
    function faqq2(e){
        if(!faq){
            setfaq2(true)
        }else{
            setfaq2(false)
        }

    }


    
    function faqq3(e){
        if(!faq){
            setfaq3(true)
        }else{
            setfaq3(false)
        }

    }

    
    function faqq4(e){
        if(!faq){
            setfaq4(true)
        }else{
            setfaq4(false)
        }

    }




  return (
    <div className="faq">
      <div className="faq__one">
        <div className="faq_one_faq">
          <p>FAQs</p>
        </div>

        <div className="faq_one_headline">
          <div className="">
            <h1>Common Questions.</h1>
          </div>
          <div className="">
            <p>
              The online form also provides links to a set of frequently asked
              questions, other information materials related to the financial
              disclosure programme.
            </p>
          </div>

          <div className="faq_one_ques">
            <div className="">
              <h1>How much does a Teams subscription cost?</h1>
              <p className={faq?"faq_show":"not_show"}>
                Contributors are members of your team who need access to use the
                Mac app to create and edit Sketch documents. These prices don’t
                include sales tax, which may still apply. Head over to our
                pricing page to get full details.
              </p>
            </div>

            <div className="" style={{cursor:"pointer"}} onClick={()=>faqq()}> {faq?"-":"+"}</div>
          </div>
          <div
            className=""
            style={{
              width: "100%",
              backgroundColor: "black",
              height: "1px",
              marginTop: "1%",
            }}></div>
        </div>


        <div className="faq_one_ques">
            <div className="">
              <h1>Do I still need to purchase licenses for the Mac app?</h1>
              <p className={faq1?"faq_show":"not_show"}>
                Contributors are members of your team who need access to use the
                Mac app to create and edit Sketch documents. These prices don’t
                include sales tax, which may still apply. Head over to our
                pricing page to get full details.
              </p>
            </div>

            <div className="" style={{cursor:"pointer"}} onClick={()=>faqq1()}> {faq1?"-":"+"}</div>
          </div>
          <div
            className=""
            style={{
              width: "100%",
              backgroundColor: "black",
              height: "1px",
              marginTop: "1%",
            }}></div>
        
        <div className="faq_one_ques">
            <div className="">
              <h1>How long does the free Teams subscription trial last?</h1>
              <p className={faq2?"faq_show":"not_show"}>
                Contributors are members of your team who need access to use the
                Mac app to create and edit Sketch documents. These prices don’t
                include sales tax, which may still apply. Head over to our
                pricing page to get full details.
              </p>
            </div>

            <div className="" style={{cursor:"pointer"}} onClick={()=>faqq2()}> {faq2?"-":"+"}</div>
          </div>
          <div
            className=""
            style={{
              width: "100%",
              backgroundColor: "black",
              height: "1px",
              marginTop: "1%",
            }}></div>
    

    
    <div className="faq_one_ques">
            <div className="">
              <h1>Will program for Teams replace volume licensing?</h1>
              <p className={faq3?"faq_show":"not_show"}>
                Contributors are members of your team who need access to use the
                Mac app to create and edit Sketch documents. These prices don’t
                include sales tax, which may still apply. Head over to our
                pricing page to get full details.
              </p>
            </div>

            <div className="" style={{cursor:"pointer"}} onClick={()=>faqq3()}> {faq3?"-":"+"}</div>
          </div>
          <div
            className=""
            style={{
              width: "100%",
              backgroundColor: "black",
              height: "1px",
              marginTop: "1%",
            }}></div>


<div className="faq_one_ques">
            <div className="">
              <h1>How long does the free Teams subscription trial last?</h1>
              <p className={faq4?"faq_show":"not_show"}>
                Contributors are members of your team who need access to use the
                Mac app to create and edit Sketch documents. These prices don’t
                include sales tax, which may still apply. Head over to our
                pricing page to get full details.
              </p>
            </div>

            <div className="" style={{cursor:"pointer"}} onClick={(e)=>faqq4()}> {faq4?"-":"+"}</div>
          </div>
          <div
            className=""
            style={{
              width: "100%",
              backgroundColor: "black",
              height: "1px",
              marginTop: "1%",
            }}></div>




      </div>


      <div className="faq__two"></div>

      <div className="">
        <img src={img} alt="" srcset="" width={400} />
      </div>
    </div>
  );
};

export default Faq;
