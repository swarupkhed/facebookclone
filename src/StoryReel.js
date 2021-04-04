import React from 'react';
import "./StoryReel.css";
import Story from "./Story";
import Image1 from "../src/Images/Aaradhya.jpg";
import Image2 from "../src/Images/soham.jpg";
import Image3 from "../src/Images/Saurabh.jpg";
import Image4 from "../src/Images/rupesh.jpg";
import Image5 from "../src/Images/ziyad.jpg";
import Image6 from "../src/Images/Mohit.jpg";
import bg1 from "../src/Images/bg1.jpg";
import bg2 from "../src/Images/bg4.jpeg";
import bg3 from "../src/Images/bg3.jpg";
import bg5 from "../src/Images/bg5.jpg";
import bg6 from "../src/Images/bg6.jpg";
import bg7 from "../src/Images/bg7.jpg";
function StoryReel() {
    return (
        <div className="storyReel">
            <Story profilesrc={Image1} image={bg1} title="Aaradhya Usare"/>
            <Story profilesrc={Image2} image={bg2} title="Soham Khedekar"/>
            <Story profilesrc={Image3} image={bg3} title="Saurabh Tambe"/> 
            <Story profilesrc={Image4} image={bg5} title="Rupesh Usare" />
            <Story profilesrc={Image5} image={bg6} title="Ziyad Chiplunkar" />
            <Story profilesrc={Image6} image={bg7} title="Mohit Suryawanshi" />
        </div>
    )
}

export default StoryReel;
