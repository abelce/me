import * as React from 'react';
import * as Style from './style.scss';

class Content extends React.Component {

  render () {
    if (this.props.children && !React.isValidElement(this.props.children)) {
      throw new Error('The child component is not a valid element');
    }
    return <div className={Style.main}>
      {this.props.children}
    </div>
  }
}

export default Content;