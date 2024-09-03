'use client';

import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

export default function Page() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial', 
      background: '#383838',
      color: '#333', 
      textAlign: 'center', 
      padding: '20px'
    }}>
      {/* Frame 1 */}
      <div style={{ 
        fontSize: '12px', 
        color: '#666', 
        marginBottom: '100px' // Espaço de 100 pixels para o Frame 1
      }}>
      </div>
      
      {/* Frame 2 */}
      <img 
        src="/cachorrinho_guerra.jpg" 
        alt="Álbum" 
        style={{ 
          width: '200px', 
          height: '200px', 
          borderRadius: '10px', 
          boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', 
          marginBottom: '100px' // Espaço de 100 pixels para o Frame 2
        }} 
      />
      
      {/* Frame 3 */}
      <div style={{ 
        fontSize: '16px', 
        fontWeight: 'bold',
        color: '#1DB954', 
        marginBottom: '5px' 
      }}>
        Track 01
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#fff', 
        marginBottom: '16px' // Espaço de 16 pixels entre a minutagem e o Frame 4
      }}>
        dogWar
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#666', 
        borderTop: '1px solid #666',
        width: '200px', // Limita a largura da linha de reprodução ao tamanho da imagem
        margin: '0 auto',
        paddingTop: '5px',
        marginBottom: '16px' // Espaço de 16 pixels entre a minutagem e o Frame 4
      }}>
        1:02
      </div>
      
      {/* Frame 4 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center' 
      }}>
        <FaBackward 
          size={24} 
          color="#666" 
          style={{ marginRight: '10px' }}
        />
        <div 
          onClick={togglePlay}
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#1DB954', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'pointer', 
            margin: '0 16px' // Espaçamento de 16px entre a minutagem e o botão de play/pause
          }}
        >
          {playing ? <FaPause size={30} color="#fff" /> : <FaPlay size={30} color="#fff" />}
        </div>
        <FaForward 
          size={24} 
          color="#666" 
          style={{ marginLeft: '30px' }}
        />
      </div>
      
      <audio ref={audioRef} src="/audio/audiowill.mp3" />
    </div>
  );
}
