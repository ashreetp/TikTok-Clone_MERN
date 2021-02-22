import React,{useState, useEffect, useContext } from "react";
import './App.css';
import Video from "./Video";
import Error from './Error.js'
import axios from "./axios";
import Sign from './Sign.js';
import { Switch, Route, Link, Redirect }  from "react-router-dom";
import Signin from './Signin.js'
import Signup from './Signup.js'
import { Login } from './Login.js'
import Cookies from 'js-cookie'
import Add from './Add.js'
import Button from '@material-ui/core/Button';

function App() {
	const [videos,setVideos] = useState([]);
  const [user,setUser] = useState(false);

  useEffect(() => {
		async function fetchPosts() {
			const response = await axios.get("/v2/posts");
			setVideos(response.data);
			return response;
		}
		fetchPosts();
	}, []);
  const logout = () => {
    Cookies.remove("name")
    window.location.href="/"
  }
  return (
    <Login.Provider value={ {user, setUser} }>
      { user || Cookies.get("name") ? (
        <Switch>
        <Route path='/signin' exact>
          <Redirect to='/' exact />
        </Route>
        <Route path='/add' exact>
          <Add />
        </Route>
        <Route path='/' exact>
          <div className="but">
            <Link to='/add'>
              <Button variant="outlined" className="but_but"> ADD </Button>
            </Link>
            <Button variant="outlined" className="but_but" onClick={logout}> LOGOUT </Button>
          </div>
          <div className="app">
              <div className="app_videos">
                {videos.map(
                  ({_id,url,channel,description,song,likes,comments,shares}) => (
                    <Video login={true} objid={_id} url={url} channel={channel} description={description} song={song} likes={parseInt(likes)} comments={parseInt(comments)} shares={parseInt(shares)} />
                  )
                )};
              </div>
            </div>
          </Route>
          <Route component={Error} />
        </Switch>
        ) : (
        <Switch>
          <Route path='/signin' exact>
            <Signin login={false} />
          </Route>
          <Route path='/signup' exact>
            <Signup login={false} />
          </Route>
          <Route path='/' exact>
            <Redirect to="/welcome" exact /> 
          </Route>
          <Route path='/welcome' exact>
            <Sign login={false} />
          </Route>
          
          <Route component={Error} />
        </Switch>
        )
      }
    </Login.Provider>
  );
}

export default App;