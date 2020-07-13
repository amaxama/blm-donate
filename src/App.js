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
                <Link className="App-link" to="/latino-community-lake-street">Latino Community on Lake Street</Link>
              </li>
              <li>
                <Link className="App-link" to="/jxta">Juxtaposition Arts</Link>
              </li>
              <li>
                <Link className="App-link" to="/migizi">Migizi</Link>
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
            <Home />
          </Route>
          {/* <Route path="/migizi" render={() => (window.location = "https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=wWsk24ZWJSTZKsGd1RMKlg0BDvsSG3VIWQCPJNNxD8upkiY7JlDavDsozUE7KG0nFx2NSo8LdUKGuGuF396vbe3IlxBEDvWpyHE5B509BR-XHubq5Z7ap5JVmPErc4ZeYHCKCZhESjGNQmZ5B-6dx5HutT3tgoe4wdbCqVUkWdA%3D&ver=3&utm_source=qr&utm_medium=poster&utm_campaign=blm-poster")} /> */}

          {/* <Route path="/migizi" component={() => {
            window.location.href = "https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=wWsk24ZWJSTZKsGd1RMKlg0BDvsSG3VIWQCPJNNxD8upkiY7JlDavDsozUE7KG0nFx2NSo8LdUKGuGuF396vbe3IlxBEDvWpyHE5B509BR-XHubq5Z7ap5JVmPErc4ZeYHCKCZhESjGNQmZ5B-6dx5HutT3tgoe4wdbCqVUkWdA%3D&ver=3&utm_source=qr&utm_medium=poster&utm_campaign=blm-poster";
            return null;
          }}/> */}

          {/* <Route exact path="/migizi" render={() => {
            window.open("https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=wWsk24ZWJSTZKsGd1RMKlg0BDvsSG3VIWQCPJNNxD8upkiY7JlDavDsozUE7KG0nFx2NSo8LdUKGuGuF396vbe3IlxBEDvWpyHE5B509BR-XHubq5Z7ap5JVmPErc4ZeYHCKCZhESjGNQmZ5B-6dx5HutT3tgoe4wdbCqVUkWdA%3D&ver=3&utm_source=qr&utm_medium=poster&utm_campaign=blm-poster");
            return (<div />);
          }} /> */}

          <Redirect exact from="/migizi" to="/migizi-test" />

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
