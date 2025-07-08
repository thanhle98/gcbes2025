import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium border border-gray-300"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-semibold">
        {language === 'en' ? 'EN' : 'VI'}
      </span>
    </button>
  );
};

export default LanguageSwitcher; 