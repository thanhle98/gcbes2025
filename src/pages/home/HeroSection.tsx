import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Play, ArrowDown } from "lucide-react";
import { useTranslation } from "../../contexts/LanguageContext";
import { REGISTRATION_FORM_URL } from "../../constants/urls";

interface HeroSectionProps {
  onOpenPopup: () => void;
}

function LazyBackgroundVideo() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !shouldLoadVideo) {
          // Add a small delay to prioritize critical content
          setTimeout(() => setShouldLoadVideo(true), 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Always show poster image - WebP with JPG fallback */}
      <picture>
        <source srcSet="/background-init.webp" type="image/webp" />
        <img
          src="/background-init-compressed.jpg"
          alt="Conference Background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      </picture>

      {/* Load video only when needed */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onCanPlay={handleVideoLoad}
          onLoadedData={handleVideoLoad}
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-custom-gradient-overlay"></div>
    </div>
  );
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPopup }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Lazy Loading */}
      <LazyBackgroundVideo />

      {/* Content */}
      <div className="relative z-10 text-center text-white p-4 pt-20">
        <div className="flex justify-center items-center mb-6">
          <img src="/GCBES-LOGO-WHITE.svg" alt="GCBES Logo" className="h-24" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="block">{t('heroTitle')}</span>
          <span className="block text-cyan-400 drop-shadow-lg">
            {t('heroTitle2')}
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          {t('heroSubtitle')}
        </p>
        <p className="text-md md:text-lg max-w-2xl mx-auto mb-8 opacity-90">
          {t('heroDate')} • {t('heroLocation')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25"
          >
            {t('heroRegister')}
            <ChevronRight className="ml-2 -mr-1 h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            onClick={onOpenPopup}
            className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Play className="mr-2 -ml-1 h-6 w-6" />
            {t('heroWatchVideo')}
          </button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 