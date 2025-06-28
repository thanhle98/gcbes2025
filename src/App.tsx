import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SponsorsPage from './pages/SponsorsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import Forum49Page from './pages/forums/Forum49Page';

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
          
          <Route path="activities/exhibition" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Triển lãm - Gian hàng</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="activities/conference" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Diễn đàn - Hội nghị</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="activities/matching" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Matching DN 1:1</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="activities/gala" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Tiệc giao lưu & tổng kết</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="activities/tour" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Tour thăm quan Hệ sinh thái</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="activities/tourism" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Du lịch địa phương</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          
          <Route path="documents" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Tài liệu chương trình</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="documents/introduction" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Giới thiệu</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="documents/presentations" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Tham luận</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          <Route path="documents/directory" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">Danh bạ Doanh nghiệp</h1><p className="text-gray-600">Trang đang được xây dựng...</p></div>} />
          
          {/* 404 route */}
          <Route path="*" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">404 - Không tìm thấy trang</h1><p className="text-gray-600">Trang bạn tìm kiếm không tồn tại.</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;