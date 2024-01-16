"use client"
import React from 'react';

interface youtubePlayerProps{
    url: string
}

export const YoutubePlayer = ({ url } :youtubePlayerProps ) => {
    
  // Extract the video ID from the YouTube URL
  const video = url.split("/")
  const videoId = video[video.length - 1].split("?")[0]

  return (
    <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

