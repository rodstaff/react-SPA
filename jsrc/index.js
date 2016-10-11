import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
// import Bootstrap from './vendor/bootstrap-without-jquery';
import Archives from '../pages/archives';
import Featured from '../pages/featured';
import Layout from '../pages/layout';
import Settings from '../pages/settings';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
        <Route path="archives(/:article)" component={Archives}></Route>
        <Route path="settings(/:tools)" component={Settings}></Route>
    </Route>
  </Router>,
document.getElementById('theOne'));
  