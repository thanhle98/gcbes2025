import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Brain,
  GraduationCap,
  Truck,
  Shield,
  Leaf,
  Mic,
  Building2,
  Star,
  Award,
  ChevronRight,
  Package,
} from "lucide-react";
import VideoPopup from "../components/common/VideoPopup";
import HeroSection from "./home/HeroSection";
import { useTranslation } from "../contexts/LanguageContext";
import { TranslationKey } from "../i18n/translations";
import { REGISTRATION_FORM_URL, INTRO_VIDEO_ID } from "../constants/urls";

// All data arrays are now generated dynamically using translations

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const dynamicStats = [
    {
      number: "10,000+",
      label: t("statsProducts"),
      icon: Package,
    },
    { number: "10+", label: t("statsEvents"), icon: Mic },
    { number: "60+", label: t("statsCountries"), icon: Globe },
    { number: "600+", label: t("statsBooths"), icon: Building2 },
    {
      number: "10,000+",
      label: t("statsVisitors"),
      icon: Users,
    },
  ];

  const dynamicTopics = [
    {
      icon: Globe,
      title: t("topicCrossBorder"),
      color: "bg-emerald-50 border border-emerald-200",
      iconColor: "text-emerald-600",
      textColor: "text-gray-800",
      description: t("topicCrossBorderDesc"),
    },
    {
      icon: Brain,
      title: t("topicTechAI"),
      color: "bg-blue-50 border border-blue-200",
      iconColor: "text-blue-600",
      textColor: "text-gray-800",
      description: t("topicTechAIDesc"),
    },
    {
      icon: GraduationCap,
      title: t("topicTraining"),
      color: "bg-teal-50 border border-teal-200",
      iconColor: "text-teal-600",
      textColor: "text-gray-800",
      description: t("topicTrainingDesc"),
    },
    {
      icon: Truck,
      title: t("topicLogistics"),
      color: "bg-cyan-50 border border-cyan-200",
      iconColor: "text-cyan-600",
      textColor: "text-gray-800",
      description: t("topicLogisticsDesc"),
    },
    {
      icon: Shield,
      title: t("topicPolicy"),
      color: "bg-green-50 border border-green-200",
      iconColor: "text-green-600",
      textColor: "text-gray-800",
      description: t("topicPolicyDesc"),
    },
    {
      icon: Leaf,
      title: t("topicSustainable"),
      color: "bg-lime-50 border border-lime-200",
      iconColor: "text-lime-600",
      textColor: "text-gray-800",
      description: t("topicSustainableDesc"),
    },
  ];

  const dynamicSessions = [
    {
      date: "4/9",
      title: t("session1Title"),
      subtitle: t("session1Subtitle"),
      type: t("session1Type"),
      time: "12:00 - 18:00",
      location: t("mainHall"),
      link: "/activities/conference/1"
    },
    {
      date: "5/9",
      title: t("session2Title"),
      subtitle: t("session2Subtitle"),
      type: t("session2Type"),
      time: "09:00 - 12:00",
      location: t("hallA"),
      link: "/activities/conference/2"
    },
    {
      date: "5/9",
      title: t("session3Title"),
      subtitle: t("session3Subtitle"),
      type: t("session3Type"),
      time: "14:00 - 17:30",
      location: t("mainHall"),
      link: "/activities/conference/3"
    },
    {
      date: "5/9",
      title: t("session4Title"),
      subtitle: t("session4Subtitle"),
      type: t("session4Type"),
      time: "19:00 - 22:00",
      location: t("vipRestaurant"),
      link: "/activities/gala"
    },
    {
      date: "6/9",
      title: t("session5Title"),
      subtitle: t("session5Subtitle"),
      type: t("session5Type"),
      time: "08:00 - 17:00",
      location: t("locationsInHCM"),
      link: "/activities/tour"
    },
  ];

  const dynamicSpeakers = [
    {
      name: t("speaker1Name"),
      title: t("speaker1Title"),
      company: t("speaker1Company"),
      image: "/speakers/le-hoang-oanh.png",
    },
    {
      name: t("speaker2Name"),
      title: t("speaker2Title"),
      company: t("speaker2Company"),
      image: "/speakers/liu-liang.png",
    },
    {
      name: t("speaker3Name"),
      title: t("speaker3Title"),
      company: t("speaker3Company"),
      image: "/speakers/anna-nguyen.png",
    },
    {
      name: t("speaker4Name"),
      title: t("speaker4Title"),
      company: t("speaker4Company"),
      image: "/speakers/nguyen-duy-toan.png",
    },
    {
      name: t("speaker5Name"),
      title: t("speaker5Title"),
      company: t("speaker5Company"),
      image: "/speakers/jang-woo-sung.png",
    },
    {
      name: t("speaker6Name"),
      title: t("speaker6Title"),
      company: t("speaker6Company"),
      image: "/speakers/pham-tan-dat.png",
    },
  ];

  const dynamicSponsors = [
    {
      name: "VietFAS",
      image: "/partners/vietfas_logo.png",
    },
    
    {
      name: "Fado",
      image: "/partners/fado_logo.jpg",
    },
    
    {
      name: "Flash",
      image: "/partners/flash_logo.jpg",
    },
    {
      name: "Happy",
      image: "/partners/happy_logo.png",
    },
    {
      name: "JingDong Logistics",
      image: "/partners/jingdong_logistics_logo.png",
    },
    {
      name: "Metrang",
      image: "/partners/metrang_logo.jpg",
    },
    {
      name: "Proship",
      image: "/partners/proship_logo.png",
    },
  ];

  return (
    <div>
      <HeroSection onOpenPopup={() => setIsPopupOpen(true)} />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {dynamicStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-custom-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Giới thiệu chung */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("aboutTitle")}
            </h2>
            <p className="text-xl text-gray-600 mx-auto leading-relaxed">
              {t("aboutDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("aboutWhyJoinTitle")}
              </h3>
              <div className="space-y-4">
                {[
                  "aboutReason1",
                  "aboutReason2",
                  "aboutReason3",
                  "aboutReason4",
                ].map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-custom-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      {t(reason as TranslationKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="HBM_2301.jpg"
                alt="Conference Overview"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-custom-blue/20 to-custom-green/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diễn giả */}
      <section id="speakers" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("speakersTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("speakersSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dynamicSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative p-6 pt-8">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img
                      src={speaker.image || "/speakers/default.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-custom-blue/10 to-transparent"></div>
                  </div>
                </div>
                <div className="px-6 pb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-custom-blue font-semibold mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {speaker.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Các chủ đề */}
      <section id="topics" className="py-24 bg-gradient-to-br from-blue-300 to-green-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("topicsTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("topicsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dynamicTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div
                    className={`${topic.color} rounded-2xl p-8 bg-white transform group-hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg`}
                  >
                    <Icon
                      className={`w-12 h-12 mb-6 ${topic.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h3 className={`text-xl font-bold mb-4 ${topic.textColor}`}>
                      {topic.title}
                    </h3>
                    <p
                      className={`${topic.textColor}/80 leading-relaxed min-h-[60px]`}
                    >
                      {topic.description}
                    </p>
                    <div
                      className={`flex items-center mt-6 ${topic.iconColor} group-hover:${topic.iconColor} transition-colors`}
                    >
                      <span className="text-sm font-medium">
                        {t("topicLearnMore")}
                      </span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Nhà tài trợ */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
              {t("sponsorsTitle")}
            </h2>
          </div>

          {/* Partner Logos Carousel */}
          <div className="relative overflow-hidden">
            {/* Edge gradient fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex animate-scroll-right whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center space-x-12 mr-12 flex-shrink-0">
                {[...dynamicSponsors, ...dynamicSponsors, ...dynamicSponsors].map((sponsor, index) => (
                  <img src={sponsor.image} alt={sponsor.name} className="w-32 h-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0 filter grayscale hover:grayscale-0" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Các phiên tham luận & hoạt động */}
      <section id="sessions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
              {t("sessionsTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("sessionsSubtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {dynamicSessions.map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => {
                  if (session.link) {
                    window.location.href = session.link;
                  }
                }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-custom-gradient text-white px-4 py-2 rounded-lg font-semibold text-sm">
                          {session.date}
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {session.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {session.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {session.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <a 
                        href={REGISTRATION_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-custom-gradient hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        {t("sessionsJoin")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isPopupOpen && (
        <VideoPopup
          youtubeId={INTRO_VIDEO_ID}
          onClose={() => setIsPopupOpen(false)}
        />
      )}


    </div>
  );
}
