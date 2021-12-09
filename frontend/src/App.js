import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Admin from './Admin';
import NoMatch from './NoMatch';
import Ranking from './components/Ranking';
import TeamStatistics from './components/TeamStatistics';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import StatsJoueurs from './components/StatsJoueurs';
import GraphScorers from './components/GraphScorers';
import GraphRebounders from './components/GraphRebounders';
import GraphAssists from './components/GraphAssists';
import ShoppingDetails from './components/ShoppingDetails';


class App extends Component {
  render(){
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/shop/:id" element={<ShoppingDetails/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/ranking" element={<Ranking/>} />
            <Route path="/statsJoueurs" element={<StatsJoueurs/>} />
            <Route path="/statsJoueurs/graphscorers" element={<GraphScorers/>} />
            <Route path="/statsJoueurs/graphassists" element={<GraphAssists/>} />
            <Route path="/statsJoueurs/graphrebounders" element={<GraphRebounders/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
  }
}

export default App;
