import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({objid,url,channel,description,song,likes,comments,shares}) {
	const [playing,setPlaying]=useState(false);
	const videoRef = useRef(null);

	const handleVideoPress = () => {
		if(playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
		    setPlaying(true);
		}
	}
	
  return (
    <div className="video" style={{cursor:"crosshair"}}>
    	<video tabIndex="1" onMouseOver={handleVideoPress} onMouseOut={handleVideoPress} ref={videoRef} className="video_player" loop src={url}>
    	</video>
    	<VideoFooter channel={channel} description={description} song={song} />
    	<VideoSidebar objid={objid} likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;
