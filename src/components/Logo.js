import logo from '../logo/vanilla.png';
import '../App.css';
import { useState } from 'react';
import Popup from './Popup';
import texts from '../texts/texts.json';

function Logo() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="logo" onClick={handleClick}>
      <img className="imglogo" src={logo} alt="Bootstrap" />
      {showPopup && (
        <Popup message={texts.popupMessageLogo} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Logo;

