'use client';

// Importações de hooks e ícones
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import musicData, { Music } from './musicData';

export default function Page() {
  // Estado para o índice da faixa atual e se está tocando
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  // Faixa atual com base no índice
  const currentTrack: Music = musicData[currentTrackIndex];

  // Atualiza a fonte do áudio e controla a reprodução
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src;
      if (playing) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, playing, currentTrack.src]);

  // Alterna entre play e pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Erro ao tentar reproduzir:", error);
      });
      }
      setPlaying(!playing);
    }
  };

  // Reproduz a próxima faixa
  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicData.length);
  };

  // Reproduz a faixa anterior
  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + musicData.length) % musicData.length);
  };

  // Seleciona uma faixa da lista
  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setPlaying(true);
  };

  return (
    <div className="container-custom">
      {/* Menu Lateral */}
      <aside className="sidebar-custom">
        <h2>Playlist</h2>
        <ul>
          {musicData.map((track, index) => (
            <li
              key={index}
              onClick={() => handleSelectTrack(index)}
              className={`list-item-custom ${currentTrackIndex === index ? 'bg-gray-700' : 'bg-transparent'}`}
            >
              <strong>{track.title}</strong> by {track.artist}
            </li>
          ))}
        </ul>
      </aside>
  
      {/* Conteúdo Principal */}
      <div className="content-custom">
        {/* Frame 1: Texto informativo */}
        <div className="frame-text">TOCANDO DA SUA BIBLIOTECA</div>
  
        {/* Frame 2: Capa do álbum */}
        <img src={currentTrack.cover} alt="Álbum" className="album-cover" />
  
        {/* Frame 3: Informações da faixa */}
        <div className="track-title">{currentTrack.title}</div>
        <div className="track-artist">{currentTrack.artist}</div>
        <div className="track-duration">{currentTrack.duration}</div>
  
        {/* Frame 4: Controles de reprodução */}
        <div className="controls-container">
          <FaBackward size={24} color="#B2B2B2" onClick={playPreviousTrack} />
          <div onClick={togglePlay} className="play-button">
            {playing ? <FaPause size={30} color="#fff" /> : <FaPlay size={30} color="#fff" />}
          </div>
          <FaForward size={24} color="#B2B2B2" onClick={playNextTrack} />
        </div>
  
        {/* Elemento de áudio escondido */}
        <audio ref={audioRef} />
      </div>
    </div>
  );
}