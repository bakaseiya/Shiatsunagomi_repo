import './css/Work.css';
import text from '../texts/texts.json';
import React from 'react';

function Work({ text, images }) {
    return (
        <>
            <div className='content_work'>
                <div className='body_work'
                    style={{
                        backgroundImage: `url(${images})`
                    }}>
                    <div className='box_work '>

                        {text[0] && (<div className='top-left'>
                            <p>{text[0]}</p>
                        </div>
                        )}
                        {text[1] && (<div className='top-right'>
                            <p>{text[1]}</p>
                        </div>
                        )}
                        {text[2] && (<div className='bottom-left'>
                            <p>{text[2]}</p>
                        </div>
                        )}
                        {text[3] && (<div className='bottom-right'>
                            <p>{text[2]}</p>
                        </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}
export default Work;