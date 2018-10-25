import * as React from 'react';
export {default as Slider} from './slider';
export {default as Content} from './content';
import * as Style from './style.scss';

class Layout extends React.Component {
  render() {
    return <div className={Style.layout}>
      {this.props.children}
    </div>
  }
}
export default Layout;