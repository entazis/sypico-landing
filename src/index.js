import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import {IntlProvider} from 'react-intl';
import messages_en from './localization/en-base';
import messages_nl from './localization/nl';
const messages = {
  'en': messages_en,
  'nl': messages_nl
};

const trackingId = 'UA-163946556-1';
ReactGA.initialize(trackingId);

const history = createBrowserHistory();
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname);

history.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }
);

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
          <Switch history={history}>
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
