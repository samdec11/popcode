import React from 'react';
import fs from 'fs';
import path from 'path';
import {Provider} from 'react-redux';
import bowser from 'bowser';
import createApplicationStore from '../createApplicationStore';
import Workspace from './Workspace';
import BrowserError from './BrowserError';
import {includeStoreInBugReports} from '../util/Bugsnag';

const supportedBrowsers = JSON.parse(fs.readFileSync(
  path.join(__dirname, '../../config/browsers.json')
));

class Application extends React.Component {
  constructor() {
    super();
    const store = createApplicationStore();
    this.state = {store};
    includeStoreInBugReports(store);
  }

  _isUnsupportedBrowser() {
    return bowser.isUnsupportedBrowser(
      supportedBrowsers,
      window.navigator.userAgent
    );
  }

  render() {
    if (this._isUnsupportedBrowser()) {
      return <BrowserError browser={bowser} />;
    }

    return (
      <Provider store={this.state.store}>
        <Workspace />
      </Provider>
    );
  }
}

export default Application;
