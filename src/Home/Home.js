import React from 'react';

import About from './about/about';
import Services from './services/services';
import Team from './team/team';
import OurWork from './our-work/our-work';
import Testimonials from './testimonials/testimonials';
import Contact from './contact/contact';
import Careers from './careers/careers';
import Layout from '../layouts/layout';

import classes from './Home.module.css';

function Home() {
  return (
      <Layout id='home' className={classes.Home}>
          <Services/>
          <OurWork/>
          <Team/>
          <Testimonials/>
          <About/>
          <Contact/>
          <Careers/>
      </Layout>
  );
}

export default Home;
