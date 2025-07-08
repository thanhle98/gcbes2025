import React from "react";
import { X } from "lucide-react";

interface VideoPopupProps {
  youtubeId: string;
  onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ youtubeId, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors z-10"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPopup; 