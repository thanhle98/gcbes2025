import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Users, Building, Package, Globe, Zap, Award } from "lucide-react";
import { REGISTRATION_FORM_URL } from "../../constants/urls";

export default function ExhibitionPage() {
  const { t } = useTranslation();

  const scaleItems = [
    { icon: Building, text: t("exhibitionBooths") },
    { icon: Package, text: t("exhibitionProducts") },
    { icon: Globe, text: t("exhibitionCountries") },
    { icon: Users, text: t("exhibitionVisitors") },
  ];

  const sectors = [
    t("exhibitionSector1"),
    t("exhibitionSector2"),
    t("exhibitionSector3"),
    t("exhibitionSector4"),
    t("exhibitionSector5"),
    t("exhibitionSector6"),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t("exhibitionTitle")}
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{t("exhibitionSubtitle")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <span className="text-sm max-w-md">{t("exhibitionLocation")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("exhibitionDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t("exhibitionScale")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scaleItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Sectors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("exhibitionSectors")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">{sector}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {t("exhibitionActivities")}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              {t("exhibitionActivitiesDesc")}
            </p>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-gray-700 leading-relaxed">
                {t("exhibitionZoneDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("exhibitionJoinTitle")}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {t("exhibitionJoinDesc")}
            </p>
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-sm"
            >
              {t("heroRegister")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}