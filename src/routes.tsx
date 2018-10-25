import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Layout, {Slider, Content} from './layout';

class Routes extends React.Component {

  render() {
    return (
      <Layout>
        <Slider/>
        <Content>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </Content>
        </Layout>
    )
  }
}

export default Routes;