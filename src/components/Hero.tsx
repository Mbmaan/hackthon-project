"use client"

import React from 'react'


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className='bg-black-200 text-center bold'>Discover comfort and style like never before</h1>
        <p className='bg-pink-200 flex flex-col text-evenly text-2xl text-black bold border-spacing-2 bold'>
        "Upgrade your seating experience with our premium chairs! 
        Whether for your office, dining room, or lounging space, 
        our chairs combine comfort, style, and durability to suit any setting. 
        Designed with ergonomic support and modern aesthetics,
         they’re perfect for work or relaxation. 
         Find your ideal chair today and sit in style!"
</p>
        <img className='items-center' src="/chair.png" alt="Chair" width={250} height={350}  />
        <a href="#" className="cta-button">View All </a>
      </div>
      <div className="background-decor"></div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }

        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, #d8d8d8, #ffffff);
          overflow: hidden;
          position: relative;
        }

        .hero-content {
          text-align: center;
          z-index: 1;
        }

        .hero h1 {
          font-size: 3rem;
          text-align:center;
          color: #333;
        }

        .hero p {
          font-size: 1.2rem;
          color: #555;
          margin: 1rem 0;
        }

        .cta-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #6c63ff;
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #5753d6;
        }

        .background-decor {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: radial-gradient(circle at center, rgba(108, 99, 255, 0.2), rgba(0, 0, 0, 0) 70%);
        }
      `}</style>
    </div>
  );
}

export default Hero
