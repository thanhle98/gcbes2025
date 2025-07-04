import React from 'react';
import { Star, Award, Globe, Building2, HandHeart } from 'lucide-react';

export default function SponsorsPage() {
  const diamondSponsors = [
    {
      name: "Global Tech Corporation",
      logo: "Logo 1",
      description: "Công ty công nghệ hàng đầu thế giới chuyên về giải pháp thương mại điện tử",
      website: "https://globaltech.com",
      category: "Công nghệ"
    },
    {
      name: "International Trade Solutions",
      logo: "Logo 2", 
      description: "Nhà cung cấp giải pháp thương mại quốc tế và logistics",
      website: "https://its.com",
      category: "Logistics"
    },
    {
      name: "Digital Innovation Hub",
      logo: "Logo 3",
      description: "Trung tâm đổi mới sáng tạo và chuyển đổi số",
      website: "https://dih.com",
      category: "Đổi mới"
    },
    {
      name: "E-commerce Platform Asia",
      logo: "Logo 4",
      description: "Nền tảng thương mại điện tử lớn nhất khu vực Châu Á",
      website: "https://epa.com",
      category: "Thương mại điện tử"
    }
  ];

  const platinumSponsors = [
    { name: "Fintech Solutions", logo: "Logo 1", category: "Tài chính" },
    { name: "Smart Logistics Co.", logo: "Logo 2", category: "Vận chuyển" },
    { name: "AI Technology Group", logo: "Logo 3", category: "Trí tuệ nhân tạo" },
    { name: "Green Trade Network", logo: "Logo 4", category: "Phát triển bền vững" },
    { name: "Digital Banking Corp", logo: "Logo 5", category: "Ngân hàng số" },
    { name: "Supply Chain Masters", logo: "Logo 6", category: "Chuỗi cung ứng" }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Tiếp cận thị trường toàn cầu",
      description: "Kết nối với hơn 500 doanh nghiệp từ 20+ quốc gia"
    },
    {
      icon: Building2,
      title: "Xây dựng thương hiệu",
      description: "Nâng cao nhận diện thương hiệu trong cộng đồng doanh nghiệp"
    },
    {
      icon: HandHeart,
      title: "Đóng góp cho cộng đồng",
      description: "Hỗ trợ phát triển hệ sinh thái thương mại điện tử Việt Nam"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Partnership Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Đối tác & Nhà tài trợ
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Được hỗ trợ bởi những tổ chức hàng đầu trong ngành công nghệ và thương mại điện tử
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
            Trở thành đối tác
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lợi ích khi trở thành đối tác</h2>
            <p className="text-xl text-gray-600">Những giá trị bạn nhận được khi đồng hành cùng GCBES2025</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Nhà tài trợ Kim cương</h2>
              <Star className="w-8 h-8 text-yellow-500 ml-3" />
            </div>
            <p className="text-xl text-gray-600">Những đối tác chiến lược quan trọng nhất của chúng tôi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diamondSponsors.map((sponsor, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-gray-600 font-medium text-sm">{sponsor.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {sponsor.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{sponsor.description}</p>
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Tìm hiểu thêm →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-gray-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Nhà tài trợ Bạch kim</h2>
              <Award className="w-6 h-6 text-gray-400 ml-3" />
            </div>
            <p className="text-xl text-gray-600">Những đối tác đáng tin cậy hỗ trợ sự kiện</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm font-medium">{sponsor.logo}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{sponsor.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tham gia với tư cách đối tác</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Cùng chúng tôi xây dựng tương lai của thương mại điện tử xuyên biên giới
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Gói tài trợ
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 