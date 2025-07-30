import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          
          {/* Placeholder routes - sẽ tạo các pages này sau */}
          <Route path="forums/forum-5-9" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Diễn đàn 5/9</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="forums/summit-5-9" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Hội nghị thượng đỉnh 5/9</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          
          <Route path="activities/exhibition" element={<ExhibitionPage />} />
          <Route path="activities/conference" element={<ConferencePage />} />
          <Route path="activities/matching" element={<MatchingPage />} />
          <Route path="activities/gala" element={<GalaPage />} />
          <Route path="activities/tour" element={<TourPage />} />
          <Route path="activities/tourism" element={<TourismPage />} />
          
          <Route path="documents" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Tài liệu chương trình</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="documents/introduction" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Giới thiệu</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="documents/presentations" element={<PresentationsPage />} />
          <Route path="documents/directory" element={<DirectoryPage />} />
          
          {/* 404 route */}
          <Route path="*" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">404 - Không tìm thấy trang</h1><p className="text-gray-600">Trang bạn tìm kiếm không tồn tại.</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;