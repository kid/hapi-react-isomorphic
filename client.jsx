import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App.jsx';

// eslint-disable-next-line no-undef
const targetElement = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  targetElement
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      targetElement
    );
  });
}
