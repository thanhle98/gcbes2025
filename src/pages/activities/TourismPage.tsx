import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Clock, Camera, Coffee, Utensils, Building2, Palette, Anchor } from "lucide-react";

export default function TourismPage() {
  const { t } = useTranslation();

  const scheduleItems = [
    {
      time: "08:00 – 08:30",
      title: t("tourismSchedule1"),
      icon: Clock,
      color: "from-amber-500 to-orange-500"
    },
    {
      time: "08:30 – 10:30",
      title: t("tourismSchedule2"),
      details: t("tourismSchedule2Details"),
      icon: Building2,
      color: "from-blue-500 to-indigo-500"
    },
    {
      time: "10:30 – 12:00",
      title: t("tourismSchedule3"),
      details: t("tourismSchedule3Details"),
      icon: Coffee,
      color: "from-green-500 to-emerald-500"
    },
    {
      time: "12:00 – 13:30",
      title: t("tourismSchedule4"),
      details: t("tourismSchedule4Details"),
      icon: Utensils,
      color: "from-red-500 to-pink-500"
    },
    {
      time: "14:00 – 15:30",
      title: t("tourismSchedule5"),
      details: t("tourismSchedule5Details"),
      icon: Palette,
      color: "from-purple-500 to-violet-500"
    },
    {
      time: "16:00 – 17:30",
      title: t("tourismSchedule6"),
      details: t("tourismSchedule6Details"),
      icon: Anchor,
      color: "from-cyan-500 to-blue-500"
    },
    {
      time: "18:00 - 21:30",
      title: t("tourismSchedule7"),
      icon: Utensils,
      color: "from-orange-500 to-red-500"
    },
    {
      time: "22:00",
      title: t("tourismSchedule8"),
      icon: Clock,
      color: "from-gray-500 to-slate-500"
    }
  ];

  const advantages = [
    t("tourismAdvantage1"),
    t("tourismAdvantage2"),
    t("tourismAdvantage3"),
    t("tourismAdvantage4"),
    t("tourismAdvantage5")
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              {t("tourismTitle")}
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="font-medium">{t("tourismDate")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-medium">{t("tourismDuration")}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t("tourismDescription")}
              </p>
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-600 mb-2">{t("tourismTheme")}</h3>
                <p className="text-gray-600">{t("tourismFormat")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("tourismSchedule")}
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
                      <div className="text-white/80 text-sm font-medium">{item.time}</div>
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

      {/* Program Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("tourismAdvantages")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("tourismFeature1Title")}</h3>
              <p className="text-gray-600">{t("tourismFeature1Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("tourismFeature2Title")}</h3>
              <p className="text-gray-600">{t("tourismFeature2Desc")}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Anchor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t("tourismFeature3Title")}</h3>
              <p className="text-gray-600">{t("tourismFeature3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <Camera className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("tourismDiscoverTitle")}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t("tourismDiscoverDesc")}
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">13.5h</div>
                <div className="text-white/80 text-sm">{t("tourismFullDay")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-white/80 text-sm">{t("tourismAttractions")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <div className="text-white/80 text-sm">{t("tourismMealsIncluded")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">2</div>
                <div className="text-white/80 text-sm">{t("tourismLanguages")}</div>
              </div>
            </div>
          </div>
          
          <a
            href="https://drive.google.com/drive/folders/1lJeAcCGyA1BMc5ENQd_mT0vMbR48nUrP?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            {t("tourismViewGallery")}
          </a>
        </div>
      </section>
    </div>
  );
}