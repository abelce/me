import * as ReactDom from 'react-dom';
import * as React from 'react';
import 'normalize.css';
import './assets/style/index.scss'
import { BrowserRouter } from 'react-router-dom';

import Layout from './layout';
import Routes from './routes';

const render = () => {
  return (
    ReactDom.render(
      <div style={{width: '100vw', height: '100vh'}}>
        <Layout>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </Layout>
      </div>,
      document.getElementById('app')
    )
  )
}

render();