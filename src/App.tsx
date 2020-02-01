import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import {
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Home from './pages/home/home';
import TabPage from './pages/tabpage/Tabpage';

export default function App() {
  
  const [activeIndex, setActiveIndex] = useState('home');
  const handleNavbarclick = (event: any, data: MenuItemProps) => {
    setActiveIndex(data.name!);
  };

  return (
    <HashRouter>
      <Menu>
        <Menu.Item
          as={ Link }
          to='/'
          name='home'
          active={activeIndex === 'home'}
          onClick={handleNavbarclick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/tabpage/tab1'
          name='tabpage'
          active={activeIndex === 'tabpage'}
          onClick={handleNavbarclick}
        >
          Tabpage
        </Menu.Item>

        <Menu.Item as={Link}
          to='/about'
          name='about'
          active={activeIndex === 'about'}
          onClick={handleNavbarclick}
        >
          About
        </Menu.Item>

      </Menu>
  
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tabpage/:slug/">
            <TabPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </HashRouter>
  );
}


function About() {
  return <h2>About</h2>;
}