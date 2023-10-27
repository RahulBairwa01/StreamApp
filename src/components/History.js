import React, {useEffect, useState } from "react";

const URL2 = "http://localhost:5000";

const History = ({isExpanded}) => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/history/get", {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const historyData = await response.json();
          setHistoryData(historyData);
        } else {
          console.error("Failed to fetch history");
        }
      } catch (error) {
        console.error("Failed to fetch history:", error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
      <div className="fixed-top" style={{ marginTop: 60, backgroundColor: '#1e2021', marginLeft: isExpanded ? 200 : 78 }}>
        <div className=" flex-column flex-shrink-0 text-bg-dark" style={{ height: 680, overflowY: 'auto', overflowX: 'hidden' }} >
          <h2>Your Viewing History</h2>
          <div className="rounded bg-dark">
            {historyData.map((historyItem) => (
              <div key={historyItem._id}>
                {historyItem.media && (
                  <div className="overflow-x-auto">
                    {historyItem.media.videos.map((video, index) => (
                      <div style={{ display: "flex-column", gap: "20px" }} key={index}>
                        <video width="300" height="200" controls muted loop preload="auto" style={{ borderRadius: 12,  backgroundColor:"#161719" }}>
                          <source src={`${URL2}${video}`} />
                        </video>
                        {historyItem.media && <p className="text-light my-4">{historyItem.media.name}</p>}
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

export default History;