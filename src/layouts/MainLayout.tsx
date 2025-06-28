import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close dropdown when location changes (navigation)
  React.useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
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
          <div className="flex justify-between items-center py-4">
            {/* Logo GCBES */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">GCBES</h1>
                <p className="text-sm text-gray-600">ECCDF2025</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {/* Giới thiệu */}
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Giới thiệu
              </Link>
              
              {/* Khám phá - Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('explore')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Khám phá
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {activeDropdown === 'explore' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4">
                      {/* Tham luận */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Tham luận</h3>
                        <div className="space-y-1 ml-4">
                          <Link to="/forums/forum-4-9" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Diễn đàn 4/9
                          </Link>
                          <Link to="/forums/forum-5-9" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Diễn đàn 5/9  
                          </Link>
                          <Link to="/forums/summit-5-9" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Hội nghị thượng đỉnh 5/9
                          </Link>
                        </div>
                      </div>

                      {/* Hoạt động */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Hoạt động</h3>
                        <div className="space-y-1 ml-4">
                          <Link to="/activities/exhibition" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Triển lãm - Gian hàng
                          </Link>
                          <Link to="/activities/conference" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Diễn đàn - Hội nghị
                          </Link>
                          <Link to="/activities/matching" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Matching DN 1:1
                          </Link>
                          <Link to="/activities/gala" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Tiệc giao lưu & tổng kết
                          </Link>
                          <Link to="/activities/tour" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Tour thăm quan Hệ sinh thái
                          </Link>
                          <Link to="/activities/tourism" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Du lịch địa phương
                          </Link>
                        </div>
                      </div>

                      {/* Nhà tài trợ */}
                      <div className="mb-4">
                        <Link to="/sponsors" onClick={closeDropdown} className="block font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                          Nhà tài trợ
                        </Link>
                      </div>

                      {/* Tài liệu chương trình */}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Tài liệu chương trình</h3>
                        <div className="space-y-1 ml-4">
                          <Link to="/documents/introduction" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Giới thiệu
                          </Link>
                          <Link to="/documents/presentations" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Tham luận
                          </Link>
                          <Link to="/documents/directory" onClick={closeDropdown} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                            Danh bạ Doanh nghiệp
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Đăng ký tham dự
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Giới thiệu
                </Link>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Tham luận</h3>
                  <div className="ml-4 space-y-1">
                    <Link to="/forums/forum-4-9" className="block text-sm text-gray-600">Diễn đàn 4/9</Link>
                    <Link to="/forums/forum-5-9" className="block text-sm text-gray-600">Diễn đàn 5/9</Link>
                    <Link to="/forums/summit-5-9" className="block text-sm text-gray-600">Hội nghị thượng đỉnh 5/9</Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Hoạt động</h3>
                  <div className="ml-4 space-y-1">
                    <Link to="/activities/exhibition" className="block text-sm text-gray-600">Triển lãm - Gian hàng</Link>
                    <Link to="/activities/conference" className="block text-sm text-gray-600">Diễn đàn - Hội nghị</Link>
                    <Link to="/activities/matching" className="block text-sm text-gray-600">Matching DN 1:1</Link>
                    <Link to="/activities/gala" className="block text-sm text-gray-600">Tiệc giao lưu & tổng kết</Link>
                    <Link to="/activities/tour" className="block text-sm text-gray-600">Tour thăm quan</Link>
                    <Link to="/activities/tourism" className="block text-sm text-gray-600">Du lịch địa phương</Link>
                  </div>
                </div>
                <Link to="/sponsors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Nhà tài trợ
                </Link>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Tài liệu chương trình</h3>
                  <div className="ml-4 space-y-1">
                    <Link to="/documents/introduction" className="block text-sm text-gray-600">Giới thiệu</Link>
                    <Link to="/documents/presentations" className="block text-sm text-gray-600">Tham luận</Link>
                    <Link to="/documents/directory" className="block text-sm text-gray-600">Danh bạ Doanh nghiệp</Link>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold w-full mt-3">
                  Đăng ký tham dự
                </button>
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">ECCDF2025</h3>
              </div>
              <p className="text-gray-400">
                Hội nghị quốc tế về Thương mại điện tử xuyên biên giới
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Trang chủ</Link></li>
                <li><Link to="/sponsors" className="hover:text-white transition-colors">Nhà tài trợ</Link></li>
                <li><Link to="/documents" className="hover:text-white transition-colors">Tài liệu</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sự kiện</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/forums/forum-4-9" className="hover:text-white transition-colors">Diễn đàn</Link></li>
                <li><Link to="/activities" className="hover:text-white transition-colors">Hoạt động</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <p className="text-gray-400">
                Email: info@eccdf2025.com<br />
                Điện thoại: +84 24 1234 5678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ECCDF2025. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 