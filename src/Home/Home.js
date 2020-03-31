import React from 'react';

import Navbar from './navbar/navbar';
import Banner from './banner/banner';

function Home() {
  return (
      <div className={'Home'}>
        <header>
          <Navbar/>
          <Banner/>
        </header>
        <main>...</main>
        <footer>...</footer>
      </div>
  );
}

export default Home;
