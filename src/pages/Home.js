import React from 'react';
import background from '../ImagesLogos/background.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${background})`}}>
             <div className="headerContainer">
                <h1>Vansh Cuisines</h1>
                <p>TASTY FOOD AT A CLICK</p>
                <Link to="/menu">
                  <button>Order Now</button>
                </Link>
             </div>
        </div>
    );
    }
export default Home;
