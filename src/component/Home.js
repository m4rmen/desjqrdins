import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
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
                      <input id='identifiant' type='text'></input>
                      <div className='checkbox-container'>
                        <input type='checkbox'></input>
                        <label>Mémoriser</label>
                      </div>
                      <label>Mot de passe</label>
                      <input id='password' type='password' ></input>
                      <span id='attention'> <strong>Attention: </strong>Respecter majuscules et minuscules  </span>
                      <span id='forgot-psswd'>Mot de passe oublié?</span>
                      <div className='button-container'>
                        <button><strong>Valider</strong></button>
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
