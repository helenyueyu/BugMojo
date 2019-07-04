import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Splash from './splash'; 

import './greeting.css'

const Greeting = ({currentUser, logout}) => (
    <div>
        <Splash />
    </div>
)

export default Greeting; 