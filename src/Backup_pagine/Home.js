import './css/Home.css';
import texts from '../texts/texts.json';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import DiscoverShiatsuButton from '../components/DiscoverShiatsuButton';
import ShiatsuCarousel from '../components/ShiatsuCarousel';
import './css/Carousel.scss';
import Aboutme from './Aboutme';
import Contatti from './Contatti';
import About_meCarousel from '../components/About_meCarousel';




function Home() {
    return (
        <>
            <section className="hero">
                <div className='content'>
                    <div className='header'>
                        <Navbar theme="dark" />
                    </div>
                    <div className='body'>
                        <div className='body--logo'>
                            <Logo />
                        </div>
                        <h1 className='body--title'> {texts.title} </h1>
                        {/* <p> {texts.intro}</p> */}
                    </div>
                    <div className='footer'>
                        {/* <DiscoverShiatsuButton /> */}
                    </div>

                </div>

            </section>
            {/* <section className='hero' id="pg2" >
                   
            </section> */}
            <section id="abme">
                <About_meCarousel/>
            </section>
            <section id="lavoro">
                <ShiatsuCarousel />
            </section>
            <section id="contatti">
                <Contatti />
            </section>
        </>

    );
}

export default Home;