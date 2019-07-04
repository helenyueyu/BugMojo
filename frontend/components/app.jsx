import React from 'react'; 
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom'; 

import SignUpForm from './sign_up/sign_up_form'; 

const App = () => (
    <>
    <h1>Buggie Bug</h1>
    <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/signup" component={SignUpForm} />
    </Switch>
    </>
);

export default App; 