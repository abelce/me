import * as React from 'react';
import * as Style from './style.scss';

const Links = [
  {
    id: 'blog',
    label: '博客',
    link: '//blog.tangzhengxiong.com',
  },
  {
    id: 'github',
    label: 'github',
    link: 'https://github.com/abelce',
  },
  {
    id: 'resume',
    label: 'resume',
    link:
      'https://drive.google.com/file/d/1pqgmvYou99Cj35AOa10vFHGxA_zGdg8o/view?ths=true',
  },
];

const kills = [
  'javasctipt',
  'react',
  'flux',
  'typescript',
  'sass',
  'antd',
  'canvas',
  'cornerstone',
  'webpack',
];

const extend = ['golang', 'docker'];

class Home extends React.Component {
  render() {
    return (
      <div className={Style.home}>
        <aside className={Style.aside}>
          <div className="pic">
            <div className={Style.info}>
              <h1 className="name">Abelce</h1>
              {/* <div className="item">QQ: 1061225829</div> */}
              <div className="item">Email: tzx1061225829@gmail.com</div>
            </div>
          </div>
          <section>
            <h5>技术栈</h5>
            <ul>
              {kills.map(kill => (
                <li>{kill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h5>涉略</h5>
            <ul>
              {extend.map(ex => (
                <li>{ex}</li>
              ))}
            </ul>
          </section>
        </aside>
        <div className={Style.container}>
          <ul className={Style.links}>
            {Links.map((item, index) => (
              <li>
                <a href={item.link} target="_blank">
                  <div className={Style[`link${index + 1}`]}>{item.label}</div>
                </a>
              </li>
            ))}
          </ul>
          <footer />
        </div>
      </div>
    );
  }
}
export default Home;
