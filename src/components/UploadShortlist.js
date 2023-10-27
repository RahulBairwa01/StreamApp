import React, { useState, useRef, useEffect } from "react";

const URL = 'http://localhost:5000';

const UploadShortlist = ({ medias }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [iconPaused, setIconPaused] = useState(false);
  const [iconMuted, setIconMuted] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 680;
    if (container) {
      if (direction === "up") {
        container.scrollTop -= scrollAmount;
      } else {
        container.scrollTop += scrollAmount;
      }
      setScrollPosition(container.scrollTop);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const playPromise = entry.target.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Autoplay started!
            })
            .catch(error => {
              // Autoplay was prevented.
              // Show a "Play" button so that user can start playback.
            });
          }
        } else {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const videoElements = document.querySelectorAll('.autoplay-video');
    videoElements.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, [medias]);

  const handleVideoClick = (mediaIndex, videoIndex) => {
    const video = document.getElementById(`video-${mediaIndex}-${videoIndex}`);

    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIconPaused(!video.paused);
    }
  };

  const handleAudioClick = (mediaIndex, videoIndex) => {
    const video = document.getElementById(`video-${mediaIndex}-${videoIndex}`);

    if (video) {
      if (video.muted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
      setIconMuted(video.muted);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        style={{ overflow: "hidden", height: "680px", margin: '0 auto', maxWidth: '70%' }}
      >
        {medias &&
          medias.map((media, mediaIndex) => (
            <div key={media._id} className="d-flex flex-column align-items-center g-3">
              <div>
                {media.videos.map((video, videoIndex) => (
                  <div key={videoIndex} style={{ position: 'relative' }}>
                    <video
                      id={`video-${mediaIndex}-${videoIndex}`}
                      className="autoplay-video"
                      width="350"
                      height="650"
                      autoPlay
                      loop
                      preload="auto"
                      style={{ borderRadius: 18, backgroundColor:"#161719",marginTop:'15px', marginBottom:'10px'}}
                      onClick={() => handleVideoClick(mediaIndex, videoIndex)}
                    >
                      <source src={`${URL}${video}`} />
                    </video>
                    <p className="text-light" style={{ position: 'absolute', bottom: 30, left: 20, color: 'white' }}>
                      {media.name}
                    </p>
                    <i
                      className={`bi ${iconMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'}`}
                      style={{ position: 'absolute', top: 30, right: 20, color: 'white'}}
                      onClick={() => handleAudioClick(mediaIndex, videoIndex)}
                    ></i>
                    <i
                      className={`bi ${iconPaused ? 'bi-pause-fill' : 'bi-play-fill'}`}
                      style={{ position: 'absolute', top: 30, left: 20, color: 'white' }}
                      onClick={() => handleVideoClick(mediaIndex, videoIndex)}
                    ></i>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="d-flex flex-column align-items-center">
        {scrollPosition > 0 && (
          <i
            className="bi bi-arrow-up-circle position-absolute top-0 end-0"
            onClick={() => handleScroll("up")}
            style={{ fontSize: '40px', marginBottom: '16px' }}
          ></i>
        )}
        {scrollPosition < scrollContainerRef.current?.scrollHeight - scrollContainerRef.current?.clientHeight && (
          <i
            className="bi bi-arrow-down-circle position-absolute bottom-0 end-0"
            onClick={() => handleScroll("down")}
            style={{ fontSize: '40px' }}
          ></i>
        )}
      </div>
    </div>
  );
};

export default UploadShortlist;