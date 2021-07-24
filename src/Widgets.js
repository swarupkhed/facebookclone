import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
         <iframe width="100%" 
         height="230px"
          src="https://www.youtube.com/embed/1PjfIIFEf_M"
           frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           ></iframe>
        <iframe
               src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6777831053542338560"
                height="700px"
                width="100%"
                allowTransparency="true"
                frameborder="0" 
                
                title="Embedded post"
                
        ></iframe>
       
        </div>
    )
}

export default Widgets;
