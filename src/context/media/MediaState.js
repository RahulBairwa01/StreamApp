import { useState } from "react"
import MediaContext from "./mediaContext"
const MediaState = (props) => {
    const host = "http://localhost:5000"
    const mediaInitial=[];
    const [medias ,setMedia]=useState(mediaInitial)
    const getMedia = async(page)=>{
        const response = await fetch(`${host}/api/media/${page}`, {
            method: "GET"
    });
    const json= await response.json();
    setMedia(json)
    }
    return(
        <MediaContext.Provider value={{medias,getMedia}}>
            {props.children}
        </MediaContext.Provider>
    )
}
export default MediaState;