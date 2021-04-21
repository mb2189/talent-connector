import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Directory from './containers/Directory/Directory';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Directory />
    </div>
  </BrowserRouter>
);

export default App;
