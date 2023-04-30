import React, {useEffect, useState} from "react";
import {au} from './garbage/garbage';
import Header from "./components/Header";
import Info from "./components/Info";
import Map from "./components/Map";
import Popup from "./components/Popup";

const defaultData = {
  ip: '192.212.174.101',
  isp: 'SpaceX Starlink',
  location: {
    city: 'Brooklyn',
    country: 'NY',
    postalCode: '10001',
    timezone: '-05:00',
    lat: 40.740730,
    lng: -74.011116
  }
}

function App() {
  const [data, setdata] = useState(defaultData);
  const [showPop, setShowPop] = useState(false);
  const [popupText, setPopupText] = useState('');

  async function getInfoByIp(param, type) {
    try{
      const request = await fetch(`${au}${type}=${param}`);
      const res = await request.json();
      if(typeof res === 'object') {
        setdata(res);
      }else{
        setdata(defaultData);
      }
      
    } catch(error){
      console.error('An error occurred:', error);
      showPopup('there was a problem loading the data. check your internet connection and try again later');
    }
  }

  const showPopup = (message) => {
    setShowPop(true);
    setPopupText(message);
  }

  useEffect(() => {
    getInfoByIp('', 'ipAddress');
  }, []);

  return (
    <div className="App">
      <Header getInfoByIp={getInfoByIp}/>
      <Info info={data}/>
      <Map
      lat={data.location.lat}
      lng={data.location.lng}
      />

      {showPop ? <Popup setShowPop={setShowPop} statusText={popupText}/> : null}

      <footer>
        <p>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/servant-of-Allah/">a humble servant of Allah</a>.
        </p>
     </footer>
    </div>
  );
}

export default App;
