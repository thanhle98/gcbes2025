import React from 'react';
import { Calendar, MapPin, Users, Clock, ChevronRight, Brain, Lightbulb, Target } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../../constants/urls';
import RegisterCTA from '../../components/common/RegisterCTA';

export default function Forum49Page() {
  const agenda = [
    {
      time: "08:30 - 09:00",
      title: "Đăng ký và coffee networking",
      type: "registration"
    },
    {
      time: "09:00 - 09:15",
      title: "Khai mạc và giới thiệu chương trình",
      speaker: "Ban tổ chức",
      type: "opening"
    },
    {
      time: "09:15 - 10:00",
      title: "Xu hướng chuyển đổi số toàn cầu và cơ hội cho doanh nghiệp Việt Nam",
      speaker: "TS. David Kim - CEO E-commerce Innovation Hub",
      type: "keynote"
    },
    {
      time: "10:00 - 10:45",
      title: "AI và Machine Learning trong tối ưu hóa chuỗi cung ứng",
      speaker: "Bà Sarah Chen - Amazon Global Selling",
      type: "presentation"
    },
    {
      time: "10:45 - 11:00",
      title: "Nghỉ giải lao",
      type: "break"
    },
    {
      time: "11:00 - 11:45",
      title: "Case Study: Chuyển đổi số thành công của doanh nghiệp xuất khẩu",
      speaker: "Các đại diện doanh nghiệp",
      type: "case-study"
    },
    {
      time: "11:45 - 12:30",
      title: "Panel Discussion: Thách thức và giải pháp trong chuyển đổi số",
      speaker: "Nhiều chuyên gia",
      type: "panel"
    }
  ];

  const speakers = [
    {
      name: "TS. David Kim",
      title: "CEO & Founder",
      company: "E-commerce Innovation Hub",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Chuyên gia hàng đầu về chuyển đổi số với hơn 15 năm kinh nghiệm trong ngành công nghệ."
    },
    {
      name: "Bà Sarah Chen",
      title: "Giám đốc Khu vực Đông Nam Á",
      company: "Amazon Global Selling",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dẫn dắt chiến lược thương mại điện tử của Amazon tại khu vực Đông Nam Á."
    }
  ];

  const highlights = [
    {
      icon: Brain,
      title: "Công nghệ AI tiên tiến",
      description: "Tìm hiểu cách áp dụng AI và Machine Learning vào quy trình sản xuất và xuất khẩu"
    },
    {
      icon: Lightbulb,
      title: "Giải pháp thực tế",
      description: "Học hỏi từ các case study thành công của doanh nghiệp Việt Nam"
    },
    {
      icon: Target,
      title: "Chiến lược cụ thể",
      description: "Xây dựng lộ trình chuyển đổi số phù hợp với từng doanh nghiệp"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Digital Technology Forum"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                DIỄN ĐÀN 4/9
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              DIỄN ĐÀN ỨNG DỤNG THƯƠNG MẠI ĐIỆN TỬ VÀ CÔNG NGHỆ SỐ<br />
              <span className="text-blue-300">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Giải pháp chuyển đổi số cho doanh nghiệp sản xuất và xuất khẩu Việt Nam
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>4 tháng 9, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>09:00 - 12:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Hội trường chính</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>200+ tham dự</span>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Đăng ký tham dự
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Điểm nhấn chương trình</h2>
            <p className="text-xl text-gray-600">Những kiến thức và kỹ năng quan trọng bạn sẽ có được</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{highlight.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diễn giả chính</h2>
            <p className="text-xl text-gray-600">Gặp gỡ những chuyên gia hàng đầu trong lĩnh vực công nghệ số</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
                    <p className="text-gray-600 mb-4">{speaker.company}</p>
                    <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chương trình chi tiết</h2>
            <p className="text-xl text-gray-600">Lịch trình đầy đủ cho buổi diễn đàn</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {agenda.map((item, index) => (
              <div key={index} className={`p-6 border-b border-gray-100 last:border-b-0 ${
                item.type === 'keynote' ? 'bg-blue-50' : 
                item.type === 'break' ? 'bg-gray-50' : 'bg-white'
              } hover:bg-gray-50 transition-colors duration-200`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        {item.time}
                      </span>
                      {item.type === 'keynote' && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          Keynote
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    {item.speaker && (
                      <p className="text-gray-600">{item.speaker}</p>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegisterCTA />
    </div>
  );
} 