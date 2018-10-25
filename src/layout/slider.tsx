import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as Style from './style.scss';

const navs = [
  {
    id: 'home',
    label: 'home'
  },
  {
    id: 'project',
    label: 'project'
  },
  {
    id: 'skills',
    label: 'skills'
  },
  {
    id: 'contact',
    label: 'contact'
  },
];

class Slider extends React.Component {
  render() {
    return <div className={Style.slider}>
      <header>
        <h3>name</h3>
      </header>
      <nav>
        <ul>
          {
            navs.map(item => <li key={item.id}>
              <NavLink exact to={`/${item.id}`}>
                {item.label}
              </NavLink>
            </li>)
          }
        </ul>
      </nav>
      <footer>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/abelce">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.linkedin.com/in/%E6%AD%A3%E9%9B%84-%E5%94%90-312323148/">
              LinkIn
            </a>
          </li>
        </ul>

      </footer>
    </div>
  }
}

export default Slider;