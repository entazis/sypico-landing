import React from 'react';
import './App.css';
import Home from './Home/Home';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
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

function App() {
  return (
      <div className="App">
        <IntlProvider locale={locale} messages={messages[locale]}>
          <BrowserRouter>
            <Switch history={history}>
              <Route path='/(en|nl)' exact component={ Home }/>
              <Route render={() => <Redirect to={{pathname: `/${locale}`}} />} />
            </Switch>
          </BrowserRouter>
        </IntlProvider>
      </div>
  );
}
export default App;
