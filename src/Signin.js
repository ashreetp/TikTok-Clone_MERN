import React,{ useRef, useState, useContext } from 'react'
import Container from '@material-ui/core/Container'
import './Signin.css'
import { Input,Button,InputLabel } from '@material-ui/core';
import { Switch, Route, Link, Redirect }  from "react-router-dom";
import axios from './axios.js'
import { Login } from './Login.js'
import Cookies from 'js-cookie'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

function Signin({login}) {
	const uname = useRef(null);
	const pass = useRef(null);
	const {user,setUser} =useContext(Login)
	const [red, setRed] = useState(true)
	const log = () => {
		async function login() {
			const data = {
				username: uname.current.value,
				password: pass.current.value
			}
			const response = await axios.post("/login",data);
			return response;
		}
		login().then((data) => {
			if(data.data=="fail")
			{
				console.log('failed to login')
				window.alert('Login Failed')
			} else {
				Cookies.set("name","true")
				setUser(true);
			}
		}).catch((err) => {
			console.log(err);
		})
	}
	const debug = () => {
		console.log(red)
	}
	
	return (
		<div>
		{ login ? (<Redirect to='/' exact />) : (
				<div className="main3">
					<div maxWidth="sm" className="con3">
						<AllInclusiveIcon style={{width:50,height:50}} className="icon3" />
						<div className="con_div3">
							<InputLabel className="con_fields34">Enter Username </InputLabel>
							<Input className="con_fields34" inputRef={uname} />
							<InputLabel className="con_fields34">Enter Password </InputLabel>
							<Input className="con_fields34" inputRef={pass} />
							{ red ? (<Button onClick={log} className="con_but3" variant="outlined" color="secondary"> Login </Button>) : (<Redirect to='/' />) }
							
						</div>
					</div>
				</div>
			) }
		</div>
	)
}

export default Signin