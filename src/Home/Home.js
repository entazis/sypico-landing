import React from 'react';

import Navbar from './navbar/navbar';
import Banner from './banner/banner';
import About from './about/about';
import Services from './services/services';
import Team from './team/team';
import OurWork from './our-work/our-work';

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
          <Team/>
          <OurWork/>
          <section>Testimonials</section>
          <section>Contact</section>
          <section>Careers</section>
        </main>
        <footer>...</footer>
      </div>
  );
}

export default Home;
