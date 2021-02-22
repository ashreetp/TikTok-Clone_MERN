import React,{useState, useEffect} from "react";
import './Sign.css';
import Header from './Header.js'
import Home from './Home.js'
import Signin from './Signin.js'
import Signup from './Signup.js'
import Error from './Error.js'
import { BrowserRouter as Router, Switch, Route, Link }  from "react-router-dom";

const Sign = ({login}) => {
	return (
		<div>
		{ !login ? (<div className="sign">
					<Header login={true} />
					<Home />
				  </div>) : (<Error />)
		}
		</div>
	)
}

export default Sign;