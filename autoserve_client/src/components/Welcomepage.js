import React from 'react';
import welcomeimage from './images/welcomeimage.png'

const WelcomePage = () => {
    return(
        <div>
            <h2>Welcome to Autoserve App</h2>
            <img src={welcomeimage} alt="welcome" 
                style={{width:'100vw' }}
            />
          
        </div>
        
    ) 
}


export default WelcomePage;