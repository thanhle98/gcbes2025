import { useTranslation } from "../../contexts/LanguageContext";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Presentation,
  ChevronRight,
} from "lucide-react";

interface ScheduleItem {
  time: string;
  content: string;
  speaker: string;
  topics?: string;
}

interface SessionData {
  title: string;
  time: string;
  items: ScheduleItem[];
  color: string;
}

export default function ConferencePage() {
  const { t } = useTranslation();

  const scheduleData: SessionData[] = [
    {
      title: t("conferenceOpeningCeremony"),
      time: t("conferenceOpeningTime"),
      items: [
        {
          time: t("conferenceOpeningTime"),
          content: t("conferenceOpeningContent"),
          speaker: t("conferenceOpeningSpeaker"),
        },
        {
          time: t("conferenceOpeningRemarksTime"),
          content: t("conferenceOpeningRemarksContent"),
          speaker: t("conferenceOpeningRemarksSpeaker"),
        },
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: t("conferenceOverviewTitle"),
      time: t("conferenceOverviewTime"),
      items: [
        {
          time: t("conferenceOverviewTime"),
          content: t("conferenceOverviewContent"),
          speaker: t("conferenceOverviewNote"),
        },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: t("conferenceSession1Title"),
      time: "14:00-15:00",
      items: [
        {
          time: t("conferenceSession1Time1"),
          content: t("conferenceSession1Content1"),
          speaker: t("conferenceSession1Speaker1"),
        },
        {
          time: t("conferenceSession1Time2"),
          content: t("conferenceSession1Content2"),
          speaker: t("conferenceSession1Speaker2"),
        },
        {
          time: t("conferenceSession1Time3"),
          content: t("conferenceSession1Content3"),
          speaker: t("conferenceSession1Speaker3"),
        },
        {
          time: t("conferenceSession1Time4"),
          content: t("conferenceSession1Content4"),
          speaker: t("conferenceSession1Speaker4"),
        },
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: t("conferenceSession2Title"),
      time: "15:00-16:00",
      items: [
        {
          time: t("conferenceSession2Time1"),
          content: t("conferenceSession2Content1"),
          speaker: t("conferenceSession2Speaker1"),
        },
        {
          time: t("conferenceSession2Time2"),
          content: t("conferenceSession2Content2"),
          speaker: t("conferenceSession2Speaker2"),
        },
        {
          time: t("conferenceSession2Time3"),
          content: t("conferenceSession2Content3"),
          speaker: t("conferenceSession2Speaker3"),
        },
        {
          time: t("conferenceSession2Time4"),
          content: t("conferenceSession2Content4"),
          speaker: t("conferenceSession2Speaker4"),
        },
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: t("conferenceSession3Title"),
      time: "16:00-16:45",
      items: [
        {
          time: t("conferenceSession3Time1"),
          content: t("conferenceSession3Content1"),
          speaker: t("conferenceSession3Speaker1"),
        },
        {
          time: t("conferenceSession3Time2"),
          content: t("conferenceSession3Content2"),
          speaker: t("conferenceSession3Speaker2"),
        },
        {
          time: t("conferenceSession3Time3"),
          content: t("conferenceSession3Content3"),
          speaker: t("conferenceSession3Speaker3"),
        },
      ],
      color: "from-red-500 to-red-600",
    },
    {
      title: t("conferenceSession4Title"),
      time: t("conferenceSession4Time"),
      items: [
        {
          time: t("conferenceSession4Time"),
          content: t("conferenceSession4Content"),
          speaker: t("conferenceSession4Speaker"),
          topics: t("conferenceSession4Topics"),
        },
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: t("conferenceSession5Title"),
      time: t("conferenceSession5Time"),
      items: [
        {
          time: t("conferenceSession5Time"),
          content: t("conferenceSession5Content"),
          speaker: "",
        },
      ],
      color: "from-indigo-500 to-indigo-600",
    },
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
            {t("conferenceScheduleTitle")}
          </h2>

          <div className="space-y-8">
            {scheduleData.map((sessionData, sessionIndex) => (
              <div
                key={sessionIndex}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${sessionData.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Presentation className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-bold text-white">
                        {sessionData.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {sessionData.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {sessionData.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-l-4 border-gray-200 pl-6 hover:border-indigo-400 transition-colors duration-200"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center gap-2 text-sm text-indigo-600 font-semibold mb-2">
                              <Clock className="w-4 h-4" />
                              {item.time}
                            </div>
                          </div>

                                                      <div className="flex-1 space-y-3">
                              <h4 className="text-lg font-semibold text-gray-800 leading-snug">
                                {item.content}
                              </h4>

                              {item.topics && (
                                <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    "{item.topics}"
                                  </p>
                                </div>
                              )}
                            </div>

                          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                        </div>
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("conferenceExpertSpeakers")}
              </h3>
              <p className="text-gray-600">
                {t("conferenceExpertSpeakersDesc")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("conferenceNetworking")}
              </h3>
              <p className="text-gray-600">{t("conferenceNetworkingDesc")}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t("conferenceFullDays")}
              </h3>
              <p className="text-gray-600">{t("conferenceFullDaysDesc")}</p>
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
              {t("conferenceJoinTitle")}
            </h2>
            <p className="text-lg mb-6 opacity-90">{t("conferenceJoinDesc")}</p>
            <a
              href="https://drive.google.com/drive/folders/1geJqSTMcwB-036Y1lkJm1pionaH5KBit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {t("conferenceViewMaterials")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
