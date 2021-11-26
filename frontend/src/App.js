import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import Ranking from './components/Ranking';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/ranking" element={<Ranking/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
  }
}

export default App;
