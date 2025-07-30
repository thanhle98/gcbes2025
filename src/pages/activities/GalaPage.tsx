import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { Calendar, MapPin, Clock, Utensils, Music, Camera, Users, Sparkles } from "lucide-react";

export default function GalaPage() {
  const { t } = useTranslation();

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
              <h3 className="text-xl font-bold text-gray-800 mb-2">Luxurious Dining</h3>
              <p className="text-gray-600">Vietnamese and international cuisine buffet in an elegant setting</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Networking</h3>
              <p className="text-gray-600">Connect with international delegates and business leaders</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Performance</h3>
              <p className="text-gray-600">Traditional Vietnamese art and international music entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            An Unforgettable Evening
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join us for an elegant evening of fine dining, cultural performances, and meaningful connections. 
            This exclusive networking gala brings together the brightest minds in cross-border e-commerce for 
            an unforgettable celebration of innovation and collaboration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80">International Delegates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-white/80">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">3.5h</div>
              <div className="text-white/80">Premium Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-rose-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Reserve Your Seat at the Gala Dinner
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Limited seats available for this exclusive networking event. Experience the pinnacle of business hospitality.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1jXbWah9OVAHbTDOz-awYSXVpMpHWYmy-?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              View Gala Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}