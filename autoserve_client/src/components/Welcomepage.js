import React from 'react';
import welcomeimage from './images/welcomeimage.png'



const WelcomePage = () => {
    return(
        <main style={{ backgroundImage: `url(${welcomeimage})`, height:'100vh'}}>
            <h2 className="p-3">Welcome to Autoserve App</h2>
           
            
        </main>
        
    ) 
}


export default WelcomePage;