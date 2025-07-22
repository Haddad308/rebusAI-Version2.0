"use client"

import type React from "react"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>
}

export function VideoControls({ videoRef }: VideoControlsProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="absolute bottom-8 right-8 z-30 flex space-x-2">
      <Button
        onClick={togglePlay}
        size="sm"
        className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-full w-10 h-10 p-0"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
      <Button
        onClick={toggleMute}
        size="sm"
        className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-full w-10 h-10 p-0"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>
    </div>
  )
}
