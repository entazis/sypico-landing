import React from 'react';

import TopBar from '../Home/ui/topBar/topBar';
import Banner from '../Home/ui/banner/banner';
import Footer from '../Home/ui/footer/footer';
import GoToTop from '../Home/ui/go-to-top/go-to-top';

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
