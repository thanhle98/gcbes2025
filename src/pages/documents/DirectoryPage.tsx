import { useTranslation } from "../../contexts/LanguageContext";
import { Users, Building, Award, Globe, Search, Filter } from "lucide-react";

export default function DirectoryPage() {
  const { t } = useTranslation();

  const directoryCategories = [
    {
      id: "exhibitors",
      title: t("directoryExhibitors"),
      description: t("directoryExhibitorsDesc"),
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      count: t("toBeUpdated")
    },
    {
      id: "speakers",
      title: t("directorySpeakers"),
      description: t("directorySpeakersDesc"),
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      count: t("toBeUpdated")
    },
    {
      id: "sponsors",
      title: t("directorySponsors"),
      description: t("directorySponsorsDesc"),
      icon: Award,
      color: "from-green-500 to-emerald-500",
      count: t("toBeUpdated")
    },
    {
      id: "delegates",
      title: t("directoryDelegates"),
      description: t("directoryDelegatesDesc"),
      icon: Globe,
      color: "from-orange-500 to-red-500",
      count: t("toBeUpdated")
    },
    {
      id: "services",
      title: t("directoryServices"),
      description: t("directoryServicesDesc"),
      icon: Building,
      color: "from-teal-500 to-cyan-500",
      count: t("toBeUpdated")
    },
    {
      id: "startups",
      title: t("directoryStartups"),
      description: t("directoryStartupsDesc"),
      icon: Users,
      color: "from-pink-500 to-rose-500",
      count: t("toBeUpdated")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              {t("directoryTitle")}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("directorySubtitle")}
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("directoryDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search will be available when directory is updated"
                  disabled
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  disabled
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                >
                  <option>Filter will be available</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Directory Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directoryCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{category.title}</h3>
                <p className="text-gray-600 text-center mb-4 text-sm">{category.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Entries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Directory Entries
          </h2>
          
          <div className="text-center py-16">
            <Users className="w-24 h-24 mx-auto mb-6 text-gray-400" />
            <h3 className="text-2xl font-bold text-gray-600 mb-4">Directory To Be Updated</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Participant directory and contact information will be available closer to the event date.
            </p>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Connect with Global Partners
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t("directoryNote")}
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">TBU</div>
                <div className="text-white/80 text-sm">Total Entries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">60+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">TBU</div>
                <div className="text-white/80 text-sm">Industries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/80 text-sm">Access</div>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
            Request Full Directory Access
          </button>
        </div>
      </section>
    </div>
  );
}