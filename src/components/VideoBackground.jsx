import React from 'react';
import video from '../assets/movie_.mp4'

function VideoBackground(props) {
    return (
       
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-cover bg-no-repeat">
        <video className="inset-0 object-cover w-full h-full" loop autoPlay muted>
            <source src={video} type="video/mp4" />
        </video>
    </div>
    );
}

export default VideoBackground;