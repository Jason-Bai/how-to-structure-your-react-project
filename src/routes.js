import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/AppPage';
import Home from './containers/HomePage';
import Editor from './containers/EditorPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="editor" component={Editor} />
  </Route>
);
