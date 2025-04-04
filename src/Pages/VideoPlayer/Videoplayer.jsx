import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import s from './player.module.css'
import { useParams } from 'react-router-dom';
const VideoPlayer = ({ videoUrl }) => {
    const { videoID } = useParams();
    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    const [quality, setQuality] = useState('360'); // Default quality is 360p
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (videoUrl) {
            loadVideo(videoUrl);
        }
        return () => {
            if (hlsRef.current) hlsRef.current.destroy();
        };
    }, [videoUrl]);

    useEffect(() => {
        if (hlsRef.current && videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const newUrl = `https://d34s66slw1xuws.cloudfront.net/Production/${videoID}/${quality}.m3u8`;
            loadVideo(newUrl, currentTime);
        }
    }, [quality]);

    const loadVideo = (url, startTime = 0) => {
        if (!url || !url.trim()) {
            console.error("Invalid video URL:", url);
            return;
        }

        const video = videoRef.current;

        if (Hls.isSupported()) {
            if (hlsRef.current) hlsRef.current.destroy();

            const hls = new Hls();
            hlsRef.current = hls;
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.currentTime = startTime;
                video.play();
            });

            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error("HLS.js error:", data);
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            hls.recoverMediaError();
                            break;
                        default:
                            hls.destroy();
                            break;
                    }
                }
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadedmetadata', () => {
                video.currentTime = startTime;
                video.play();
            });
        } else {
            console.error("HLS is not supported in this browser.");
        }
    };

    const handleQualityChange = (newQuality) => {
        setQuality(newQuality);
        setIsDropdownOpen(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            <video ref={videoRef} controls style={{ width: '100%', maxHeight: '500px' }} />

            {/* Custom Quality Dropdown */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
                <div
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className={s.iconHolder}
                >
                    Q
                </div>
                {isDropdownOpen && (
                    <div
                       className={s.popStyle}
                    >
                        {['360', '480'].map((res) => (
                            <div
                                key={res}
                                onClick={() => handleQualityChange(res)}
                                className={ quality === res?`${s.popList} ${s.popListActive}`:`${s.popList}`}
                            >
                                {res}p
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;
