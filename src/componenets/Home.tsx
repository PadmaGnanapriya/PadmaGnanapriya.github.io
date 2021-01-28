import React, {useEffect} from 'react';
import Padma from "../asserts/image/padma/Padma.webp";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer/myReducer";

const Home: React.FC = () => {
  const viewYPosition: number = useSelector((state: RootState) => state.viewYPosition);

  useEffect(() => {
    if ((window.outerHeight - window.innerHeight) > 120 || (window.outerWidth - window.innerWidth) > 100) {
      (navigator.onLine) ? window.open("https://www.google.com/search?source=hp&ei=VesOYI2cAaWhmgeesKPQCA&q=Padma+Gnanapriya&oq=Padma+Gnanapriya&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQI6CAgAEOoCEI8BOg4ILhCxAxDHARCjAhCTAjoICAAQsQMQgwE6BQgAELEDOg4ILhCxAxCDARDHARCjAjoCCAA6CwguELEDEMcBEK8BOgUILhCxAzoICC4QsQMQgwE6AgguOggILhCxAxCTAjoICC4QxwEQrwE6CwguEMcBEK8BEJMCOgQIABANOgYIABANEB46CAgAEAgQDRAeOgUIIRCgAToHCCEQChCgAVCAvgFYq98BYO3jAWgBcAB4AYAB4gWIAeEckgEMMC4xMy40LTEuMS4xmAEAoAEBqgEHZ3dzLXdperABAg&sclient=psy-ab&ved=0ahUKEwjNmoizurfuAhWlkOYKHR7YCIoQ4dUDCAY&uact=5", "_self") : window.close();
    }
  })

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
    </React.Fragment>
  );
}

export default Home;
