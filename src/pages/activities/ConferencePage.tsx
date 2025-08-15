import { useTranslation } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Presentation,
  ChevronRight,
  ArrowRight,
  X,
  ChevronLeft,
} from "lucide-react";
import { useParams } from "react-router-dom";
import RegisterCTA from "../../components/common/RegisterCTA";

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
  // read params from url
  const { conferenceId } = useParams();
  const [selectedConference, setSelectedConference] = useState(
    conferenceId ? parseInt(conferenceId) - 1 : 0
  );

  // Image gallery state (filenames without extension)
  const galleryImages: string[] = [
    "1DX35641",
    "1DX36570",
    "HBM_2801",
    "HBM_3416",
    "HBM_3528",
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const showPrev = () =>
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const showNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Handle conference selection with scroll to top
  const handleConferenceSelect = (conferenceId: number) => {
    setSelectedConference(conferenceId);
    // Scroll to the right content area with 40px offset
    const rightContent = document.querySelector('[data-conference-content]');
    if (rightContent) {
      const elementTop = rightContent.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Conference sessions data
  const conferences = [
    {
      id: 0,
      date: "conference1Date",
      theme: "conference1Theme",
      venue: "conference1Venue",
      capacity: "conference1Capacity",
      color: "from-purple-600 to-indigo-600",
      badge: "Day 1",
      shortTitle: "conference1ShortTitle",
    },
    {
      id: 1,
      date: "conference2Date",
      theme: "conference2Theme",
      venue: "conference2Venue",
      capacity: "conference2Capacity",
      color: "from-blue-600 to-cyan-600",
      badge: "Day 2 AM",
      shortTitle: "conference2ShortTitle",
    },
    {
      id: 2,
      date: "conference3Date",
      theme: "conference3Theme",
      venue: "conference3Venue",
      capacity: "conference3Capacity",
      color: "from-indigo-600 to-blue-600",
      badge: "Day 2 PM",
      shortTitle: "conference3ShortTitle",
    },
  ];

  // Function to get schedule data for each conference
  const getScheduleData = (conferenceId: number): SessionData[] => {
    if (conferenceId === 0) {
      // Conference 1 Schedule Data
      return [
        {
          title: t("conf1HighLevelMeeting"),
          time: "12:45-13:45",
          items: [
            {
              time: "12:45-13:45",
              content: t("conf1HighLevelContent"),
              speaker: t("conf1HighLevelSpeaker"),
            },
          ],
          color: "from-purple-500 to-purple-600",
        },
        {
          title: t("conf1OpeningCeremony"),
          time: "13:45-14:30",
          items: [
            {
              time: "13:45-14:15",
              content: t("conf1DelegateReception"),
              speaker: "",
            },
            {
              time: "14:15-14:30",
              content: t("conf1OpeningSpeech"),
              speaker: t("conf1OpeningSpeaker"),
            },
          ],
          color: "from-blue-500 to-blue-600",
        },
        {
          title: t("conf1Session1Title"),
          time: "14:30-15:30",
          items: [
            {
              time: "14:30-14:45",
              content: t("conf1Session1Item1"),
              speaker: t("conf1Session1Speaker1"),
            },
            {
              time: "14:45-15:00",
              content: t("conf1Session1Item2"),
              speaker: t("conf1Session1Speaker2"),
            },
            {
              time: "15:00-15:15",
              content: t("conf1Session1Item3"),
              speaker: t("conf1Session1Speaker3"),
            },
            {
              time: "15:15-15:30",
              content: t("conf1Session1Item4"),
              speaker: t("conf1Session1Speaker4"),
            },
          ],
          color: "from-green-500 to-green-600",
        },
        {
          title: t("conf1Session2Title"),
          time: "15:30-16:30",
          items: [
            {
              time: "15:30-15:45",
              content: t("conf1Session2Item1"),
              speaker: t("conf1Session2Speaker1"),
            },
            {
              time: "15:45-16:00",
              content: t("conf1Session2Item2"),
              speaker: t("conf1Session2Speaker2"),
            },
            {
              time: "16:00-16:15",
              content: t("conf1Session2Item3"),
              speaker: t("conf1Session2Speaker3"),
            },
            {
              time: "16:15-16:30",
              content: t("conf1Session2Item4"),
              speaker: t("conf1Session2Speaker4"),
            },
          ],
          color: "from-orange-500 to-orange-600",
        },
        {
          title: t("conf1Session3Title"),
          time: "16:30-17:00",
          items: [
            {
              time: "16:30-17:00",
              content: t("conf1Session3Content"),
              speaker: "",
            },
          ],
          color: "from-cyan-500 to-cyan-600",
        },
        {
          title: t("conf1Session4Title"),
          time: "17:00-17:30",
          items: [
            {
              time: "17:00-17:15",
              content: t("conf1Session4Item1"),
              speaker: "",
            },
            {
              time: "17:15-17:30",
              content: t("conf1Session4Item2"),
              speaker: "",
            },
          ],
          color: "from-indigo-500 to-indigo-600",
        },
      ];
    } else if (conferenceId === 1) {
      // Conference 2 Schedule Data
      return [
        {
          title: t("conf2OpeningCeremony"),
          time: "8:00-8:45",
          items: [
            {
              time: "8:00-8:30",
              content: t("conf2DelegateWelcome"),
              speaker: "",
            },
            {
              time: "8:30-8:45",
              content: t("conf2OpeningSpeech"),
              speaker: t("conf2OpeningSpeaker"),
            },
          ],
          color: "from-blue-500 to-blue-600",
        },
        {
          title: t("conf2Session1Title"),
          time: "9:00-10:15",
          items: [
            {
              time: "9:00-9:15",
              content: t("conf2Session1Item1"),
              speaker: t("conf2Session1Speaker1"),
            },
            {
              time: "9:15-9:30",
              content: t("conf2Session1Item2"),
              speaker: t("conf2Session1Speaker2"),
            },
            {
              time: "9:30-9:45",
              content: t("conf2Session1Item3"),
              speaker: t("conf2Session1Speaker3"),
            },
            {
              time: "9:45-10:00",
              content: t("conf2Session1Item4"),
              speaker: t("conf2Session1Speaker4"),
            },
            {
              time: "10:00-10:15",
              content: t("conf2Session1Item5"),
              speaker: t("conf2Session1Speaker5"),
            },
          ],
          color: "from-green-500 to-green-600",
        },
        {
          title: t("conf2Session2Title"),
          time: "10:15-11:15",
          items: [
            {
              time: "10:15-10:30",
              content: t("conf2Session2Item1"),
              speaker: t("conf2Session2Speaker1"),
            },
            {
              time: "10:30-10:45",
              content: t("conf2Session2Item2"),
              speaker: t("conf2Session2Speaker2"),
            },
            {
              time: "11:00-11:15",
              content: t("conf2Session2Item3"),
              speaker: t("conf2Session2Speaker3"),
            },
            {
              time: "11:00-11:15",
              content: t("conf2Session2Item4"),
              speaker: t("conf2Session2Speaker4"),
            },
          ],
          color: "from-orange-500 to-orange-600",
        },
        {
          title: t("conf2Session3Title"),
          time: "11:15-11:45",
          items: [
            {
              time: "11:15-11:45",
              content: t("conf2Session3Content"),
              speaker: "",
              topics: t("conf2Session3Topics"),
            },
          ],
          color: "from-cyan-500 to-cyan-600",
        },
        {
          title: t("conf2Session4Title"),
          time: "11:45-12:00",
          items: [
            {
              time: "11:45-11:55",
              content: t("conf2Session4Item1"),
              speaker: "",
            },
            {
              time: "11:55-12:00",
              content: t("conf2Session4Item2"),
              speaker: "",
            },
          ],
          color: "from-indigo-500 to-indigo-600",
        },
      ];
    } else if (conferenceId === 2) {
      // Conference 3 Schedule Data (existing)
      return [
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
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      

      {/* Schedule Section - Left Right Layout */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("conferenceScheduleTitle")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t("conferenceDescription")}
            </p>
          </div>

          {/* Left-Right Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Conference List */}
            <div className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start lg:max-h-screen lg:overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {t("conferenceSessions")}
              </h3>
              <div className="space-y-4 lg:space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
                {conferences.map((conference) => (
                  <div
                    key={conference.id}
                    onClick={() => handleConferenceSelect(conference.id)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border-2 ${
                      selectedConference === conference.id
                        ? `bg-gradient-to-r ${conference.color} text-white border-transparent shadow-lg`
                        : "bg-white text-gray-800 border-gray-200 hover:border-indigo-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          selectedConference === conference.id
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {conference.badge}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          selectedConference === conference.id
                            ? "text-white rotate-90"
                            : "text-gray-400"
                        }`}
                      />
                    </div>

                    <h4
                      className={`font-semibold text-sm mb-2 ${
                        selectedConference === conference.id
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {t(conference.shortTitle as any)}
                    </h4>

                    <div className="flex items-center gap-2 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span
                        className={
                          selectedConference === conference.id
                            ? "text-white/90"
                            : "text-gray-600"
                        }
                      >
                        {t(conference.date as any)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Conference Details */}
            <div className="lg:w-3/4" data-conference-content>
              {selectedConference !== null && (
                <div className="space-y-6">
                  {/* Selected Conference Header */}
                  <div
                    className={`bg-gradient-to-r ${conferences[selectedConference].color} rounded-2xl p-6 md:p-8 text-white shadow-2xl`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-8 h-8 text-white/90" />
                        <h3 className="text-2xl md:text-3xl font-bold">
                          {t(conferences[selectedConference].date as any)}
                        </h3>
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {conferences[selectedConference].badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Theme */}
                      <div className="md:col-span-3 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Presentation className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                          <div className="text-left">
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
                              Chủ đề / Theme
                            </h4>
                            <p className="text-lg font-medium leading-relaxed">
                              {t(conferences[selectedConference].theme as any)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Venue */}
                      <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                          <div className="text-left">
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
                              Địa điểm / Venue
                            </h4>
                            <p className="text-lg font-medium">
                              {t(conferences[selectedConference].venue as any)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Capacity */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Users className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                          <div className="text-left">
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
                              Quy mô / Capacity
                            </h4>
                            <p className="text-lg font-medium">
                              {t(
                                conferences[selectedConference].capacity as any
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Schedule for Selected Conference */}
                  {(selectedConference === 0 ||
                    selectedConference === 1 ||
                    selectedConference === 2) && (
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                          {t("conferenceDetailedSchedule")}
                        </h4>
                        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full"></div>
                      </div>

                      <div className="space-y-6">
                        {getScheduleData(selectedConference).map(
                          (sessionData, sessionIndex) => (
                            <div
                              key={sessionIndex}
                              className="bg-white rounded-2xl shadow-xl overflow-hidden"
                            >
                              <div
                                className={`bg-gradient-to-r ${sessionData.color} p-6`}
                              >
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
                                          <h4 className="text-lg font-semibold text-gray-800 leading-snug whitespace-pre-line">
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
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
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

      {/* Image Gallery (replaces previous CTA button) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Presentation className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
              {t("conferenceJoinTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("conferenceJoinDesc")}
            </p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 [column-fill:_balance]
          ">
            {galleryImages.map((name, index) => {
              const webpSrc = `/dien-dan-hoi-nghi/${name}.webp`;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative mb-4 w-full overflow-hidden rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ breakInside: "avoid" }}
                >
                  <img
                    loading="lazy"
                    src={webpSrc}
                    alt={`Conference gallery image ${index + 1}`}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              );
            })}
          </div>

          {/* Lightbox Modal */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <div className="max-w-5xl w-full">
                {(() => {
                  const baseName = galleryImages[currentImageIndex];
                  const webpSrc = `/dien-dan-hoi-nghi/${baseName}.webp`;
                  return (
                    <img
                      src={webpSrc}
                      alt={`Conference ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />
                  );
                })()}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
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
