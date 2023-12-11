import React from "react";
import "./ListProblem.scss";

import img21 from "../../../../../../assets/branding/img/400x500/img21.jpg";
import img5 from "../../../../../../assets/branding/img/400x500/img5.jpg";
import img3 from "../../../../../../assets/branding/img/400x500/img3.jpg";
import DrawCat from "../../../../../../components/DrawCat/DrawCat";
import SappinAnnimer from "../../../../../../components/sapinNoelAnnimer/SappinAnnimer";
const ListProblem = () => {
  return (
    <div className="list-problem-bloc super-container-p80">
      <div className="drawcat-contenaire">
        <DrawCat />
      </div>

      <div className="listpbm">
        <div className="section-list-problem  side-50">
          <div className="img-container-list-problem">
            <img src={img21} alt="" />
            <div className="card_behind"></div>
          </div>
          <div className="message-content-list-problem">
            <div className="content-sticky-list-problem">
              <div className="title">
                <h1>Problème voalohany.</h1>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum voluptatibus porro incidunt, molestiae iure architecto in laborum, deserunt atque ab</p> */}
              </div>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariatur
                exercitationem temporibus 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariatur
                exercitationem temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempor
              </p>
            </div>
          </div>
        </div>
        <div className="section-list-problem">
          <div className="img-container-list-problem">
            <img src={img5} alt="" />
          </div>
          <div className="message-content-list-problem">
            <div className="content-sticky-list-problem">
              <h1>Problem 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariaturLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariatur
              </p>
            </div>
          </div>
        </div>
        <div className="section-list-problem">
          <div className="img-container-list-problem">
            <img src={img3} alt="" />
            <div className="card_behind"></div>
          </div>
          <div className="message-content-list-problem">
            <div className="content-sticky-list-problem">
              <h1>Problem 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariatur
                exercitationem temporibus odit quis necessitatibus non error
              </p>
            </div>
          </div>

          <div>
            {/* <SappinAnnimer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProblem;
