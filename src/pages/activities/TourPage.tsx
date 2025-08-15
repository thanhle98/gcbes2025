import React, { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Clock, Bus, Users, Target, Building, Truck, Cpu, Factory, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function TourPage() {
  const { t } = useTranslation();
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const tourImages: string[] = [
    "5d54257466296616b0440aa3ec4f879b",
    "IMG_3992",
    "IMG_3993",
    "IMG_3994",
    "IMG_3996",
    "IMG_3997",
    "IMG_4993",
    "IMG_4994",
    "IMG_4998",
    "IMG_5009",
    "IMG_5010",
    "IMG_5016",
    "IMG_5024",
  ];
  const openLightbox = (index: number) => { setCurrentImageIndex(index); setIsLightboxOpen(true); };
  const closeLightbox = () => setIsLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((p) => (p - 1 + tourImages.length) % tourImages.length);
  const showNext = () => setCurrentImageIndex((p) => (p + 1) % tourImages.length);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const objectives = [
    t("tourObjective1"),
    t("tourObjective2"),
    t("tourObjective3"),
    t("tourObjective4")
  ];

  const scheduleItems = [
    {
      title: t("tourMorningTitle"),
      details: t("tourMorningDetails"),
      icon: Bus,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t("tourNoonTitle"),
      details: t("tourNoonDetails"),
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      title: t("tourAfternoonTitle"),
      details: t("tourAfternoonDetails"),
      icon: Factory,
      color: "from-teal-500 to-green-500"
    },
    {
      title: t("tourEveningTitle"),
      details: t("tourEveningDetails"),
      icon: Clock,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {t("tourTitle")}
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-medium">{t("tourTime")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bus className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{t("tourFormat")}</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              {t("tourSubtitle")}
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                <strong>{t("tourParticipants")}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("tourObjectives")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("tourSchedule")}
          </h2>
          
          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-1/3 bg-gradient-to-r ${item.color} p-6 flex items-center gap-4`}>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    </div>
                  </div>
                  
                  {item.details && (
                    <div className="lg:w-2/3 p-6">
                      <div className="space-y-2">
                        {item.details.split('\n').map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("tourFeature1Title")}</h3>
              <p className="text-gray-600">{t("tourFeature1Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("tourFeature2Title")}</h3>
              <p className="text-gray-600">{t("tourFeature2Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("tourFeature3Title")}</h3>
              <p className="text-gray-600">{t("tourFeature3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Target className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {t("tourViewGallery")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("tourNote")}</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {tourImages.map((name, index) => (
              <button
                key={name}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative mb-4 w-full overflow-hidden rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{ breakInside: "avoid" }}
              >
                <img
                  loading="lazy"
                  src={`/tour-tham-quan/${name}.webp`}
                  alt={`Tour image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>
            ))}
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
                  src={`/tour-tham-quan/${tourImages[currentImageIndex]}.webp`}
                  alt={`Tour ${currentImageIndex + 1}`}
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
    </div>
  );
}