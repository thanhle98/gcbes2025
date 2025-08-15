import React, { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Clock, Utensils, Music, Camera, Users, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import RegisterCTA from "../../components/common/RegisterCTA";

export default function GalaPage() {
  const { t } = useTranslation();
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const dinnerImages: string[] = [
    "HBM_3621",
    "HBM_3637",
    "HBM_3657",
    "HBM_3661",
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((p) => (p - 1 + dinnerImages.length) % dinnerImages.length);
  const showNext = () => setCurrentImageIndex((p) => (p + 1) % dinnerImages.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const programSchedule = [
    {
      time: "19:00-20:00",
      title: t("galaProgram1"),
      icon: Users,
      color: "from-rose-500 to-pink-500"
    },
    {
      time: "20:00-21:00", 
      title: t("galaProgram2"),
      icon: Utensils,
      color: "from-orange-500 to-red-500"
    },
    {
      time: "21:00-21:30",
      title: t("galaProgram3"),
      icon: Sparkles,
      color: "from-purple-500 to-indigo-500"
    },
    {
      time: "21:30-22:00",
      title: t("galaProgram4"),
      icon: Music,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const networkingActivities = [
    {
      title: t("galaNetworking1"),
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t("galaNetworking2"),
      icon: Sparkles,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: t("galaNetworking3"),
      icon: Users,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: t("galaNetworking4"),
      icon: Camera,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t("galaTitle")}
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-600" />
                <span className="font-medium">{t("galaSubtitle")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-medium">{t("galaTime")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-600" />
                <span className="font-medium">{t("galaLocation")}</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("galaDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("galaProgram")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programSchedule.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      {item.time}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Activities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("galaNetworking")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkingActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("galaFeature1Title")}</h3>
              <p className="text-gray-600">{t("galaFeature1Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("galaFeature2Title")}</h3>
              <p className="text-gray-600">{t("galaFeature2Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("galaFeature3Title")}</h3>
              <p className="text-gray-600">{t("galaFeature3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("galaUnforgettableTitle")}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t("galaUnforgettableDesc")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80">{t("galaStatsDelgates")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-white/80">{t("galaStatsCountries")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">3.5h</div>
              <div className="text-white/80">{t("galaStatsExperience")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-rose-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {t("galaViewGallery")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("galaReserveDesc")}</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-2 gap-4 md:gap-6 [column-fill:_balance]">
            {dinnerImages.map((name, index) => {
              const webpSrc = `/dinner/${name}.webp`;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative mb-4 w-full overflow-hidden rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  style={{ breakInside: "avoid" }}
                >
                  <img
                    loading="lazy"
                    src={webpSrc}
                    alt={`Gala dinner image ${index + 1}`}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              );
            })}
          </div>

          {isLightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
              <button onClick={closeLightbox} aria-label="Close" className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
                <X className="w-6 h-6" />
              </button>
              <button onClick={showPrev} aria-label="Previous" className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
                <ChevronLeft className="w-7 h-7" />
              </button>
              <div className="max-w-5xl w-full">
                <img
                  src={`/dinner/${dinnerImages[currentImageIndex]}.webp`}
                  alt={`Gala dinner ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
              <button onClick={showNext} aria-label="Next" className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          )}
        </div>
      </section>

      <RegisterCTA />
    </div>
  );
}