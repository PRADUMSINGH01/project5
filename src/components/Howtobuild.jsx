import React from "react";
import "./aboutusbuild.css";
import img from "./6. Logotype/icon.svg";
import img1 from "./6. Logotype/img4.svg";
const Howtobuild = () => {
  return (
    <div className="howtobuild">
      <div className="howtobuild__one">
        <div className="howtobuild__one__howtobuild">
          <p>how to build</p>
        </div>
        <div className="howtobuild__one__item">
          <div className="howtobuild__one__item__headline">
            <h1>Building the best space for collaboration.</h1>
          </div>

          <div className="howtobuild__one__item__point">
            <div className="howtobuild__one__item__point__one">
            <div className="howtobuild__one__item__point__one__item">
                <img src={img} alt="" srcset="" />
                <div className="">
                  <h3>Shared Cloud Libraries</h3>
                  <p>
                    Navigate to the Your work panel in the left sidebar. Select
                    the library you want to share. Select the Share icon in the
                    upper right to share the library.
                  </p>
                </div>
              </div>
            </div>

            <div className="howtobuild__one__item__point__two">
              <div className="howtobuild__one__item__point__one__item">
                <img src={img} alt="" srcset="" />
                <div className="">
                  <h3>Free developer handoff, right inside</h3>
                  <p>Cloud Inspector makes it easy for developers to get 
the information they need to turn pixels into code — 
all in the browser and, most importantly, for free.
                  </p>
                </div>
              </div>
            </div>

            <div className="howtobuild__one__item__point__three">
            <div className="howtobuild__one__item__point__one__item">
                <img src={img} alt="" srcset="" />
                <div className="">
                  <h3>Real-time collaborative editing</h3>
                  <p>
                  Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.
                  </p>
                </div>
              </div> </div>
            <div className="howtobuild__one__item__point__four">
            <div className="howtobuild__one__item__point__one__item">
                <img src={img} alt="" srcset="" />
                <div className="">
                  <h3>Integrations with the Cloud API</h3>
                  <p>
                  Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. 
                  </p>
                </div>
              </div>   </div>
          </div>
        </div>
      </div>

      <div className="howtobuild_two">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Howtobuild;
