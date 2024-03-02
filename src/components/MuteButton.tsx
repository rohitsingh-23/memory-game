import React, { useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = process.env.PUBLIC_URL + '/audio/background-music.mp3';
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='mute-btn-container'>
      <audio ref={audioRef} src={audioSrc} loop></audio>
      <button
        className='mute-btn'
        style={{
          backgroundColor: `${isPlaying ? "#e5a916": "#df4f5f"}`,
        }}
        onClick={toggleAudio}
      >
        {isPlaying ? <FaVolumeUp style={{fontSize: "3rem", color: "#fff"}} /> : <FaVolumeMute style={{fontSize: "3rem", color: "#fff"}} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
