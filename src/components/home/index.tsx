import * as React from 'react';
import 'css-doodle';
import * as Style from './style';

const BackGD = () => {
  return (
    <div className={Style.backgd} dangerouslySetInnerHTML={{__html: `
        <css-doodle>
        :doodle {
          @grid: 20 / 100vmax;
          background: #0a0c27;
          font-family: sans-serif;
        }
        :after {
          content: @hex(@rand(0x2500, 0x257f));
          color: hsla(@r(360), 70%, 70%, @r(.9));
          font-size: 5vmax;
        }
      </css-doodle>`
    }}>
    </div>
  )
}


const Links = [
  {
    id: 'blog',
    label: '博客',
    link: '//blog.tangzhengxiong.com',
  },{
    id: 'github',
    label: 'github',
    link: 'https://github.com/abelce',
  }, {
    id: 'resume',
    label: 'resume',
    link: 'https://www.linkedin.com/in/%E6%AD%A3%E9%9B%84-%E5%94%90-312323148/',
  }, 
  // {
  //   id: 'others',
  //   label: '其他(业余时间写的东西)',
  //   link: '//admin.tangzhengxiong.com'
  // }
]

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
]

const extend = [
  'golang',
  'docker'
]

class Home extends React.Component {
  render() {
    return (
      <div className={Style.home}>
        <aside className={Style.aside}>
          <div className="pic">
            <img src="http://static.tangzhengxiong.com/67c0029c-74e4-4f4b-843a-f559e56d878c"/>
            <div className={Style.info}>
              <div className="name">唐正雄 abelce</div>
              <div>上海第二工业大学-软件工程</div>
              <div>GraduationTime: 2016.7</div>
              <div>Tel: 13683454649</div>
              <div>Weichat: tzx1061225829</div>
              <div>QQ: 1061225829</div>
              <div>Email: tzx1061225829@gmail.com</div>
            </div>
          </div>
          <section>
            <h5>技术栈(实际上线)</h5>
            <ul>
              {
                kills.map(kill => (
                  <li>
                    {kill}
                  </li>
                ))
              }
            </ul>
          </section>
          <section>
            <h5>涉略</h5>
            <ul>
              {
                extend.map(ex => (
                  <li>
                    {ex}
                  </li>
                ))
              }
            </ul>
          </section>
        </aside>
        <div className={Style.container}>
          <ul className={Style.links}>
            {
              Links.map(item => (
                <li>
                   <a href={item.link} target="_blank">
                     <div className="link">
                        {item.label}
                     </div>
                   </a>
                </li>
              ))
            }
          </ul>
          <footer>
            <p>coding...</p>
          </footer>
        </div>
      </div>
    )
  }
}
export default Home;
