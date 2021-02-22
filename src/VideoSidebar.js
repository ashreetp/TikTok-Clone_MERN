import React,{useState} from "react";
import './VideoSidebar.css';
import axios from './axios';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar({objid,likes,comments,shares}) {
  const [liked,setLiked] = useState(false);
  
  async function likeOff () {
    setLiked(false);
    await axios.put('/v2/posts/likeoff',{objid: objid}).then(() => {
      console.log('done');
    }).catch((err) => {
        console.log(err);
    })
  }
  async function likeOn () {
    setLiked(true);
    axios.put('/v2/posts/likeon',{objid: objid}).then(() => {
      console.log('done 2');
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="videoSidebar" style={{cursor:"pointer"}}>
        <div className="videoSidebar_button">
        {liked ? (
            <FavoriteIcon fontSize="large" onClick={likeOff} />
          ) : (
            <FavoriteBorderIcon fontSize="large" onClick={likeOn} />
          )}
          <p>{liked ? likes+1 : likes}</p>
        </div>

        <div className="videoSidebar_button">
          <MessageIcon fontSize="large" />
          <p>{comments}</p>
        </div>

        <div className="videoSidebar_button">
          <ShareIcon fontSize="large" />
          <p>{shares}</p>
        </div>
    </div>
  );
}

export default VideoSidebar;
