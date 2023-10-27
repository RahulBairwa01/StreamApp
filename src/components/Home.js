import React, { useContext, useEffect } from 'react'
import mediaContext from '../context/media/mediaContext'
import Uploadlist from './Uploadlist';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Home = ({page , isExpanded }) => {
    const context = useContext(mediaContext);
    const { medias, getMedia } = context;
    useEffect(() => {
        getMedia(page);
    }, [page]);
    return (
        /*<div className="container.d-flex fixed-left">
            <div className='position-absolute top-0 start-0'style={{ width: 200, marginTop:60}}>
     */
        <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
         <div className="fixed-top" style={{ marginTop: 60, backgroundColor: '#1e2021', marginLeft: isExpanded ? 200 : 78 }}>
            <div className=" flex-column flex-shrink-0 text-bg-dark" style={{ height: 680, overflowY: 'auto', overflowX:'hidden' }} >
            {medias && <Uploadlist medias={medias} />}
            </div>
        </div>
        </div>
    )
}
export default Home;