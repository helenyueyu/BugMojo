import React from 'react'; 

import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom'; 

import NavBarContainer from './navbar/navbar_container'; 
import SignUpFormContainer from './sign_up/sign_up_form_container'; 
import SignInFormContainer from './sign_in/sign_in_form_container';
import ProfileContainer from './profile/profile_container'; 
import { AuthRoute, ProtectedRoute } from '../util/routeUtil'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={SignInFormContainer} />
            <ProtectedRoute exact path="/users/:userName" component={ProfileContainer} />
        </Switch>
    </div>
);

export default App; 