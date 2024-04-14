// PlaybackContext.js

import React, { createContext, useState } from 'react';

export const PlaybackContext = createContext();

export const PlaybackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);

  return (
    <PlaybackContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isPlaying,
        setIsPlaying,
        playbackPosition,
        setPlaybackPosition,
        playbackDuration,
        setPlaybackDuration,
      }}
    >
      {children}
    </PlaybackContext.Provider>
  );
};
