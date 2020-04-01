import React from 'react';

import Navbar from './navbar/navbar';
import Banner from './banner/banner';
import About from './about/about';
import Services from './services/services';

function Home() {
  return (
      <div className={'Home'}>
        <header>
          <Navbar/>
          <Banner/>
        </header>
        <main>
          <About/>
          <Services/>
          <section>Team</section>
          <section>Our Work</section>
          <section>Testimonials</section>
          <section>Contact</section>
          <section>Careers</section>
        </main>
        <footer>...</footer>
      </div>
  );
}

export default Home;
