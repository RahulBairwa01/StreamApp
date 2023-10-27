import React, {useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const UploadMedia = ({ showAlert, isExpanded }) => {
   const [name, setName] = useState('');
   const [isShorts, setIsShorts] = useState(false);
   const [isSubscription, setIsSubscription] = useState(false);
   const [isLibrary, setIsLibrary] = useState(false);
   const [isHistory, setIsHistory] = useState(false);
   const [isTrending, setIsTrending] = useState(false);
   const [isShoping, setIsShoping] = useState(false);
   const [isMusic, setIsMusic] = useState(false);
   const [isMovie, setIsMovie] = useState(false);
   const [isLive, setIsLive] = useState(false);
   const [isGaming, setIsGaming] = useState(false);
   const [isNews, setIsNews] = useState(false);
   const [isSports, setIsSports] = useState(false);
   const [isLearning, setIsLearning] = useState(false);
   const [isFashion, setIsFashion] = useState(false);
   const [videos, setVideos] = useState([]);


   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('name', name);
      data.append('Shorts', isShorts);
      data.append('Subscription', isSubscription);
      data.append('Library', isLibrary);
      data.append('History', isHistory);
      data.append('Trending', isTrending);
      data.append('Shoping', isShoping);
      data.append('Music', isMusic);
      data.append('Movie', isMovie);
      data.append('Live', isLive);
      data.append('Gaming', isGaming);
      data.append('News', isNews);
      data.append('Sports', isSports);
      data.append('Learning', isLearning);
      data.append('Fashion', isFashion);
      // Append each video file separately
      for (let i = 0; i < videos.length; i++) {
         data.append('videos', videos[i]);
      }
      const headers = {
         "auth-token": localStorage.getItem('token')
       };

      const response = await fetch('http://localhost:5000/api/media/upload', {
         method: 'POST',
         headers,
         body: data,
      });

      const result = await response.json();
      console.log(result); // Log the result to check for any errors or information
      if (result.success) {
         showAlert("successfuly submited", "success")
      }
      else {
         showAlert("first select file", "danger")
      }
   };

   return (
      <>
         <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
         <div className="fixed-top" style={{ marginTop: 60, backgroundColor: 'pink', marginLeft: isExpanded ? 200 : 78 }}>
               <div className=" flex-column flex-shrink-0 " style={{ height: 680, overflowY: 'auto', overflowX: 'hidden' }} >
                  <div className="overflow-auto position-absolute top-0 start-50 translate-middle-x " style={{ marginTop: 60 }}>
                     <div className='border border-black rounded d-flex p-2' style={{ width: 404, backgroundColor: 'rgba(88,66,11, 0.5)', alignItems: 'center' }}>
                        <form onSubmit={handleSubmit} style={{ width: 400, alignItems: 'center' }}>
                           <div className='form-group'>
                              <label htmlFor='name'>Name</label>
                              <input type='text' name='name' id='name' className="form-control" onChange={(e) => setName(e.target.value)} />
                           </div>
                           <div className='form-group'>
                              <label htmlFor='videos'>UploadMedia</label>
                              <input type='file' name='videos' id='videos' multiple className="form-control" accept='.mp4, .mkv' onChange={(e) => setVideos(e.target.files)} />
                           </div>
                           <div className='d-flex justify-content-around'>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Shorts' type="checkbox" value={isShorts} id="moviesCheckbox" onChange={(e) => setIsShorts(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Shorts
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Subscription' type="checkbox" value={isSubscription} id="moviesCheckbox" onChange={(e) => setIsSubscription(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Subscription
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Library' type="checkbox" value={isLibrary} id="moviesCheckbox" onChange={(e) => setIsLibrary(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Library
                                 </label>
                              </div>
                           </div>
                           <div className='d-flex justify-content-around'>
                              <div className="form-check ">
                                 <input className="form-check-input" name='History' type="checkbox" value={isHistory} id="moviesCheckbox" onChange={(e) => setIsHistory(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    History
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Trending' type="checkbox" value={isTrending} id="moviesCheckbox" onChange={(e) => setIsTrending(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Trending
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Shoping' type="checkbox" value={isShoping} id="moviesCheckbox" onChange={(e) => setIsShoping(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Shoping
                                 </label>
                              </div>
                           </div>
                           <div className='d-flex justify-content-around'>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Music' type="checkbox" value={isMusic} id="moviesCheckbox" onChange={(e) => setIsMusic(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Music
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Movies' type="checkbox" value={isMovie} id="moviesCheckbox" onChange={(e) => setIsMovie(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Movie
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Live' type="checkbox" value={isLive} id="moviesCheckbox" onChange={(e) => setIsLive(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Live
                                 </label>
                              </div>
                           </div>
                           <div className='d-flex justify-content-around'>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Gaming' type="checkbox" value={isGaming} id="moviesCheckbox" onChange={(e) => setIsGaming(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Gaming
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='News' type="checkbox" value={isNews} id="moviesCheckbox" onChange={(e) => setIsNews(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    News
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Sports' type="checkbox" value={isSports} id="moviesCheckbox" onChange={(e) => setIsSports(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Sports
                                 </label>
                              </div>
                           </div>
                           <div className='d-flex justify-content-around'>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Learning' type="checkbox" value={isLearning} id="moviesCheckbox" onChange={(e) => setIsLearning(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Learning
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Fashion' type="checkbox" value={isFashion} id="moviesCheckbox" onChange={(e) => setIsFashion(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    Fashion
                                 </label>
                              </div>
                              <div className="form-check ">
                                 <input className="form-check-input" name='Movies' type="checkbox" value={isMovie} id="moviesCheckbox" onChange={(e) => setIsMovie(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="moviesCheckbox">
                                    extra
                                 </label>
                              </div>
                           </div>

                           <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
        
         </div>
      </>
   );
};

export default UploadMedia;