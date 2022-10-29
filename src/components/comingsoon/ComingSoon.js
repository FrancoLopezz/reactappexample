import React from 'react';
import Footer from '../../components/footer/Footer';
import LoadingGif from '../../loading.gif'
import './comingsoon.css';

const ComingSoon = () => {

    return (
        <div className='comingsoonContainer'>
          <main className='mainComingSoon'>
            <h2>Coming soon...</h2>
            
            <div className='divComingSoon'>
              <img src={LoadingGif}></img>
            </div>
          </main>
          
          <Footer/>
        </div>
      );
};

export default ComingSoon;