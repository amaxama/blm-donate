import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
       
          {/* <nav>
            <ul className="header">
              <li>
                <NavLink className="App-link" to="/">Home</NavLink>
              </li>
              <li>
                <Link className="App-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="App-link" to="/migizi">Migizi</Link>
              </li>
            </ul>
          </nav> */}
          <h1>
            BLACK LIVES MATTER
          </h1>
          <h5>
            Support these local Twin Cities organizations
          </h5>
          <ul className="org-list">
              <li>
                <a className="App-link" href="/du-nord-riot-recovery-fund">
                  Du Nord Riot Recovery Fund
                </a>
              </li>
              <li>
                <a className="App-link" href="/latino-community-lake-street">
                  Latino Community on Lake Street
                </a>
              </li>
              <li>
                <a className="App-link" href="/jxta">
                  Juxtaposition Arts
                </a>
              </li>
              <li>
                <a className="App-link" href="/migizi">
                  Migizi
                </a>
              </li>
              <li> 
                <a className="App-link" href="https://blm-donate.netlify.app/tccj4j">
                  Twin Cities Coalition for Justice 4 Jamar
                </a>
              </li>
            </ul>
            </header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
