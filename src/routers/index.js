import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SubmitButton from './SubmitButton';


export default () => (
  <BrowserRouter>
   <Switch>
      <Route path="/submit" exact component={SubmitButton} />
   </Switch>
  </BrowserRouter>
);
