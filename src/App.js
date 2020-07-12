import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/migizi">Migizi</Link>
            </li>
            <li>
              <Link to="/du-nord-riot-recovery-fund">Du Nord Riot Recovery Fund</Link>
            </li>
            <li>
              <Link to="/tccj4j">Twin Cities Coalition for Justice 4 Jamar</Link>
            </li>
          </ul>
        </nav>

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

          <Route exact path="/migizi" render={() => {
            window.open("https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=wWsk24ZWJSTZKsGd1RMKlg0BDvsSG3VIWQCPJNNxD8upkiY7JlDavDsozUE7KG0nFx2NSo8LdUKGuGuF396vbe3IlxBEDvWpyHE5B509BR-XHubq5Z7ap5JVmPErc4ZeYHCKCZhESjGNQmZ5B-6dx5HutT3tgoe4wdbCqVUkWdA%3D&ver=3&utm_source=qr&utm_medium=poster&utm_campaign=blm-poster");
            return (<div />);
          }} />
          <Route exact path="/du-nord-riot-recovery-fund" render={() => {
            window.open("https://www.gofundme.com/f/minnesota-poc-business-support?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet");
            return null;
          }} />
          <Route exact path="/tccj4j" />
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
