import React from 'react';
import Padma from "../asserts/images/padma/Padma.webp";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";
import {Link} from "react-scroll";

const Home: React.FC = () => {
  const viewYPosition: number = useSelector((state: RootState) => state.viewYPosition);

  return (
    <React.Fragment>
      {/**Show the animation for medium, large, extra large**/}
      <div id='home' className='text-left my-home d-none d-lg-block' style={{minHeight: '75vh'}}>
        {
          viewYPosition < 2.2 &&
          <div>
            <span style={{
              marginLeft: `${30 - viewYPosition * 15}vw`,
              top: `${viewYPosition * 20 + 200}vh`,
              fontSize: `${10 - viewYPosition * 16}vw`
            }}>Hi,
            </span>
              <br/>
              <strong className='pt-5 mt-5' style={{
                marginLeft: `${viewYPosition * 15 + 20}vw`,
                top: `${viewYPosition * 20 + 20}vw`,
                fontSize: `${viewYPosition > 1.02 ? 0 : 8 - viewYPosition * 10}vw`
              }}>I'm Padma</strong>
          </div>
        }{
        viewYPosition < 4 &&
        <img src={Padma} alt="Padma" width={viewYPosition > 1 ? 360 - viewYPosition * 80 : viewYPosition * 300}
             className='ml-4' style={{
          borderRadius: `100%`,
          left: `${viewYPosition * 20}vw`,
          top: `${viewYPosition > 1.1 ? 25.5 - viewYPosition * 10 : viewYPosition * 13 + 4}vw`,
          position: 'absolute',
        }}/>}
        {
          viewYPosition < 3.25 && viewYPosition > 2
          &&
          <span style={{
            position: 'absolute',
            left: `${-5 + viewYPosition * 10}vw`,
            top: `${58 - viewYPosition * 15}vw`,
            fontSize: `${viewYPosition * 32 > 150 ? 1 : 18 - viewYPosition * 3.5}vw`
          }}>Gnanapriya</span>
        }
      </div>

      {/**Show the animation for extra small and small**/}
      <div id='home' className='text-left my-home d-lg-none' style={{minHeight: '40vh'}}>
        {
          viewYPosition < 2.2 &&
          <div>
              <br/>
              <span style={{
                marginLeft: `${30 - viewYPosition * 20}vw`,
                top: `${viewYPosition * 20 + 40}vw`,
                fontSize: `${viewYPosition < 0.8 ? 16 - viewYPosition * 8 : 0.1}vw`
              }}>Hi,
            </span>
              <br/>
              <strong className='pt-5 mt-5 text-center' style={{
                marginLeft: `${viewYPosition * 13 + 20}vw`,
                top: `${viewYPosition * 22 + 20}vw`,
                fontSize: `${viewYPosition > 1.2 ? 0 : 14 - viewYPosition * 10}vw`
              }}>I'm Padma</strong>
          </div>
        }{
        viewYPosition < 3.5 &&
        <img src={Padma} alt="Padma" width={viewYPosition > 1 ? 300 - viewYPosition * 70 : viewYPosition * 190}
             className='ml-4' style={{
          borderRadius: `100%`,
          left: `${viewYPosition * 10}vw`,
          top: `${viewYPosition > 1 ? 35 - viewYPosition * 10 : viewYPosition * 13 + 14}vw`,
          position: 'absolute',
        }}/>}
        {
          viewYPosition < 4 && viewYPosition > 1.5
          &&
          <span style={{
            position: 'absolute',
            left: `${viewYPosition * 10}vw`,
            top: `${55 - viewYPosition * 10}vh`,
            fontSize: `${viewYPosition * 32 > 150 ? 1 : 20 - viewYPosition * 2.5}vw`
          }}>Gnanapriya</span>
        }
      </div>

      {/***Arrow key***/}
      {
        viewYPosition > 1.1 &&
        <Link activeClass="active" className='home' to='home' spy={true} smooth={true} duration={900}>
            <button style={{position: 'fixed', right: `10px`, bottom: '60px'}} className='topToBtn'>^
            </button>
        </Link>
      }


      {/*<div>*/}
      {/*  <a href="https://www.facebook.com/padma.kalhara/">*/}
      {/*    <svg version="1.1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"*/}
      {/*         xmlns:xlink="http://www.w3.org/1999/xlink"*/}
      {/*         style="overflow: hidden; position: relative; top: -0.322917px;" viewBox="0 0 24 24"*/}
      {/*         preserveAspectRatio="xMinYMin">*/}
      {/*      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created Padme</desc>*/}
      {/*      <defs></defs>*/}
      {/*      <path className="pathme" stroke="mediumblue"*/}
      {/*            d="M19,4.00860595703125C19,4.1845703125,19,7,19,7C19,7,17,7,17,7C16.447715250169207,7,16,*/}
      {/*            7.447715250169207,16,8C16,8,16,10,16,10C16,10,19,10,19,10C19,10,19,13,19,13C19,13,16,13,16,*/}
      {/*            13C16,13,16,20,16,20C16,20,13,20,13,20C13,20,13,13,13,13C13,13,11,13,11,13C11,13,11,10,11,*/}
      {/*            10C11,10,13,10,13,10C13,10,13,7.5,13,7.5C13,5.56,14.57,4,16.5,4C16.5,4,19,4,19,4M20,2C20,2,*/}
      {/*            4,2,4,2C2.8954305003384135,2,1.9999999999999998,2.8954305003384135,2,4C2,4,2,20,2,20C2,*/}
      {/*            21.104569499661586,2.8954305003384135,22,4,22C4,22,20,22,20,22C21.104569499661586,22,22,*/}
      {/*            21.104569499661586,22,20C22,20,22,4,22,4C22,2.89,21.1,2,20,2C20,2,20,2,20,2"*/}
      {/*            stroke-linejoin="round" stroke-linecap="round" stroke-width="1"*/}
      {/*            style="-webkit-tap-highlight-color: mediumblue;">*/}
      {/*      </path>*/}
      {/*    </svg>*/}
      {/*  </a>*/}

      {/*  <a href="https://www.linkedin.com/in/padma-gnanapriya-16b515180">*/}
      {/*    <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"*/}
      {/*         xmlns:xlink="http://www.w3.org/1999/xlink"*/}
      {/*         style="overflow: hidden; position: relative; top: -0.322917px;" viewBox="0 0 24 24"*/}
      {/*         preserveAspectRatio="xMinYMin">*/}
      {/*      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created Padme</desc>*/}
      {/*      <defs></defs>*/}
      {/*      <path className="pathme" stroke="#0e76a8"*/}
      {/*            d="M18.99139404296875,19C18.8154296875,19,16,19,16,19C16,19,16,13.7,16,13.7C16,12.87157287525381,*/}
      {/*            15.32842712474619,12.2,14.5,12.2C13.67157287525381,12.2,13,12.87157287525381,13,13.7C13,13.7,13,*/}
      {/*            19,13,19C13,19,10,19,10,19C10,19,10,10,10,10C10,10,13,10,13,10C13,10,13,11.2,13,11.2C13.5,10.36,*/}
      {/*            14.59,9.8,15.5,9.8C17.432996624407778,9.8,19,11.367003375592224,19,13.3C19,13.3,19,19,19,19M6.5,*/}
      {/*            8.31C5.5,8.31,4.69,7.5,4.69,6.5C4.69,5.500364602806264,5.500364602806264,4.69,6.5,4.69C7.5,4.69,*/}
      {/*            8.31,5.5,8.31,6.5C8.31,7.499635397193736,7.499635397193736,8.31,6.5,8.31M8,19C8,19,5,19,5,19C5,19,*/}
      {/*            5,10,5,10C5,10,8,10,8,10C8,10,8,19,8,19M20,2C20,2,4,2,4,2C2.89,2,2,2.89,2,4C2,4,2,20,2,20C2,*/}
      {/*            21.104569499661586,2.8954305003384135,22,4,22C4,22,20,22,20,22C21.104569499661586,22,22,*/}
      {/*            21.104569499661586,22,20C22,20,22,4,22,4C22,2.89,21.1,2,20,2C20,2,20,2,20,2"*/}
      {/*            stroke-linejoin="round" stroke-linecap="round" stroke-width="1"*/}
      {/*            style="-webkit-tap-highlight-color: #22C3D4;">*/}
      {/*      </path>*/}
      {/*    </svg>*/}
      {/*  </a>*/}

      {/*  <a href="https://github.com/PadmaGnanapriya">*/}
      {/*    <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"*/}
      {/*         xmlns:xlink="http://www.w3.org/1999/xlink"*/}
      {/*         style="overflow: hidden; position: relative; top: -0.322917px;" viewBox="-2 -2 28 28"*/}
      {/*         preserveAspectRatio="xMinYMin">*/}
      {/*      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created Padme</desc>*/}
      {/*      <defs></defs>*/}
      {/*      <path className="pathme" stroke="purple"*/}
      {/*            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 */}
      {/*            5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 */}
      {/*            4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"*/}
      {/*            stroke-linejoin="round" stroke-linecap="round" stroke-width="1"*/}
      {/*            style="-webkit-tap-highlight-color: purple;">*/}
      {/*      </path>*/}
      {/*    </svg>*/}
      {/*  </a>*/}

      {/*  <a href="https://medium.com/@padmaisuru">*/}
      {/*    <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"*/}
      {/*         xmlns:xlink="http://www.w3.org/1999/xlink"*/}
      {/*         style="overflow: hidden; position: relative; top: -0.322917px;" viewBox="-2 -2 28 28"*/}
      {/*         preserveAspectRatio="xMinYMin">*/}
      {/*      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created Padme</desc>*/}
      {/*      <defs></defs>*/}
      {/*      <path className="pathme" stroke="green"*/}
      {/*            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 */}
      {/*            4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.139.195-.335.162-.526v-5.304c.015-.147-.041-.293-.151-.392l-1.121-1.35v-.201h3.479l2.689 5.897 2.364-5.897h3.317v.201l-.958.919c-.083.063-.124.166-.106.269v6.748c-.018.103.023.206.106.269l.936.919v.201h-4.706v-.201l.969-.941c.095-.095.095-.123.095-.269v-5.455l-2.695 6.844h-.364l-3.137-6.844v4.587c-.026.193.038.387.174.526l1.26 1.529v.202z"*/}
      {/*            stroke-linejoin="round" stroke-linecap="round" stroke-width="1"*/}
      {/*            style="-webkit-tap-highlight-color: purple;">*/}
      {/*      </path>*/}
      {/*    </svg>*/}
      {/*  </a>*/}

      {/*  <a href="https://www.hackerrank.com/padmaisuru">*/}
      {/*    <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"*/}
      {/*         xmlns:xlink="http://www.w3.org/1999/xlink"*/}
      {/*         style="overflow: hidden; position: relative; top: -0.322917px;" viewBox="2 2 28 28"*/}
      {/*         preserveAspectRatio="xMinYMin">*/}
      {/*      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created Padme</desc>*/}
      {/*      <defs></defs>*/}
      {/*      <path className="pathme" stroke="green"*/}
      {/*            d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 */}
      {/*            3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C */}
      {/*            17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 */}
      {/*            27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M */}
      {/*            15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 */}
      {/*            12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 */}
      {/*            15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 */}
      {/*            19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 */}
      {/*            15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 */}
      {/*            L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"*/}
      {/*            stroke-linejoin="round" stroke-linecap="round" stroke-width="1"*/}
      {/*            style="-webkit-tap-highlight-color: purple;">*/}
      {/*      </path>*/}
      {/*    </svg>*/}
      {/*  </a>*/}

      {/*  <a href="https://api.whatsapp.com/send?phone=+94766328189">*/}
      {/*    <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"*/}
      {/*         xmlns:xlink="http://www.w3.org/1999/xlink"*/}
      {/*         style="overflow: hidden; position: relative; top: -0.322917px;" viewBox="0 0 16 16"*/}
      {/*         preserveAspectRatio="xMinYMin">*/}
      {/*      <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created Padme</desc>*/}
      {/*      <defs></defs>*/}
      {/*      <path className="pathme" stroke="green"*/}
      {/*            d="M 7.5 1 C 3.914063 1 1 3.914063 1 7.5 C 1 8.796875 1.417969 9.984375 2.070313 11 L 0.953125 */}
      {/*            14.121094 L 4.429688 13.140625 C 5.351563 13.644531 6.375 14 7.5 14 C 11.085938 14 14 11.085938 */}
      {/*            14 7.5 C 14 3.914063 11.085938 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 */}
      {/*            10.542969 13 7.5 13 C 6.457031 13 5.492188 12.707031 4.65625 12.203125 L 4.472656 12.089844 L */}
      {/*            2.546875 12.628906 L 3.171875 10.894531 L 3.019531 10.683594 C 2.378906 9.78125 2 8.6875 2 7.5 */}
      {/*            C 2 4.457031 4.457031 2 7.5 2 Z M 5.0625 4 C 4.949219 4 4.761719 4.046875 4.601563 4.234375 C */}
      {/*            4.445313 4.417969 4 4.867188 4 5.78125 C 4 6.691406 4.617188 7.574219 4.703125 7.699219 C 4.789063 */}
      {/*            7.824219 5.917969 9.695313 7.644531 10.5 C 8.054688 10.691406 8.375 10.804688 8.625 10.890625 C */}
      {/*            9.039063 11.03125 9.414063 11.011719 9.710938 10.964844 C 10.042969 10.910156 10.730469 10.515625 */}
      {/*            10.875 10.082031 C 11.015625 9.648438 11.019531 9.277344 10.972656 9.199219 C 10.933594 9.121094 */}
      {/*            10.816406 9.074219 10.644531 8.984375 C 10.472656 8.890625 9.625 8.441406 9.46875 8.382813 C 9.3125 */}
      {/*            8.316406 9.195313 8.289063 9.078125 8.472656 C 8.964844 8.660156 8.636719 9.078125 8.535156 9.199219 */}
      {/*            C 8.433594 9.324219 8.335938 9.339844 8.164063 9.246094 C 7.988281 9.152344 7.433594 8.957031 */}
      {/*            6.777344 8.324219 C 6.265625 7.832031 5.917969 7.226563 5.820313 7.039063 C 5.71875 6.851563 */}
      {/*            5.808594 6.753906 5.894531 6.664063 C 5.972656 6.578125 6.066406 6.445313 6.152344 6.335938 C */}
      {/*            6.238281 6.230469 6.265625 6.148438 6.324219 6.027344 C 6.382813 5.902344 6.355469 5.792969 6.3125 */}
      {/*            5.703125 C 6.265625 5.609375 5.921875 4.695313 5.78125 4.324219 C 5.640625 3.964844 5.496094 */}
      {/*            4.011719 5.390625 4.007813 C 5.292969 4 5.175781 4 5.0625 4 Z"*/}
      {/*            stroke-linejoin="round" stroke-linecap="round" stroke-width="0.6"*/}
      {/*            style="-webkit-tap-highlight-color: green;">*/}
      {/*      </path>*/}
      {/*    </svg>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </React.Fragment>
  );
}

export default Home;
