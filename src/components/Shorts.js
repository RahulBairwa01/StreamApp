import React, { useContext, useEffect } from 'react'
import mediaContext from '../context/media/mediaContext'
import UploadShortlist from './UploadShortlist';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Shorts = ({ page, isExpanded }) => {
    const context = useContext(mediaContext);
    const { medias, getMedia } = context;
    useEffect(() => {
        getMedia(page);
    }, [page]);
    return (
        <div className={isExpanded ? 'leftnav-expanded' : 'leftnav-collapsed'}>
            <div className="fixed-top" style={{ marginTop: 60, backgroundColor: '#1e2021', marginLeft: isExpanded ? 200 : 78 }}>
                <div className=" flex-column flex-shrink-0 text-bg-dark" style={{ height: 680, }} >
                    {medias && <UploadShortlist medias={medias} />}
                </div>
            </div>
        </div>
    )
}
export default Shorts;