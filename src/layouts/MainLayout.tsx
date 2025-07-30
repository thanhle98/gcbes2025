import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useTranslation } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/common/LanguageSwitcher";
import { REGISTRATION_FORM_URL } from "../constants/urls";

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const location = useLocation();
  const navigation = useNavigate();
  const { t } = useTranslation();

  // Close dropdown when location changes (navigation)
  React.useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    // scroll to top
    window.scrollTo(0, 0);
  }, [location]);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };

  const closeDropdown = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-center py-4">
            {/* Logo GCBES */}
            <img
              onClick={() => navigation("/")}
              src="/GCBES-LOGO.svg"
              alt="GCBES Logo"
              className="h-10 w-auto cursor-pointer"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Giới thiệu */}
              <Link
                to="/"
                className="text-gray-700 hover:text-custom-blue transition-colors font-medium"
              >
                {t("navIntroduction")}
              </Link>

              {/* Khám phá */}

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("explore")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-700 hover:text-custom-blue transition-colors font-medium">
                  {t("navExplore")}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {/* Dropdown Content */}
                {activeDropdown === "explore" && (
                  <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 lg:w-96 max-w-[calc(100vw-2rem)] max-h-[70vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 py-4 sm:py-6 px-3 sm:px-4 z-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">

                      {/* Event Activities */}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                          {t("navEventActivities")}
                        </h3>
                        <div className="space-y-2">
                          <Link
                            to="/activities/exhibition"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navExhibition")}
                          </Link>
                          <Link
                            to="/activities/conference"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navConference")}
                          </Link>
                          <Link
                            to="/activities/matching"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navMatching")}
                          </Link>
                          <Link
                            to="/activities/gala"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navGala")}
                          </Link>
                          <Link
                            to="/activities/tour"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navTour")}
                          </Link>
                          <Link
                            to="/activities/tourism"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navTourism")}
                          </Link>
                        </div>
                      </div>

                      {/* Program Documents */}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                          {t("navProgramDocs")}
                        </h3>
                        <div className="space-y-2">
                          <Link
                            to="/documents/presentations"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navDocPresentations")}
                          </Link>
                          <Link
                            to="/documents/directory"
                            className="block text-gray-600 hover:text-custom-blue hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                            onClick={closeDropdown}
                          >
                            {t("navDocDirectory")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div className="flex-1"></div>

            {/* Mobile menu button and Language Switcher */}
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-custom-gradient hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t("navRegister")}
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-custom-blue transition-colors font-medium"
                >
                  {t("navIntroduction")}
                </Link>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">
                    {t("navEventActivities")}
                  </h3>
                  <div className="ml-4 space-y-1">
                    <Link
                      to="/activities/exhibition"
                      className="block text-sm text-gray-600"
                    >
                      {t("navExhibition")}
                    </Link>
                    <Link
                      to="/activities/conference"
                      className="block text-sm text-gray-600"
                    >
                      {t("navConference")}
                    </Link>
                    <Link
                      to="/activities/matching"
                      className="block text-sm text-gray-600"
                    >
                      {t("navMatching")}
                    </Link>
                    <Link
                      to="/activities/gala"
                      className="block text-sm text-gray-600"
                    >
                      {t("navGala")}
                    </Link>
                    <Link
                      to="/activities/tour"
                      className="block text-sm text-gray-600"
                    >
                      {t("navTour")}
                    </Link>
                    <Link
                      to="/activities/tourism"
                      className="block text-sm text-gray-600"
                    >
                      {t("navTourism")}
                    </Link>
                  </div>
                </div>
               
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">
                    {t("navProgramDocs")}
                  </h3>
                  <div className="ml-4 space-y-1">
                    <Link
                      to="/documents/presentations"
                      className="block text-sm text-gray-600"
                    >
                      {t("navDocPresentations")}
                    </Link>
                    <Link
                      to="/documents/directory"
                      className="block text-sm text-gray-600"
                    >
                      {t("navDocDirectory")}
                    </Link>
                  </div>
                </div>

                <a
                  href={REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-custom-gradient hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold w-full mt-3 text-center"
                >
                  {t("navRegister")}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="/GCBES-LOGO-WHITE.svg"
                    alt="GCBES Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                  {t("footerDescription")}
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  {t("footerLinks")}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {t("footerHome")}
                      </span>
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      to="/documents"
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {t("footerDocuments")}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  {t("footerContact")}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 mt-1 text-cyan-400 flex-shrink-0" />
                    <span>{t("footerEmail")}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 mt-1 text-cyan-400 flex-shrink-0" />
                    <span>{t("footerPhone")}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 mt-1 text-cyan-400 flex-shrink-0" />
                    <span>{t("footerAddress")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">{t("footerCopyright")}</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
