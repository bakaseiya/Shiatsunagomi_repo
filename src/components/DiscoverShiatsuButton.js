import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './DiscoverShiatsu.css';

const DiscoverShiatsuButton = () => {
  return (
    <Link
      to="pg2"
      smooth={true}
      duration={500}
      style={{ textDecoration: 'none' }}
    >
      <button
        type="button"
        className="discover-btn" 
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Scopri lo Shiatsu <FaArrowDown style={{ marginLeft: '10px' }} />
      </button>
    </Link>
  );
};

export default DiscoverShiatsuButton;
