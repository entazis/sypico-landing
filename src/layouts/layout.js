import React from 'react';

import TopBar from './ui/topBar/topBar';
import Banner from './ui/banner/banner';
import Footer from './ui/footer/footer';
import GoToTop from './ui/go-to-top/go-to-top';

import classes from './layout.module.css';

function layout(props) {
  return (
      <div className={classes.Layout}>
        <header>
          <TopBar/>
          <Banner/>
        </header>
        <main>
          {props.children}
        </main>
        <footer>
          <Footer/>
        </footer>
        <GoToTop/>
      </div>
  );
}

export default layout;
