import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Clock, Users, Presentation, ChevronRight } from "lucide-react";

export default function ConferencePage() {
  const { t } = useTranslation();

  const scheduleData = [
    {
      day: t("conferenceDay1"),
      sessions: [
        t("conferenceDay1Schedule1"),
        t("conferenceDay1Schedule2"),
        t("conferenceDay1Schedule3"),
        t("conferenceDay1Schedule4"),
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      day: t("conferenceDay2"),
      sessions: [
        t("conferenceDay2Schedule1"),
        t("conferenceDay2Schedule2"),
        t("conferenceDay2Schedule3"),
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      day: t("conferenceDay3"),
      sessions: [
        t("conferenceDay3Schedule1"),
        t("conferenceDay3Schedule2"),
        t("conferenceDay3Schedule3"),
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {t("conferenceTitle")}
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">{t("conferenceSubtitle")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{t("conferenceLocation")}</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("conferenceDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            3-Day Conference Schedule
          </h2>
          
          <div className="space-y-8">
            {scheduleData.map((dayData, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${dayData.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">{dayData.day}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {dayData.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${dayData.color} flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{sessionIndex + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium leading-relaxed">{session}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                <Presentation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Leading industry experts from Vietnam and internationally</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Networking</h3>
              <p className="text-gray-600">Connect with global business leaders and decision makers</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3 Full Days</h3>
              <p className="text-gray-600">Intensive program with 8 specialized sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
            <Presentation className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Premier Cross-Border E-commerce Conference
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Gain insights from industry leaders and discover the future of cross-border e-commerce.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1geJqSTMcwB-036Y1lkJm1pionaH5KBit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View Conference Materials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}