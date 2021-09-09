import React from 'react';
import welcomeimage from './images/welcomeimage.png'



const WelcomePage = () => {
    return(
        <main style={{ backgroundImage: `url(${welcomeimage})`,height: "80vh", backgroundSize: "cover"}}>
            <h1 className="p-3" style={{color: "yellow"}}>Welcome to Autoserve App</h1>
           
            
        </main>
        
    ) 
}


export default WelcomePage;