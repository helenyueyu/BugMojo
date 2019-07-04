import React from 'react'; 
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom'; 

import SignUpFormContainer from './sign_up/sign_up_form_container'; 
import SignInFormContainer from './sign_in/sign_in_form_container';
import ProfileContainer from './profile/profile_container'; 

const App = () => (
    <>
    <h1>Buggie Bug</h1>
    <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/login" component={SignInFormContainer} />
        <Route exact path="/users/:userName" component={ProfileContainer} />
    </Switch>
    </>
);

export default App; 