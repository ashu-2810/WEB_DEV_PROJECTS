import React from 'react'


const Hero = () => {
    return (
        <>
            <main className="hero">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className='secondary-btn'>Category</button>
                    </div>
                    <div className="shoping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
                            <img src="/images/flipkart.png" alt="flipkart" />
                            <img src="/images/amazon.png" alt="amazon" />
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/hero.png" alt="hero img" />
                </div>
            </main>
        </>
    )
}

export default Hero;