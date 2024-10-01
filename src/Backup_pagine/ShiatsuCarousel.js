import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/Carousel/DSC_2524.jpg';
import img2 from '../images/Carousel/DSC_2540.jpg';
import img3 from '../images/Carousel/DSC_2617.jpg';



function ShiatsuCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="custom-itm">
                        
                        <img
                            className="d-block w-100"
                            src={img1}
                        />
                        <div className="custom-caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="custom-itm">
                        
                        <img
                            className="d-block w-100"
                            src={img2}
                            
                        />
                        <div className="custom-caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="custom-itm">                       
                        <img
                            className="d-block w-100"
                            src={img3}
                            
                        />
                        <div className="custom-caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default ShiatsuCarousel;