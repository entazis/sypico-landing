import React from 'react';
import classes from './ThankYou.module.css';
import messages from '../localization/en-base';
import {FormattedMessage} from 'react-intl';
import Layout from '../layouts/layout';

function thankYou() {
  return (
      <Layout className={classes.thankYou}>
        <div className={classes.thankYouMessage}>
          <h2><FormattedMessage {...messages.thankYouTitle}/></h2>
          <p><FormattedMessage {...messages.thankYouSubtitle}/></p>
        </div>
      </Layout>
  );
}

export default thankYou;