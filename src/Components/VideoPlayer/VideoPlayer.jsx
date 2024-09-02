import React, { useRef } from "react";
import './VideoPlayer.css';
import video from '../../Asset/video-2.mp4';

const VideoPlayer = ({PlayState, SetPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {

        if(e.target === player.current) {
            SetPlayState(false);
        }

    }

    return(

        <div className={`video-player ${PlayState?'':'hide'}`} ref={player} onClick={closePlayer}>

<video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer;