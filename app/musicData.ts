// src/data/musicData.ts

export interface Music {
    title: string;
    artist: string;
    duration: string;
    src: string;
    cover: string;
  }
  
  const musicData: Music[] = [
    {
      title: 'Cachorro loco',
      artist: 'DogsWar',
      duration: '3:49',
      src: '\audiowill.mp3',
      cover: '/cachorrinho_guerra.jpg'
    },
    {
      title: 'O canto do dog',
      artist: 'DogsWar',
      duration: '3:15',
      src: '\audiowill.mp3',
      cover: '/cachorrinho_guerra.jpg'
    },
    {
      title: '4 patas',
      artist: 'DogsWar',
      duration: '4:00',
      src: '\audiowill.mp3',
      cover: '/cachorrinho_guerra.jpg'
    }
  ];
  
  export default musicData;
  