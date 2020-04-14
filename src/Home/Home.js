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
import Footer from './ui/footer/footer';
import GoToTop from './ui/go-to-top/go-to-top';

import classes from './Home.module.css';

function Home() {
  return (
      <div id='home' className={classes.Home}>
        <header>
          <Navbar/>
          <Banner/>
        </header>
        <main>
          <Services/>
          <About/>
          <Team/>
          <OurWork/>
          <Testimonials/>
          <Contact/>
          <Careers/>
        </main>
        <footer>
          <Footer/>
        </footer>
        <GoToTop/>
      </div>
  );
}

export default Home;
