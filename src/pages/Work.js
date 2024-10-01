import './css/Work.css';
import text from '../texts/texts.json';
import React, { useState, useEffect } from 'react';

function Work({ text, images }) {
    const [backgroundImage, setBackgroundImage] = useState(images.desktop); // Default to desktop image

    useEffect(() => {
        // Function to handle image switch based on window size
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 1024) {
                setBackgroundImage(images.mobile); // Use mobile image for smaller screens
            } else {
                setBackgroundImage(images.desktop); // Use desktop image for larger screens
            }
        };

        // Initial check
        updateBackgroundImage();

        // Add a resize event listener to update image when the window is resized
        window.addEventListener('resize', updateBackgroundImage);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', updateBackgroundImage);
    }, [images]);

    return (
        <>
            <div className='content_work'>
                <div className='body_work'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}>
                    
                        {text[0] && (
                            <div className='top-left'>
                                <p>{text[0]}</p>
                            </div>
                        )}
                        {text[1] && (
                            <div className='top-right'>
                                <p>{text[1]}</p>
                            </div>
                        )}
                        {text[2] && (
                            <div className='bottom-left'>
                                <p>{text[2]}</p>
                            </div>
                        )}
                        {text[3] && (
                            <div className='bottom-right'>
                                <p>{text[3]}</p>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
}

export default Work;
