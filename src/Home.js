import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Hero" />
            </div>
            {/* Product Id, title, prince, rating, image */}
            <div className="home__row">
                <Product
                    id="3215"
                    title="Código Limpio / Clean Code : Robert C. Martin"
                    price={9361}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
                />
                <Product
                    id="3215"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={9361}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="3215"
                    title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones "
                    price={9361}
                    rating={5}
                    image="https://m.media-amazon.com/images/S/aplus-media/vc/e955b8b4-ae4f-4dc8-b629-dd387e5c69fc.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                />

            </div>

            <div className="home__row">
            <Product
                    id="3215"
                    title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling"
                    price={9361}
                    rating={5}
                    image="https://m.media-amazon.com/images/S/aplus-media/vc/23bd0401-0601-4b2f-b281-3a7ea717ff4a._CR0,0,220,220_PT0_SX220__.jpg"
                />
                <Product
                    id="6457"
                    title="Book : Learning React Native: Building Native Mobile Apps..."
                    price={11151}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
                />
                <Product
                    id="6547"
                    title="Book : React For Real Front-end Code, Untangled - Fischer,.."
                    price={4720}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_960888-MLA30864694005_052019-O.webp"
                />
                <Product
                    id="3259"
                    title="Book : React Design Patterns And Best Practices Build Easy.."
                    price={4800}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_949721-MLA29020525244_122018-O.webp"
                />
            </div>

            <div className="home__row">
                <Product
                    id="9865"
                    title="Book : Python Crash Course The Introduction To Programming.."
                    price={4951}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_678176-MLA31546487400_072019-O.webp"
                />
                <Product
                    id="9865"
                    title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN) "
                    price={4951}
                    rating={5}
                    image="https://m.media-amazon.com/images/S/aplus-media/vc/4b482662-a3dd-411b-80d5-dbbe81b28f8d._CR0,0,1800,1800_PT0_SX300__.jpg"
                />
            </div>

        </div>
    )
}

export default Home
