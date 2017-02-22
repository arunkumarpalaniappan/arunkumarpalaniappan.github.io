import React from 'react';
import { Route, IndexRoute } from 'react-router';

let Home =  require('./components/Home');
let About =  require('./components/About');
let Projects =  require('./components/Projects');
let Experience =  require('./components/Experience');
let Contact =  require('./components/Contact');


export default(
  <Route>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/me" component={About} />
    <Route path="/pro" component={Projects} />
    <Route path="/exp" component={Experience} />
    <Route path="/reach" component={Contact} />
    <Route path="*" component={Home} />
  </Route>
);
