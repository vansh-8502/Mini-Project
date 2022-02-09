import React from 'react';
import photo from "../ImagesLogos/photo.jpeg";
import '../styles/About.css';
function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${photo})`}}>
            
            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>VanshCuisines has been created by a Graphic Era Student Vansh Sharma who is extremely passionate about food. As a collective group of Chefs and Hoteliers who have worked in some of the best hotels and restaurants around the world, we were always on the lookout for new dining experiences and exciting cuisines. How often do you find yourself wondering, where you should go eat on a special occasion? What are the newest and top eateries in town? What are the things you absolutely must try when visiting a particular restaurant? Can you save some money while still dining at top restaurants of the city?
                VanshCuisines has all the answers for the most enjoyable and authentic experience.</p>


            
            </div>
        </div>
    )
}

export default About
