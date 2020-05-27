import React from "react"
import video from "./videos/video.mp4"

const VideoIndex = () => {
    return(
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Intro" style={{marginTop:"15px", paddingLeft:"15px", paddingRight:"15px"}} src={video} className="embed-responsive-item" >
                   
                </iframe>
            </div>
        </>
    )
}

export default VideoIndex