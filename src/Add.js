import React,{ useRef } from 'react'
import './Add.css'
import { Input,Button,InputLabel } from '@material-ui/core';
import axios from './axios.js'

function Add() {
	const url = useRef(null);
	const channel = useRef(null);
	const desc = useRef(null);
	const song = useRef(null);

	const upload = () => {
		async function register() {
			const data={
				url : url.current.value,
				channel : channel.current.value,
				description	: desc.current.value,
				song :  song.current.value,
				likes : 0,
				comments : 0,
				shares : 0
			}
			const response = await axios.post("/upload",data);
			return response;
		}
		register().then((data) => {
				if(data.data=="fail")
				{
					console.log('Failed')
					window.alert('Failed')
				} else {
					console.log("Uploaded")
					window.location.href='/'
				}
			}).catch((err) => {
				console.log(err);
			})
	}
	return (
		<div className="add">
			<Input className="add_ip" inputRef={url} placeholder="URL" />
			<Input className="add_ip" inputRef={channel} placeholder="Channel" />
			<Input className="add_ip" inputRef={desc} placeholder="Description" />
			<Input className="add_ip" inputRef={song} placeholder="Song" />
			<Button onClick={upload} variant="outlined" className="add_but">Upload</Button>
		</div>
	)
}

export default Add