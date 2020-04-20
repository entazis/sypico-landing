import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import ReactGA from 'react-ga';
import {IntlProvider} from 'react-intl';
import messages_en from './localization/en-base';
import messages_nl from './localization/nl';
const messages = {
  'en': messages_en,
  'nl': messages_nl
};

ReactGA.initialize('UA-163946556-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const getLocale = () => {
  const localeFromUrl = window.location.pathname.split('/')[1];

  if (messages.hasOwnProperty(localeFromUrl)) {
    Cookie.set('locale', localeFromUrl);
    return localeFromUrl
  }

  return Cookie.get('locale') || 'en';
};

const locale = getLocale();

ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <BrowserRouter>
          <Switch>
            <Route path='/(en|nl)' exact component={ App }/>
            <Route render={() => <Redirect to={{pathname: `/${locale}`}} />} />
          </Switch>
        </BrowserRouter>
      </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
