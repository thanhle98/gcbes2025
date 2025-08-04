import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from './contexts/LanguageContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SponsorsPage from './pages/SponsorsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import Forum49Page from './pages/forums/Forum49Page';
import ExhibitionPage from './pages/activities/ExhibitionPage';
import ConferencePage from './pages/activities/ConferencePage';
import MatchingPage from './pages/activities/MatchingPage';
import GalaPage from './pages/activities/GalaPage';
import TourPage from './pages/activities/TourPage';
import TourismPage from './pages/activities/TourismPage';
import PresentationsPage from './pages/documents/PresentationsPage';
import DirectoryPage from './pages/documents/DirectoryPage';

function PlaceholderPage({ titleKey, className = "py-24 text-center" }: { titleKey: string, className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold">{t(titleKey as any)}</h1>
      <p className="text-gray-600">{t("underConstruction")}</p>
    </div>
  );
}

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-bold">{t("pageNotFound")}</h1>
      <p className="text-gray-600">{t("pageNotFoundDesc")}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="activities/:activityId" element={<ActivitiesPage />} />
          <Route path="forums/forum-4-9" element={<Forum49Page />} />
          
          {/* Placeholder routes */}
          <Route path="forums/forum-5-9" element={<PlaceholderPage titleKey="forum59Title" />} />
          <Route path="forums/summit-5-9" element={<PlaceholderPage titleKey="summit59Title" />} />
          
          <Route path="activities/exhibition" element={<ExhibitionPage />} />
          <Route path="activities/conference" element={<ConferencePage />} />
          <Route path="activities/matching" element={<MatchingPage />} />
          <Route path="activities/gala" element={<GalaPage />} />
          <Route path="activities/tour" element={<TourPage />} />
          <Route path="activities/tourism" element={<TourismPage />} />
          
          <Route path="documents" element={<PlaceholderPage titleKey="documentsTitle" />} />
          <Route path="documents/introduction" element={<PlaceholderPage titleKey="introductionTitle" />} />
          <Route path="documents/presentations" element={<PresentationsPage />} />
          <Route path="documents/directory" element={<DirectoryPage />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;