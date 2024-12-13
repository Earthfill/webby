'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import play from '@/assets/images/play.svg';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='2xl:translate-y-[250px] lg:translate-y-[200px] translate-y-20 mx-auto 2xl:w-2/5 md:w-3/4 w-fit'>
      <video ref={videoRef} className="rounded-xl" controls={isPlaying} poster='/video_overlay.svg'>
        <source src='/video.mp4' type="video/mp4" />
      </video>

      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="-translate-y-24 xl:translate-x-4 flex justify-start transition-all p-2 rounded-full"
          aria-label="Play Video"
        >
          <Image
            src={play}
            alt="Play"
            className="w-16 h-16 cursor-pointer"
          />
        </div>
      )}
    </div>
  )
}