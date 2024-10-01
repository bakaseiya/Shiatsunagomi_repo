import './css/Aboutme.css';
import text from '../texts/texts.json';
import React from 'react';

function AboutMe({ text, images }) {
    return (
        <>
            <div className='content_ab'>
                <div className='body_ab'>
                    <div className='box_ab'>
                        <div className='text_box'>
                            <h1>{text[0]}</h1>
                        </div>
                    </div>
                    {images[0] && (
                        <div className='box_ab'>
                            <img src={images[0]} alt="chieri" className='img_30' />
                            <div className='text_box'>
                                <p>{text[1]}</p>
                            </div>
                        </div>)}


                    {images[1] && (
                        <div className='box_ab'>
                            <div className='text_box'>
                                <p>{text[2]}</p>
                            </div>
                            <img src={images[1]} alt="chieri info" className='img_30' />
                        </div>)}
                </div>
            </div>
        </>
    );
}

export default AboutMe;
