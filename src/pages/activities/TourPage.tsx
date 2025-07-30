import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Clock, Bus, Users, Target, Building, Truck, Cpu, Factory } from "lucide-react";

export default function TourPage() {
  const { t } = useTranslation();

  const objectives = [
    t("tourObjective1"),
    t("tourObjective2"),
    t("tourObjective3"),
    t("tourObjective4")
  ];

  const scheduleItems = [
    {
      time: "08:00 – 08:15",
      title: t("tourSchedule1"),
      icon: Bus,
      color: "from-green-500 to-emerald-500"
    },
    {
      time: "08:45 – 10:00",
      title: t("tourSchedule2"),
      details: t("tourSchedule2Details"),
      icon: Truck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      time: "10:30 – 11:45",
      title: t("tourSchedule3"),
      details: t("tourSchedule3Details"),
      icon: Cpu,
      color: "from-purple-500 to-indigo-500"
    },
    {
      time: "12:00 – 13:30",
      title: t("tourSchedule4"),
      details: t("tourSchedule4Details"),
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      time: "13:45 – 15:15",
      title: t("tourSchedule5"),
      details: t("tourSchedule5Details"),
      icon: Factory,
      color: "from-teal-500 to-green-500"
    },
    {
      time: "15:30 – 17:00",
      title: t("tourSchedule6"),
      details: t("tourSchedule6Details"),
      icon: Target,
      color: "from-pink-500 to-rose-500"
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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Private Transportation</h3>
              <p className="text-gray-600">Comfortable, private transportation with bilingual guide support</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Real Business Visits</h3>
              <p className="text-gray-600">Visit actual operating facilities and meet industry leaders</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Networking Opportunities</h3>
              <p className="text-gray-600">Connect with Vietnam's leading logistics and tech companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Explore Vietnam's E-commerce Ecosystem
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t("tourNote")}
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">9h</div>
                <div className="text-white/80 text-sm">Full Day Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">4+</div>
                <div className="text-white/80 text-sm">Business Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">60+</div>
                <div className="text-white/80 text-sm">International Delegates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/80 text-sm">Bilingual Support</div>
              </div>
            </div>
          </div>
          
          <a
            href="https://drive.google.com/drive/folders/1ojYdoJjKFqAnisrUpiXw0LCeHNWzvuPD?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            View Tour Gallery
          </a>
        </div>
      </section>
    </div>
  );
}