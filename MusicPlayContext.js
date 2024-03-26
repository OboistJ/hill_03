import React, { createContext, useContext, useState, useCallback } from 'react';

// Context 생성
const MusicContext = createContext();

// Provider 컴포넌트
export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);

  // 재생 상태 토글 함수
  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlayPause, playbackPosition, setPlaybackPosition, playbackDuration, setPlaybackDuration }}>
      {children}
    </MusicContext.Provider>
  );
};

// 커스텀 훅
export const useMusic = () => useContext(MusicContext);
