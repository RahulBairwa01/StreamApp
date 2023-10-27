import React from "react";
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:5000';

const Uploadlist = ({ medias }) => {
  const navigate = useNavigate();

  function handleClick(media) {
    navigate("/Main", { state: { media, medias} });
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ marginLeft: 4 }}>
      {medias &&
        medias.map((media) => (
          <div key={media._id} className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ marginLeft: 4 }}>
            <div>
              {media.videos.map((video, index) => (
                <div key={index}>
                  <video
                    width="400"
                    height="240"
                    autoPlay={false}
                    loop
                    preload="auto"
                    muted
                    style={{ borderRadius: 8 ,backgroundColor:'#141618e8' }}
                    onMouseOver={(e) => { e.target.play() }}
                    onMouseOut={(e) => { e.target.pause() }}
                    onClick={() => handleClick(media)}
                  >
                    <source src={`${URL}${video}`} />
                  </video>
                  <p className="text-light">
                    {media.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Uploadlist;