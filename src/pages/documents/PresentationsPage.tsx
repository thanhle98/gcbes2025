import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { FileText, Download, Users, Presentation, Video, Folder, Calendar, Globe } from "lucide-react";

export default function PresentationsPage() {
  const { t } = useTranslation();

  const presentationTypes = [
    {
      title: t("presentationsKeynote"),
      description: t("presentationsKeynoteDesc"),
      icon: Presentation,
      color: "from-blue-500 to-indigo-500",
      count: "To be updated"
    },
    {
      title: t("presentationsTechnical"),
      description: t("presentationsTechnicalDesc"),
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      count: "To be updated"
    },
    {
      title: t("presentationsPanel"),
      description: t("presentationsPanelDesc"),
      icon: Users,
      color: "from-purple-500 to-violet-500",
      count: "To be updated"
    },
    {
      title: t("presentationsWorkshop"),
      description: t("presentationsWorkshopDesc"),
      icon: Folder,
      color: "from-orange-500 to-red-500",
      count: "To be updated"
    }
  ];

  const featuredPresentations = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t("presentationsTitle")}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("presentationsSubtitle")}
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("presentationsDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Presentation Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {presentationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{type.title}</h3>
                <p className="text-gray-600 text-center mb-4 text-sm">{type.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {type.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Presentations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Featured Presentations
          </h2>
          
          <div className="text-center py-16">
            <FileText className="w-24 h-24 mx-auto mb-6 text-gray-400" />
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Presentations To Be Updated</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Detailed presentation materials and speaker information will be available closer to the event date.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">TBU</div>
              <div className="text-white/80">Total Presentations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">TBU</div>
              <div className="text-white/80">Content Duration</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">TBU</div>
              <div className="text-white/80">Expert Speakers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">TBU</div>
              <div className="text-white/80">Languages Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <Globe className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Access Presentation Materials
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("presentationsNote")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <FileText className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                <h3 className="font-semibold text-gray-800 mb-1">PDF Downloads</h3>
                <p className="text-sm text-gray-600">High-quality presentation slides</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Video className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-semibold text-gray-800 mb-1">Video Recordings</h3>
                <p className="text-sm text-gray-600">Full session recordings</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold text-gray-800 mb-1">Q&A Sessions</h3>
                <p className="text-sm text-gray-600">Interactive discussion transcripts</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300">
                Request Access Credentials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}