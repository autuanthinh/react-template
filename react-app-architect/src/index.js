import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import logo from './images/logo.svg';
import './styles/index.css';

import store, { browserHistory } from './app/stores';
import LanguageProvider from './app/containers/LanguageProvider';
import { translationMessages } from './i18n';
import Routes from './app/routers';

ReactDOM.render(
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store()}>
            <LanguageProvider messages={translationMessages}>
                <Routes history={browserHistory} />
            </LanguageProvider>
        </Provider>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
