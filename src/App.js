import React, { Component } from 'react';
import './App.css';
import { Content, Navigation, Drawer, Header, Layout } from "react-mdl"
import Main from "./components/main"
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className = "header-color" title="Venkatesh Gopalakrishnan" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
