import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import mediaContext from '../context/media/mediaContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const URL2 = 'http://localhost:5000';

const Main = ({ isExpanded }) => {
  const location = useLocation();
  const { state } = location;
  const media = state ? state.media : null;

  const context = useContext(mediaContext);
  const { medias, getMedia } = context;
  const [currentMedia, setCurrentMedia] = useState(media);
  const [isPlayingNewVideo, setIsPlayingNewVideo] = useState(false);

  useEffect(() => {
    getMedia('getmedia');
  }, [getMedia]);

  useEffect(() => {
    if (state && state.media) {
      setIsPlayingNewVideo(true);
    }
  }, [state]);

  useEffect(() => {
    if (media) {
      setCurrentMedia(media);
      setIsPlayingNewVideo(true);
    }
  }, [media]);

  function handleClick(media) {
    setCurrentMedia(media);
    setIsPlayingNewVideo(true);
  }

  function recordHistoryIfNewVideo() {
    if (isPlayingNewVideo) {
      recordHistory(currentMedia._id);
      setIsPlayingNewVideo(false);
    }
  }

  const recordHistory = async (mediaId) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      };
  
      const response = await fetch("http://localhost:5000/api/history/record", {
        method: "POST",
        headers,
        body: JSON.stringify({ mediaId }),
      });
  
      if (response.ok) {
        console.log("History recorded successfully");
      } else {
        console.error("Failed to record history");
      }
    } catch (error) {
      console.error("Failed to record history:", error);
    }
  };

  return (
    <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
        <div className="fixed-top row row-cols-2 row-cols-lg-5 " style={{ marginTop: 60, backgroundColor: '#1e2021',marginLeft:isExpanded ? 0 : 78  }}>
          <div className={isExpanded ?"overflow-y-scroll" : "flex-column flex-shrink-0 text-bg-dark overflow-y-scroll"} style={{ height:isExpanded ? 720: 680, width:isExpanded ? 1045: 960, backgroundColor: '#1e2021' }}>
            {currentMedia && (
              <div key={currentMedia._id}>
                {currentMedia.videos.map((video, index) => (
                  <div style={{ display: 'flex', gap: '20px',marginLeft:isExpanded ? '50px': '0'}} key={`${currentMedia._id}-${index}`}>
                    <video
                      width="900"
                      height="540"
                      autoPlay
                      controls
                      loop
                      preload="auto"
                      style={{ borderRadius: 18 , backgroundColor:"#000",marginTop:20 }}
                      onPlay={recordHistoryIfNewVideo}
                    >
                      <source src={`${URL2}${video}`} />
                    </video>
                  </div>
                ))}
                {currentMedia && <p className="text-light my-4">{currentMedia.name}</p>}
              </div>
            )}
          </div>

          <div className="flex-column flex-shrink-0" style={{ height: 680, width: 450, overflowY: 'auto', overflowX: 'hidden', backgroundColor: '#1e2021' }}>
            <div className="flex-column" style={{ marginLeft: 4 }}>
              {medias &&
                medias.map((media) => (
                  <div key={media._id} className="" style={{ marginLeft: 4 }}>
                    <div>
                      {media.videos.map((video, index) => (
                        <div style={{ display: 'flex', gap: '20px' }} key={`${media._id}-${index}`}>
                          <div className="my-4" style={{ width: '205px' }}>
                            <video
                              width="200"
                              height="100"
                              loop
                              preload="auto"
                              style={{ borderRadius: '8px', backgroundColor:"#161719" }}
                              onClick={() => handleClick(media)}
                              onPlay={recordHistoryIfNewVideo}
                            >
                              <source src={`${URL2}${video}`} />
                            </video>
                          </div>
                          <p className="text-light my-4">{media.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Main;