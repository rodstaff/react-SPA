import React from 'react';
import {render} from 'react-dom';
import Bootstrap from './vendor/bootstrap-without-jquery';
import Layout from './pages/layout';

const app = document.getElementById('app1');
render(<Layout />, app);
  