import React,{ useRef, useState } from 'react'
import Container from '@material-ui/core/Container'
import './Signup.css'
import { Input,Button,InputLabel } from '@material-ui/core';
import Error from './Error.js'
import { Switch, Route, Link, Redirect }  from "react-router-dom";
import axios from './axios.js'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

function Signup({login}) {
	const name = useRef(null);
	const phone = useRef(null);
	const email = useRef(null);
	const uname = useRef(null);
	const pass = useRef(null);
	const [red, setRed] = useState(true);

	const reg = () => {
		async function register() {
			const data = {
				fullname: name.current.value,
				phonenumber: phone.current.value,
				email: email.current.value,
				username: uname.current.value,
				password: pass.current.value
			}
			const response = await axios.post("/register",data);
			return response;
		}
		register().then((data) => {
			if(data.data=="User Exists")
			{
				console.log('User Exists')
				window.alert('User Exists')
			} else {
				console.log("Registered")
				setRed(false);
			}
		}).catch((err) => {
			console.log(err);
		})
	}
	
	return (
		<div>
		{ login ? (<Redirect to="/" exact />) : (
				<div className="main2">
				<div maxWidth="sm" className="con2">
					<AllInclusiveIcon style={{width:50,height:50}} className="icon" />
					<div className="con_div2">
						<InputLabel className="con_fields2">Full Name </InputLabel>
						<Input className="con_fields2" inputRef={name} />
						<InputLabel className="con_fields2">Phone Number </InputLabel>
						<Input className="con_fields2" inputRef={phone} />
						<InputLabel className="con_fields2">Email </InputLabel>
						<Input className="con_fields2" inputRef={email} />
						<InputLabel className="con_fields2">Username </InputLabel>
						<Input className="con_fields2" inputRef={uname} />
						<InputLabel className="con_fields2">Password </InputLabel>
						<Input className="con_fields2" inputRef={pass}/>
						{ red ? (<Button onClick={reg} className="con_but2" variant="outlined" color="secondary">Register</Button>) : (<Redirect to='/signin' exact />) }
					</div>
				</div>
			</div>
			) }
		
		</div>
	)
}

export default Signup