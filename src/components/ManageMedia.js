import React, { useEffect, useState } from "react";

const URL = "http://localhost:5000";

const ManageMedia = ({ isExpanded }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    // Fetch user's media when the component mounts
    fetchUserMedia();
  }, []);

  const fetchUserMedia = async () => {
    try {
      const response = await fetch(`${URL}/api/media/user`, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      if (response.ok) {
        const UserData = await response.json();
        setMedia(UserData);
      } else {
        console.error("Failed to fetch media");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`${URL}/api/media/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      // After successfully deleting the video, you may want to refresh the media list.
      fetchUserMedia();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={isExpanded ? "leftnav-expanded" : "leftnav-collapsed"}>
      <div className="fixed-top" style={{ marginTop: 60, backgroundColor: '#1e2021', marginLeft: isExpanded ? 200 : 78 }}>
          <div
            className="flex-column flex-shrink-0 text-bg-dark"
            style={{ height: 680, overflowY: "auto", overflowX: "hidden" }}
          >
            <h2>Your Media</h2>
            <div className="rounded bg-dark">
              {media.map((item) => (
                <div key={item._id}>
                  {item.videos && (
                    <div className="overflow-x-auto">
                      {item.videos.map((video, index) => (
                        <div
                          style={{ display: "flex-column", gap: "20px" }}
                          key={index}
                        >
                          <video
                            width="300"
                            height="200"
                            controls
                            muted
                            loop
                            preload="auto"
                            style={{ borderRadius: 18 }}
                          >
                            <source src={`${URL}${video}`} />
                          </video>
                          {item.name && (
                            <p className="text-light my-4">{item.name}</p>
                          )}
                          <i
                            className="bi bi-trash3" // Replace with your delete icon
                            onClick={() => handleDeleteClick(item._id)}
                            style={{ cursor: "pointer", color: "red" }}
                          ></i>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ManageMedia;