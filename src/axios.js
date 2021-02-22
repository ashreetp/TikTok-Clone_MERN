import axios from "axios";

// https://tiktok-fullstack.herokuapp.com/

const instance = axios.create({
	baseURL: "https://tiktok-mern9.herokuapp.com/",
});

export default instance;