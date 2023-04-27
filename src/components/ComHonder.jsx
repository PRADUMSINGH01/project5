import React from 'react'
import PriceCom from './PriceCom'

const ComHonder = () => {
  return (
    <div style={{display:"flex ", justifyContent:"space-evenly" , marginTop:"5%", flexWrap:"wrap", width:"100%"}}>
        <PriceCom price={49}  point1={"The Mac app — yours to keep"} point2={"Beautiful White_level"} point3={"One year of saving to Cloud"}/>
        <PriceCom  price={99} point1={"The Mac app — yours to keep"} point2={"One year of Mac app updates"} point3={"One year of saving to Cloud"} />
        <PriceCom price={299} point1={"Free Cloud access for unlim"} point2={"A shared Cloud workspace"} point3={"Access to the Mac app for all"}/>
    </div>
  )
}

export default ComHonder