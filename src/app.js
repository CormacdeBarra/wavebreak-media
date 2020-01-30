import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import ImageDetail from './components/image-detail';

import Results from './components/results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Results} sta />
        <Route path="/image/:id" component={ImageDetail} />
      </Switch>
    </Router>
  );
}

export default App;
