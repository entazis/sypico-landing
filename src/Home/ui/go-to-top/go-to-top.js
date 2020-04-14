import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from 'react-icons/all';

import classes from './go-to-top.module.css';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => document.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }), []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (isVisible && (
          <div className={classes.goToTop} onClick={() => scrollToTop()}>
            <IoIosArrowDropup/>
          </div>
          )
  )
};

export default GoToTop;