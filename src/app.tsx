import * as ReactDom from 'react-dom';
import * as React from 'react';
import './assets/style/index.scss'
import Home from './components/home';

const render = () => {
  return (
    ReactDom.render(
      <div style={{width: '100vw', height: '100vh'}}>
          <Home/>
      </div>,
      document.getElementById('app')
    )
  )
}

render();