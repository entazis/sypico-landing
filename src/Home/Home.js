import React from 'react';

import Navbar from './ui/navbar/navbar';
import Banner from './ui/banner/banner';
import About from './about/about';
import Services from './services/services';
import Team from './team/team';
import OurWork from './our-work/our-work';
import Testimonials from './testimonials/testimonials';
import Contact from './contact/contact';
import Careers from './careers/careers';

function Home() {
  return (
      <div id='home' className='Home'>
        <header>
          <Navbar/>
          <Banner/>
        </header>
        <main>
          <About/>
          <Services/>
          <Team/>
          <OurWork/>
          <Testimonials/>
          <Contact/>
          <Careers/>
        </main>
        <footer>...</footer>
      </div>
  );
}

export default Home;
