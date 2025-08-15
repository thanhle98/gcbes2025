import React, { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, Users, Handshake, Building2, TrendingUp, Globe, Target, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";
import { REGISTRATION_FORM_URL } from "../../constants/urls";
import RegisterCTA from "../../components/common/RegisterCTA";

export default function MatchingPage() {
  const { t } = useTranslation();
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const matchingImages: string[] = [
    "HBM_2653",
    "HBM_3311",
    "HBM_3352",
    "HBM_3394",
    "HBM_3405",
  ];
  const openLightbox = (index: number) => { setCurrentImageIndex(index); setIsLightboxOpen(true); };
  const closeLightbox = () => setIsLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((p) => (p - 1 + matchingImages.length) % matchingImages.length);
  const showNext = () => setCurrentImageIndex((p) => (p + 1) % matchingImages.length);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const matchingSectors = [
    {
      icon: Building2,
      title: t("matchingHighLevel"),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: t("matchingLogistics"),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: t("matchingPayment"),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: t("matchingAI"),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: t("matchingSustainable"),
      color: "from-teal-500 to-teal-600"
    }
  ];

  const participants = [
    t("matchingParticipant1"),
    t("matchingParticipant2"),
    t("matchingParticipant3"),
    t("matchingParticipant4")
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              {t("matchingTitle")}
            </h1>
            
            <div className="flex justify-center items-center gap-2 text-gray-600 mb-8">
              <Calendar className="w-5 h-5 text-purple-600" />
              <span className="font-medium">{t("matchingDate")}</span>
            </div>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t("matchingDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Connection Sectors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            {t("matchingSectors")}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {matchingSectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sector.color} flex items-center justify-center flex-shrink-0`}>
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{sector.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participants Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("matchingParticipants")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {participants.map((participant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-800 font-medium">{participant}</p>
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
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("matchingFeature1Title")}</h3>
              <p className="text-gray-600">{t("matchingFeature1Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("matchingFeature2Title")}</h3>
              <p className="text-gray-600">{t("matchingFeature2Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("matchingFeature3Title")}</h3>
              <p className="text-gray-600">{t("matchingFeature3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Handshake className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {t("matchingGallery")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("matchingScheduleDesc")}</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {matchingImages.map((name, index) => (
              <button
                key={name}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative mb-4 w-full overflow-hidden rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ breakInside: "avoid" }}
              >
                <img
                  loading="lazy"
                  src={`/matching-doanh-nghiep/${name}.webp`}
                  alt={`Matching image ${index + 1}`}
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
                  src={`/matching-doanh-nghiep/${matchingImages[currentImageIndex]}.webp`}
                  alt={`Matching ${currentImageIndex + 1}`}
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

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t("matchingHowItWorks")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("matchingStep1Title")}</h3>
              <p className="text-white/90">{t("matchingStep1Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("matchingStep2Title")}</h3>
              <p className="text-white/90">{t("matchingStep2Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t("matchingStep3Title")}</h3>
              <p className="text-white/90">{t("matchingStep3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <RegisterCTA />
    </div>
  );
}