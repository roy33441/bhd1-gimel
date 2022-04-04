import ReactDOM from 'react-dom';
import App from 'App';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from 'common/apolloClient';
import { jss } from 'common/rtl';
import { JssProvider } from 'react-jss';

import theme from 'common/theme';

ReactDOM.render(
  <BrowserRouter>
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </ThemeProvider>
    </JssProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
