import React from 'react'
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { BrowserRouter as Router, Switch, Route, Link }  from "react-router-dom";
import Error from './Error.js'

function Header({login}) {
	return (
		<div>
		{ !login ? (<Error />) : (
				<Switch>
					<div className="header">
						<AllInclusiveIcon style={{width:50,height:50}} />
						<div className="header_right">
						<Link to='/signin'>
							<Button variant="outlined" className="header_but">Sign in</Button>
						</Link>
						<Link to='/signup'>
							<Button variant="outlined" className="header_but">Register</Button>
						</Link>
						</div>
					</div>
				</Switch>
			) }
		</div>
	)
}

export default Header