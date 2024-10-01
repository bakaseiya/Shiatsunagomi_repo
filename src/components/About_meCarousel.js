import Carousel from 'react-bootstrap/Carousel';
import text from '../texts/texts.json'
import chieriimg from '../images/chieri/chieri.jpeg';
import chieri2 from '../images/chieri/chieri2.jpg';
import chieri3 from '../images/chieri/chieri_not_formatted1.jpg';
import chieri4 from '../images/chieri/chieri4.jpg';
import AboutMe from '../pages/Aboutme';
import '../pages/css/Abcarousel.css';


const testi1 = [
  "",
  text.introduzione + text.ispirazione_shiatsu,
];
const testi2 = [
  "La mia formazione",
  "",
  text.formazione + text.inizio_studio_shiatsu,
];
const testi3 = [
  "La mia formazione",
  text.formazione_shiatsu + text.carriera_shiatsu,
  "",
];

const img = [
  chieri3,
];
const img2 = [
  null,
  chieri2
];

const img3 = [
  chieri4,
  null
];

function About_meCarousel() {
  return (
    <div>
      <Carousel interval={null}>
        <Carousel.Item>
          <AboutMe text={testi1} images={img}></AboutMe>
        </Carousel.Item>
        <Carousel.Item>
          <AboutMe text={testi2} images={img2}></AboutMe>
        </Carousel.Item>
        <Carousel.Item>
          <AboutMe text={testi3} images={img3}></AboutMe>
        </Carousel.Item>
      </Carousel>
    </div>

  );
}

export default About_meCarousel;