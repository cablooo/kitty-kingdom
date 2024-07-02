import React from 'react';
import HoodiCat from '../img/Hoodi Cat.jpg';
import KongFuCat from '../img/Heart Cat.jpg'
import '../styles/home.css';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../Animations/motionAnim"

const Home = () => {
    return (
        <>
            <div className='container home-container'>
                <motion.div variants={fade} className="box">
                    <div className="text-box">
                        <h1>Welcome To Kitty Kingdom</h1>
                        <p>
                            At Welcome To Kitty Kingdom, we're dedicated to providing everything your feline friend needs to live a happy and healthy life. 
                            From premium cat food and stylish accessories to cozy beds and engaging toys, we've got it all. 
                            Explore our wide selection of products and discover why we're the purrfect choice for cat lovers everywhere.
                        </p>
                    </div>
                    <div className="img-box">
                        <img src={HoodiCat} alt="Mr. Cat" />
                    </div>
                </motion.div>


                <motion.div variants={fade} className="box">
                    <div className="img-box">
                        <img src={KongFuCat} alt="Mr. Cat" />
                    </div>
                    <div className="text-box">
                        <h1>Why Choose Us?</h1>
                        <p>
                            Quality Products: We stock only the best brands and products for your furry friends.
                            Affordable Prices: Great value without compromising on quality.
                            Fast Shipping: Get your orders delivered quickly and efficiently.
                            Customer Support: Our friendly team is here to assist you with any questions or concerns.
                        </p>
                    </div>
                </motion.div>
                
            </div>
            <div className="bubble-container">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </>
    );
}

export default Home;
