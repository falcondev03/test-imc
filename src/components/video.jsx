import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

const VideoIndex = () => {
    const video = useStaticQuery(graphql`
       query{
                file(relativePath: {eq: "videos/video.mp4"}) {
                    publicURL
                }
            }
        `)

    return(
        <Fragment>
            <div className="embed-responsive embed-responsive-16by9" style={{paddingRight:"10px",paddingLeft:"10px", marginTop: "10px"}}>
                <video controls className="embed-responsive-item">
                    <source src={video.file.publicURL} type="video/mp4"/>
                </video>
            </div>
        </Fragment>
    )
}

export default VideoIndex
