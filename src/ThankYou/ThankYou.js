import React from 'react';
import classes from './ThankYou.module.css';
import messages from '../localization/en-base';
import {FormattedMessage} from 'react-intl';
import TopBar from '../Home/ui/topBar/topBar';
import Banner from '../Home/ui/banner/banner';

function thankYou() {
  return (
      <div className={classes.thankYou}>
        <TopBar/>
        <Banner/>
        <div className={classes.thankYouMessage}>
          <h2><FormattedMessage {...messages.thankYouTitle}/></h2>
          <p><FormattedMessage {...messages.thankYouSubtitle}/></p>
        </div>
      </div>
  );
}

export default thankYou;