import React, { useState } from 'react';
import { Calendar, MapPin, Users, Globe, Brain, GraduationCap, Truck, Shield, Leaf, Mic, Building2, Star, Award, ChevronRight, Play, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topics = [
    { 
      icon: Globe, 
      title: "Thương mại điện tử xuyên biên giới", 
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      description: "Mở rộng thị trường quốc tế thông qua các nền tảng số hiện đại"
    },
    { 
      icon: Brain, 
      title: "Công nghệ & AI", 
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      description: "Ứng dụng trí tuệ nhân tạo trong thương mại điện tử"
    },
    { 
      icon: GraduationCap, 
      title: "Đào tạo nguồn nhân lực", 
      color: "bg-gradient-to-br from-emerald-600 to-emerald-800",
      description: "Phát triển năng lực chuyên môn cho kỷ nguyên số"
    },
    { 
      icon: Truck, 
      title: "Logistics", 
      color: "bg-gradient-to-br from-orange-600 to-orange-800",
      description: "Tối ưu hóa chuỗi cung ứng và vận chuyển quốc tế"
    },
    { 
      icon: Shield, 
      title: "Chính sách quản lý nhà nước", 
      color: "bg-gradient-to-br from-red-600 to-red-800",
      description: "Khung pháp lý và quy định hỗ trợ phát triển bền vững"
    },
    { 
      icon: Leaf, 
      title: "Phát triển bền vững", 
      color: "bg-gradient-to-br from-green-600 to-green-800",
      description: "Kinh doanh có trách nhiệm với môi trường và xã hội"
    }
  ];

  const sessions = [
    {
      date: "4/9",
      title: "Diễn đàn ứng dụng Công nghệ số trong kỷ nguyên vươn mình",
      subtitle: "Giải pháp chuyển đổi số cho doanh nghiệp sản xuất và xuất khẩu Việt Nam",
      type: "Diễn đàn",
      time: "09:00 - 12:00",
      location: "Hội trường chính"
    },
    {
      date: "5/9",
      title: "Đa dạng hóa thị trường xuất khẩu qua thương mại điện tử xuyên biên giới",
      subtitle: "Chiến lược mở rộng thị trường toàn cầu",
      type: "Diễn đàn",
      time: "09:00 - 12:00",
      location: "Hội trường A"
    },
    {
      date: "5/9",
      title: "Toàn cảnh Diễn đàn quốc tế thương mại điện tử xuyên biên giới năm 2025",
      subtitle: "Hướng đi cho doanh nghiệp xuất khẩu Việt Nam",
      type: "Hội nghị thượng đỉnh",
      time: "14:00 - 17:30",
      location: "Hội trường chính"
    },
    {
      date: "5/9",
      title: "Gala dinner giao lưu",
      subtitle: "Kết nối và chia sẻ kinh nghiệm cùng các chuyên gia quốc tế",
      type: "Sự kiện",
      time: "19:00 - 22:00",
      location: "Nhà hàng VIP"
    },
    {
      date: "6/9",
      title: "Tour thăm quan",
      subtitle: "Khám phá các mô hình kinh doanh thành công và trung tâm logistics hiện đại",
      type: "Hoạt động",
      time: "08:00 - 17:00",
      location: "Các địa điểm tại Hà Nội"
    }
  ];

  const speakers = [
    { 
      name: "TS. Nguyễn Minh Đức", 
      title: "Thứ trưởng Bộ Công Thương", 
      company: "Bộ Công Thương Việt Nam",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      name: "Bà Sarah Chen", 
      title: "Giám đốc Khu vực Đông Nam Á", 
      company: "Amazon Global Selling",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      name: "Ông David Kim", 
      title: "CEO & Founder", 
      company: "E-commerce Innovation Hub",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      name: "TS. Lê Thị Minh Hương", 
      title: "Chuyên gia AI & Thương mại điện tử", 
      company: "Viện Nghiên cứu Công nghệ FPT",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      name: "Ông Michael Zhang", 
      title: "Giám đốc Phát triển Kinh doanh", 
      company: "Alibaba Group",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      name: "Bà Trần Thị Lan Anh", 
      title: "Tổng Giám đốc", 
      company: "Hiệp hội Thương mại điện tử Việt Nam",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const stats = [
    { number: "500+", label: "Đại biểu tham dự", icon: Users },
    { number: "50+", label: "Diễn giả quốc tế", icon: Mic },
    { number: "20+", label: "Quốc gia & vùng lãnh thổ", icon: Globe },
    { number: "100+", label: "Doanh nghiệp tham gia", icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-9 h-9 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">ECCDF2025</h1>
                <p className="text-sm text-gray-600 font-medium">E-commerce Cross-border Development Forum</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base">Giới thiệu</a>
              <a href="#speakers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base">Khám phá</a>
              <a href="#topics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base">Tham luận</a>
              <a href="#sessions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base">Hoạt động</a>
              <a href="#sponsors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base">Nhà Tài Trợ</a>
              <a href="#materials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-base">Tài liệu chương trình</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Đăng ký tham dự
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Giới thiệu</a>
                <a href="#speakers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Khám phá</a>
                <a href="#topics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tham luận</a>
                <a href="#sessions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Hoạt động</a>
                <a href="#sponsors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Nhà Tài Trợ</a>
                <a href="#materials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tài liệu chương trình</a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold w-full mt-4">
                  Đăng ký tham dự
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Conference Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="mb-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-base font-medium">Sự kiện thường niên quy mô quốc tế</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-12 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              ECCDF
            </span>
            <span className="block text-white">2025</span>
          </h1>
          
          <p className="text-3xl md:text-4xl mb-8 text-blue-100 font-light">
            Diễn đàn Phát triển Thương mại Điện tử Xuyên biên giới
          </p>
          
          <p className="text-xl mb-16 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Hội tụ các chuyên gia hàng đầu, nhà hoạch định chính sách và doanh nghiệp tiên phong 
            để định hình tương lai của thương mại điện tử xuyên biên giới tại Việt Nam và khu vực
          </p>
          
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-blue-300" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-base text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 mb-16">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-8 py-4">
              <Calendar className="w-7 h-7 text-blue-300" />
              <span className="text-xl font-medium">4-6 Tháng 9, 2025</span>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-8 py-4">
              <MapPin className="w-7 h-7 text-purple-300" />
              <span className="text-xl font-medium">Trung tâm Hội nghị Quốc gia, Hà Nội</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
              <span>Đăng ký tham dự</span>
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/50 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-3 backdrop-blur-md">
              <Play className="w-6 h-6" />
              <span>Xem video giới thiệu</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-blue-100 rounded-full px-6 py-3 mb-8">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-base font-semibold text-blue-700">Về ECCDF2025</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Định hình tương lai 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> thương mại số</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                ECCDF2025 là diễn đàn thường niên quy mô quốc tế, quy tụ các nhà lãnh đạo, chuyên gia 
                và doanh nghiệp hàng đầu để thảo luận về xu hướng, thách thức và cơ hội trong lĩnh vực 
                thương mại điện tử xuyên biên giới.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Kết nối toàn cầu</h3>
                    <p className="text-gray-600">Mở rộng mạng lưới đối tác quốc tế và cơ hội kinh doanh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Công nghệ tiên tiến</h3>
                    <p className="text-gray-600">Ứng dụng AI và công nghệ số mới nhất</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Conference Overview" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-base text-gray-600">Đại biểu quốc tế</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-purple-100 rounded-full px-6 py-3 mb-8">
              <Mic className="w-5 h-5 text-purple-600" />
              <span className="text-base font-semibold text-purple-700">Diễn giả</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Các chuyên gia 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> hàng đầu</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Học hỏi từ những nhà lãnh đạo và chuyên gia có uy tín quốc tế trong lĩnh vực thương mại điện tử
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-10 text-center hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative mb-8">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{speaker.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{speaker.title}</p>
                <p className="text-gray-500">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-green-100 rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-green-600" />
              <span className="text-base font-semibold text-green-700">Chủ đề chính</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              6 lĩnh vực 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> trọng tâm</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá các xu hướng mới nhất và giải pháp sáng tạo trong từng lĩnh vực then chốt
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div key={index} className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100">
                  <div className={`w-18 h-18 ${topic.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-5">{topic.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{topic.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    <span className="text-base">Tìm hiểu thêm</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section id="sessions" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-orange-100 rounded-full px-6 py-3 mb-8">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span className="text-base font-semibold text-orange-700">Chương trình</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Các phiên tham luận 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> & hoạt động</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chương trình chi tiết trong 3 ngày sự kiện với các phiên thảo luận chuyên sâu và hoạt động giao lưu
            </p>
          </div>
          <div className="space-y-10">
            {sessions.map((session, index) => (
              <div key={index} className="group bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border border-gray-200 rounded-2xl p-10 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-6 mb-8">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-xl">
                        {session.date}
                      </span>
                      <span className="bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border border-gray-200">
                        {session.type}
                      </span>
                      <span className="text-gray-600 font-medium flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        {session.time}
                      </span>
                      <span className="text-gray-600 font-medium flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {session.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {session.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{session.subtitle}</p>
                  </div>
                  <button className="mt-8 lg:mt-0 lg:ml-10 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 border border-blue-200 flex items-center space-x-3 group-hover:scale-105">
                    <span>Chi tiết</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-32 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <Building2 className="w-5 h-5 text-yellow-400" />
              <span className="text-base font-semibold text-yellow-300">Đối tác</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Nhà tài trợ 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> uy tín</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cảm ơn sự đồng hành và hỗ trợ quý báu từ các tổ chức và doanh nghiệp hàng đầu
            </p>
          </div>
          
          {/* Diamond Sponsors */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-16 flex items-center justify-center space-x-4">
              <Star className="w-10 h-10 text-yellow-400" />
              <span>Nhà tài trợ Kim cương</span>
              <Star className="w-10 h-10 text-yellow-400" />
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="relative mb-8">
                    <img 
                      src={`https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      alt={`Diamond Sponsor ${index}`}
                      className="w-full h-36 object-cover rounded-xl mb-6"
                    />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Diamond Sponsor {index}</h4>
                  <p className="text-gray-300">Đối tác chiến lược cấp cao nhất</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-16 flex items-center justify-center space-x-4">
              <Award className="w-8 h-8 text-gray-300" />
              <span>Nhà tài trợ Bạch kim</span>
              <Award className="w-8 h-8 text-gray-300" />
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <img 
                    src={`https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300`}
                    alt={`Platinum Sponsor ${index}`}
                    className="w-full h-24 object-cover rounded-lg mb-6"
                  />
                  <h4 className="text-base font-semibold text-white mb-2">Platinum {index}</h4>
                  <p className="text-gray-400 text-sm">Đối tác bạch kim</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ECCDF2025</h3>
                  <p className="text-gray-400">E-commerce Cross-border Development Forum</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Diễn đàn Phát triển Thương mại Điện tử Xuyên biên giới 2025 - Nơi hội tụ của các chuyên gia, 
                nhà hoạch định chính sách và doanh nghiệp hàng đầu trong lĩnh vực thương mại điện tử.
              </p>
              <div className="flex space-x-5">
                <button className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Globe className="w-6 h-6" />
                </button>
                <button className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <Users className="w-6 h-6" />
                </button>
                <button className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Mic className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Thông tin liên hệ</h4>
              <div className="space-y-6 text-gray-400">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-medium text-white">Trung tâm Hội nghị Quốc gia</p>
                    <p>Mỹ Đình, Nam Từ Liêm, Hà Nội</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mic className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-white">+84 (0) 24 3826 1234</p>
                    <p>Hotline hỗ trợ</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white">info@eccdf2025.com</p>
                    <p>Email chính thức</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Liên kết nhanh</h4>
              <div className="space-y-4">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">Giới thiệu sự kiện</a>
                <a href="#speakers" className="block text-gray-400 hover:text-white transition-colors text-lg">Danh sách diễn giả</a>
                <a href="#topics" className="block text-gray-400 hover:text-white transition-colors text-lg">Chủ đề thảo luận</a>
                <a href="#sessions" className="block text-gray-400 hover:text-white transition-colors text-lg">Chương trình chi tiết</a>
                <a href="#sponsors" className="block text-gray-400 hover:text-white transition-colors text-lg">Đối tác tài trợ</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2025 ECCDF2025 - E-commerce Cross-border Development Forum. 
              <span className="text-white font-medium"> Tất cả quyền được bảo lưu.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;