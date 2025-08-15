import React from "react";
import { useTranslation } from "../../contexts/LanguageContext";
import { REGISTRATION_FORM_URL } from "../../constants/urls";

interface RegisterCTAProps {
  className?: string;
}

export default function RegisterCTA({ className }: RegisterCTAProps) {
  const { t } = useTranslation();
  return (
    <section className={`py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("ctaRegisterTitle")}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          {t("ctaRegisterDesc")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-center"
          >
            {t("heroRegister")}
          </a>
        </div>
      </div>
    </section>
  );
}
