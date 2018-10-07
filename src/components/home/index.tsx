import * as React from 'react';
import * as Style from './style';

const Links = [
  {
    id: 'blog',
    label: 'blog',
    link: '//blog.tangzhengxiong.com',
  },
  // {
  //   id: 'zhihu',
  //   label: 'zhihu',
  //   link: 'https://www.zhihu.com/people/abelce/activities'
  // },
  {
    id: 'others',
    label: 'others',
    link: '//tangzhengxiong.com'
  }
]

class Home extends React.Component {
  render() {
    return (
      <div className={Style.home}>
        <div className="container">
          <ul className="links">
            {
              Links.map(item => (
                <li>
                   <a href={item.link} target="_blank">{item.label}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Home;
