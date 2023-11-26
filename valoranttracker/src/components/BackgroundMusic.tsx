import React, { useEffect, useState } from 'react';

const BackgroundMusic = () => {
  const [audio] = useState(new Audio('/ValoranTheme.mp3'));

  useEffect(() => {
    audio.loop = true; // Para repetir a música indefinidamente
    audio.play();

    return () => {
      // Limpa os recursos quando o componente é desmontado
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return null; // Este componente não precisa renderizar nada visível
};

export default BackgroundMusic;
