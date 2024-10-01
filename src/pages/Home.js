import React, { useState, useEffect } from 'react';
import './css/Home.css';
import texts from '../texts/texts.json';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import ShiatsuCarousel from '../components/ShiatsuCarousel';
import './css/Carousel.scss';
import Contatti from './Contatti';
import About_meCarousel from '../components/About_meCarousel';
import LoadingScreen from '../components/LoadingScreen';

function Home() {
    // Stato per gestire il caricamento
    const [loading, setLoading] = useState(true);

    // Effetto che simula il caricamento delle sezioni
    useEffect(() => {
        // Simuliamo un ritardo di caricamento
        const timer = setTimeout(() => {
            setLoading(false); // Una volta caricato, imposta loading a false
        }, 2000); // Puoi regolare il timeout in base al tempo reale di caricamento

        // Pulizia del timer
        return () => clearTimeout(timer);
    }, []);

    // Se la pagina è in caricamento, mostra il preloader
    if (loading) {
        return <LoadingScreen />;
    }

    // Una volta caricato, mostra il contenuto della pagina
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
                    </div>
                </div>
            </section>
            <section id="abme">
                <About_meCarousel />
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
