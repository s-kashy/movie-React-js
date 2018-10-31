import React, { Component } from 'react';
import Layout from "./Container/Layout/Layout"
import { Route, Switch} from "react-router-dom";
import LandingPage from "./Container/LandingPage/LandingPage"
import Header from "./Container/Header/Header"
import Footer from "./Component/Footer/Footer"
import Aux from './Hoc/Hoc'
import './App.css';

class App extends Component {




  render() {

    const redirectAuth = (
      <div>
        <Header />
        <Switch>
          <Route path='/' component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    )


    return (
      <Aux>
        <Layout>{redirectAuth}</Layout>
      </Aux>
    );
  }
}

export default App;
