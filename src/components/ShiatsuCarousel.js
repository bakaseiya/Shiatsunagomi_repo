import Carousel from 'react-bootstrap/Carousel';
import Work from '../pages/Work';
import img1dsk from '../images/Carousel/DSC_2495.jpeg';
import img2dsk from '../images/Carousel/DSC_2540.jpg';
import img3dsk from '../images/Carousel/DSC_2617.jpg';
import img1mobile from '../images/Carousel/Lavoro1mobile.jpeg';
import img2mobile from '../images/Carousel/Lavoro2mobile.jpeg';
import img3mobile from '../images/Carousel/Lavoro3mobile.jpeg';
import '../pages/css/Work.css';
import text from '../texts/texts.json';

const testi1 = [
    text.slide1
];

const testi2 = [
    null,
    text.benefici
];

const testi3 = [
    null,
    null,
    text.benefici
];



function ShiatsuCarousel() {
    return (
        <div>
            <Carousel interval={null}>
                <Carousel.Item>
                    <Work images={{ desktop: img1dsk, mobile: img1mobile }} text={testi1} />
                </Carousel.Item>
                <Carousel.Item>
                    <Work images={{ desktop: img2dsk, mobile: img2mobile }} text={testi2} />
                </Carousel.Item>
                <Carousel.Item>
                    <Work images={{ desktop: img3dsk, mobile: img3mobile }} text={testi3} />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default ShiatsuCarousel;