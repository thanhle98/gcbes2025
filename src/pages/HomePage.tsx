import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Brain,
  GraduationCap,
  Truck,
  Shield,
  Leaf,
  Mic,
  Building2,
  Star,
  Award,
  ChevronRight,
  Package,
} from "lucide-react";
import VideoPopup from "../components/common/VideoPopup";
import HeroSection from "./home/HeroSection";

// Lazy loading video component is now in HeroSection.tsx

const topics = [
  {
    icon: Globe,
    title: "TMĐT xuyên biên giới",
    color: "bg-emerald-50 border border-emerald-200",
    iconColor: "text-emerald-600",
    textColor: "text-gray-800",
    description:
      "Vượt qua rào cản, mở rộng thị trường toàn cầu thông qua các nền tảng số",
  },
  {
    icon: Brain,
    title: "Công nghệ & AI",
    color: "bg-blue-50 border border-blue-200",
    iconColor: "text-blue-600",
    textColor: "text-gray-800",
    description: "AI thay đổi cuộc chơi, doanh nghiệp nào sẽ dẫn đầu?",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo nguồn nhân lực",
    color: "bg-teal-50 border border-teal-200",
    iconColor: "text-teal-600",
    textColor: "text-gray-800",
    description: "Phát triển năng lực chuyên môn, xây dựng nền tảng bền vững",
  },
  {
    icon: Truck,
    title: "Logistics",
    color: "bg-cyan-50 border border-cyan-200",
    iconColor: "text-cyan-600",
    textColor: "text-gray-800",
    description: "Tối ưu hóa hệ thống và nâng cao hiệu quả kinh doanh",
  },
  {
    icon: Shield,
    title: "Chính sách quản lý nhà nước",
    color: "bg-green-50 border border-green-200",
    iconColor: "text-green-600",
    textColor: "text-gray-800",
    description: "Khung pháp lý mới, cơ hội thúc đẩy đột phá mới",
  },
  {
    icon: Leaf,
    title: "Phát triển bền vững",
    color: "bg-lime-50 border border-lime-200",
    iconColor: "text-lime-600",
    textColor: "text-gray-800",
    description: "Kinh doanh xanh, lợi nhuận lâu dài",
  },
];

const sessions = [
  {
    date: "4/9",
    title:
      "Diễn đàn ứng dụng Công nghệ số trong kỷ nguyên vươn mình – Giải pháp chuyển đổi số cho doanh nghiệp sản xuất và xuất khẩu Việt Nam",
    subtitle:
      "Giải pháp chuyển đổi số cho doanh nghiệp sản xuất và xuất khẩu Việt Nam",
    type: "Diễn đàn",
    time: "12:00 - 18:00",
    location: "Hội trường chính",
  },
  {
    date: "5/9",
    title:
      "Đa dạng hóa thị trường xuất khẩu qua thương mại điện tử xuyên biên giới",
    subtitle: "Chiến lược mở rộng thị trường toàn cầu",
    type: "Diễn đàn",
    time: "09:00 - 12:00",
    location: "Hội trường A",
  },
  {
    date: "5/9",
    title:
      "Hội nghị thượng đỉnh Toàn cảnh Thương mại điện tử xuyên biên giới năm 2025 - Hướng đi cho doanh nghiệp xuất khẩu Việt Nam",
    subtitle: "Hướng đi cho doanh nghiệp xuất khẩu Việt Nam",
    type: "Hội nghị thượng đỉnh",
    time: "14:00 - 17:30",
    location: "Hội trường chính",
  },
  {
    date: "5/9",
    title: "Gala dinner giao lưu",
    subtitle: "Kết nối và chia sẻ kinh nghiệm cùng các chuyên gia quốc tế",
    type: "Sự kiện",
    time: "19:00 - 22:00",
    location: "Nhà hàng VIP",
  },
  {
    date: "6/9",
    title: "Tour thăm quan",
    subtitle:
      "Khám phá các mô hình kinh doanh thành công và trung tâm logistics hiện đại",
    type: "Hoạt động",
    time: "08:00 - 17:00",
    location: "Các địa điểm tại Hà Nội",
  },
];

const speakers = [
  {
    name: "Bà Lê Hoàng Oanh",
    title: "Cục trưởng",
    company: "Cục Thương mại điện tử và Kinh tế số Bộ Công Thương",
    image: "/speakers/le-hoang-oanh.png",
  },
  {
    name: "Ông Liu Liang",
    title: "Đại diện Sở Thương mại Tỉnh Vân Nam & Chủ tịch Hiệp hội TMĐT",
    company: "Tỉnh Vân Nam, Trung Quốc",
    image: "/speakers/liu-liang.png",
  },
  {
    name: "Bà Anna Nguyễn",
    title: "Phó chủ tịch",
    company: "Liên minh Thương mại điện tử xuyên biên giới toàn cầu ACBC",
    image: "/speakers/anna-nguyen.png",
  },
  {
    name: "Ông Nguyễn Ngọc Dũng",
    title: "Chủ tịch",
    company: "Hiệp hội Thương mại điện tử Việt Nam (VECOM)",
    image: "/speakers/nguyen-ngoc-dung.png",
  },
  {
    name: "Ông Jang Woo Sung",
    title: "Ủy ban Tư vấn xuất khẩu",
    company: "Hiệp hội xuất khẩu tỉnh Gyeonggi",
    image: "/speakers/jang-woo-sung.png",
  },
  {
    name: "Ông Nguyễn Lâm Thanh",
    title: "Đại diện TikTok tại Việt Nam & Phó Chủ tịch VDCA",
    company: "TikTok Vietnam & Hội truyền thông số Việt Nam",
    image: "/speakers/nguyen-lam-thanh.png",
  },
];

const stats = [
  {
    number: "10,000+",
    label: "Sản phẩm trưng bày, dịch vụ đạt tiêu chuẩn",
    icon: Package,
  },
  { number: "10+", label: "Hội thảo & các hoạt động", icon: Mic },
  { number: "60+", label: "Quốc gia & vùng lãnh thổ", icon: Globe },
  { number: "600+", label: "Booth trưng bày", icon: Building2 },
  {
    number: "10,000+",
    label: "Khách tham quan, đoàn thu mua quốc tế",
    icon: Users,
  },
];

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <HeroSection onOpenPopup={() => setIsPopupOpen(true)} />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-custom-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
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
              VỀ HỘI NGHỊ GCBES2025
            </h2>
            <p className="text-xl text-gray-600 mx-auto leading-relaxed">
              Sự kiện chuyên ngành do Cục Thương mại điện tử và Kinh tế số (Bộ
              Công Thương) chủ trì, phối hợp cùng Vụ Thị trường trong nước tổ
              chức.
              <br />
              <br />
              GCBES 2025  – Diễn đàn Ứng dụng Thương mại điện tử và Công nghệ số
              là một trong những sự kiện hàng đầu trong khu vực, nơi hội tụ các
              nhà sản xuất, platform thương mại điện tử, nền tảng công nghệ,
              doanh nghiệp logistics và các chuyên gia hàng đầu từ Việt Nam và
              quốc tế. Mục tiêu hướng đến mở ra kỷ nguyên mới cho xuất khẩu hàng
              hoá toàn cầu thông qua Thương mại điện tử xuyên biên giới (CBEC)
              và ứng dụng công nghệ AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tại sao tham gia?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Kết nối trực tiếp với seller,buyer từ +60 quốc gia quốc tế,
                    Tham vấn mô hình quản trị Thương mại điện tử  từ Mỹ, Trung
                    Quốc, Nhật Bản, ASEAN
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Nắm bắt chính sách, cập nhật xu hướng mới nhất
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Kết nối toàn cầu – Hiểu Việt Nam qua góc nhìn quốc tế
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-custom-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Đưa sản phẩm nội địa ra thế giới – Không cần qua trung gian
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="HBM_2301.jpg"
                alt="Conference Overview"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-custom-blue/20 to-custom-green/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diễn giả */}
      <section id="speakers" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              DIỄN GIẢ NỔI BẬT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gặp gỡ trao đổi những chuyên gia hàng đầu trong lĩnh vực Thương
              mại điện tử xuyên biên giới đến từ nhiều quốc gia khác
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative p-6 pt-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-custom-blue/10 to-transparent"></div>
                  </div>
                </div>
                <div className="px-6 pb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-custom-blue font-semibold mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{speaker.company}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              CÁC CHỦ ĐỀ CHÍNH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá 6 lĩnh vực then chốt của thương mại điện tử xuyên biên
              giới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div
                    className={`${topic.color} rounded-2xl p-8 bg-white transform group-hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg`}
                  >
                    <Icon
                      className={`w-12 h-12 mb-6 ${topic.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h3 className={`text-xl font-bold mb-4 ${topic.textColor}`}>
                      {topic.title}
                    </h3>
                    <p
                      className={`${topic.textColor}/80 leading-relaxed min-h-[60px]`}
                    >
                      {topic.description}
                    </p>
                    <div
                      className={`flex items-center mt-6 ${topic.iconColor} group-hover:${topic.iconColor} transition-colors`}
                    >
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
              Chương trình sự kiện
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lịch trình chi tiết cho 3 ngày sự kiện đầy ý nghĩa
            </p>
          </div>

          <div className="space-y-6">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-custom-gradient text-white px-4 py-2 rounded-lg font-semibold text-sm">
                          {session.date}
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {session.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {session.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {session.subtitle}
                      </p>
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
                      <button className="bg-custom-gradient hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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

      {isPopupOpen && (
        <VideoPopup
          youtubeId="xPQN91l9djU"
          onClose={() => setIsPopupOpen(false)}
        />
      )}

      {/* Logo Nhà tài trợ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
              Đối tác & Nhà tài trợ
            </h2>
            <p className="text-xl text-gray-600 font-medium">Đang cập nhật</p>
          </div>

          {/* Commented out for future use */}
          {/* 
          <p className="text-gray-600">
            Được hỗ trợ bởi những tổ chức hàng đầu trong ngành
          </p>

          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">
                Nhà tài trợ Kim cương
              </h3>
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

          <div>
            <div className="flex items-center justify-center mb-6">
              <Award className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-lg font-bold text-gray-700">
                Nhà tài trợ Bạch kim
              </h3>
              <Award className="w-5 h-5 text-gray-400 ml-2" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-4 w-full aspect-square flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}
