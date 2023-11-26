import React, { useEffect, useState } from 'react';

const BackgroundMusic = () => {
  const [audio] = useState(new Audio('ValorantTheme.mp3'));

  useEffect(() => {
    audio.loop = true; 
    audio.play();

    return () => {
     
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return null; 
};

export default BackgroundMusic;
