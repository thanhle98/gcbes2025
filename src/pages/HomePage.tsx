import React from 'react';
import { Calendar, MapPin, Users, Globe, Brain, GraduationCap, Truck, Shield, Leaf, Mic, Building2, Star, Award, ChevronRight, Play } from 'lucide-react';

export default function HomePage() {
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
    <div>
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Conference Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo chương trình */}
          <div className="mb-8">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              GCBEF2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Hội nghị quốc tế về Thương mại điện tử xuyên biên giới
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Kết nối toàn cầu - Phát triển bền vững
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Tham gia cùng hơn 500 chuyên gia hàng đầu từ 20+ quốc gia để khám phá những xu hướng mới nhất trong thương mại điện tử xuyên biên giới và công nghệ số
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                Đăng ký ngay
              </button>
              <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Xem giới thiệu</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-12">
              <div className="flex items-center space-x-2 text-blue-100">
                <Calendar className="w-5 h-5" />
                <span>4-6 tháng 9, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <MapPin className="w-5 h-5" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Giới thiệu chung */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Về Hội nghị GCBEF2025
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hội nghị Quốc tế về Thương mại Điện tử Xuyên biên giới 2025 là sự kiện quan trọng nhất trong năm, 
              quy tụ các nhà lãnh đạo doanh nghiệp, chuyên gia công nghệ và nhà hoạch định chính sách từ khắp nơi trên thế giới.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tại sao tham gia?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Kết nối với hơn 500 chuyên gia và doanh nghiệp hàng đầu trong lĩnh vực thương mại điện tử</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Cập nhật những xu hướng công nghệ mới nhất và chiến lược kinh doanh hiệu quả</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Tham gia các phiên thảo luận chuyên sâu và workshop thực hành</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Khám phá cơ hội hợp tác kinh doanh và đầu tư mới</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Conference Overview" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diễn giả */}
      <section id="speakers" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Diễn giả nổi bật</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gặp gỡ những chuyên gia hàng đầu từ khắp nơi trên thế giới
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Các chủ đề */}
      <section id="topics" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Các chủ đề chính</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá 6 lĩnh vực then chốt của thương mại điện tử xuyên biên giới
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className={`${topic.color} rounded-2xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                    <Icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-4">{topic.title}</h3>
                    <p className="text-white/90 leading-relaxed">{topic.description}</p>
                    <div className="flex items-center mt-6 text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Tìm hiểu thêm</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Các phiên tham luận & hoạt động */}
      <section id="sessions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Chương trình sự kiện</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lịch trình chi tiết cho 3 ngày sự kiện đầy ý nghĩa
            </p>
          </div>
          
          <div className="space-y-6">
            {sessions.map((session, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                          {session.date}
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {session.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{session.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{session.subtitle}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Tham gia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Nhà tài trợ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đối tác & Nhà tài trợ</h2>
            <p className="text-gray-600">Được hỗ trợ bởi những tổ chức hàng đầu trong ngành</p>
          </div>
          
          {/* Nhà tài trợ Kim cương */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Nhà tài trợ Kim cương</h3>
              <Star className="w-6 h-6 text-yellow-500 ml-2" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="bg-gray-100 rounded-lg p-6 w-full aspect-square flex items-center justify-center">
                <span className="text-gray-500 font-medium">Logo 1</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 w-full aspect-square flex items-center justify-center">
                <span className="text-gray-500 font-medium">Logo 2</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 w-full aspect-square flex items-center justify-center">
                <span className="text-gray-500 font-medium">Logo 3</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 w-full aspect-square flex items-center justify-center">
                <span className="text-gray-500 font-medium">Logo 4</span>
              </div>
            </div>
          </div>

          {/* Nhà tài trợ Bạch kim */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <Award className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-lg font-bold text-gray-700">Nhà tài trợ Bạch kim</h3>
              <Award className="w-5 h-5 text-gray-400 ml-2" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 w-full aspect-square flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 