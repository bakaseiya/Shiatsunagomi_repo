import './css/Contatti.css';
import logo from '../logo/vanilla.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import insta from '../logo/Instagram.png'
import whats from '../logo/whatsapp.png'
import LinkWithImage from '../components/LinkWithImage';
const link_whats = 'https://wa.me/+393771244904';
const link_insta = 'https://www.instagram.com/chwakawaka/';


function Contatti() {
    return (
        <div className='content_contatti'>
            <div className='body_contatti'>
                <div className='box_contatti'>
                    <img className='logo_contatti' src={logo} />
                </div>
                <div className='box_contatti'>
                    <div className='box_box_contatti'></div>
                    <div className='box_box_contatti'>
                        <LinkWithImage imageSrc={whats} altText="Whatsapp" linkUrl={link_whats}/>
                        <LinkWithImage imageSrc={insta} altText="Instagram" linkUrl={link_insta}/>
                    </div>
                    <div className='box_box_contatti'></div>
                </div>
            </div>
        </div>

    );
}

export default Contatti;