import React from 'react';

import { Footer, Blog, Possibility, Features, Wsolarmonitoring, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './Apps.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Wsolarmonitoring />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App