import React from 'react';
import RegisterCTA from '../components/common/RegisterCTA';
import { Calendar, MapPin, Users, Clock, ArrowRight, Building2, Handshake, PartyPopper, Camera, Plane } from 'lucide-react';

export default function ActivitiesPage() {
  const activities = [
    {
      id: 'exhibition',
      title: 'Triển lãm - Gian hàng',
      description: 'Không gian trưng bày sản phẩm và giải pháp của các doanh nghiệp hàng đầu',
      icon: Building2,
      date: '4-6 tháng 9, 2025',
      time: '09:00 - 18:00',
      location: 'Khu triển lãm chính',
      participants: '100+ gian hàng',
      color: 'from-blue-600 to-blue-800',
      details: 'Khu vực triển lãm rộng 5000m² với các gian hàng của doanh nghiệp trong và ngoài nước.'
    },
    {
      id: 'conference',
      title: 'Diễn đàn - Hội nghị',
      description: 'Các phiên thảo luận chuyên sâu với chuyên gia hàng đầu',
      icon: Users,
      date: '4-5 tháng 9, 2025',
      time: '09:00 - 17:30',
      location: 'Hội trường A, B, C',
      participants: '500+ đại biểu',
      color: 'from-purple-600 to-purple-800',
      details: 'Bao gồm 3 diễn đàn chính và 10+ workshop chuyên đề.'
    },
    {
      id: 'matching',
      title: 'Matching DN 1:1',
      description: 'Kết nối trực tiếp giữa các doanh nghiệp tìm kiếm đối tác',
      icon: Handshake,
      date: '5-6 tháng 9, 2025',
      time: '14:00 - 17:00',
      location: 'Khu vực B2B',
      participants: '200+ cuộc gặp',
      color: 'from-emerald-600 to-emerald-800',
      details: 'Hệ thống matching thông minh giúp kết nối doanh nghiệp phù hợp.'
    },
    {
      id: 'gala',
      title: 'Tiệc giao lưu & tổng kết',
      description: 'Đêm gala đầy màu sắc với các hoạt động networking và biểu diễn',
      icon: PartyPopper,
      date: '5 tháng 9, 2025',
      time: '19:00 - 22:00',
      location: 'Nhà hàng VIP',
      participants: '300+ khách mời',
      color: 'from-orange-600 to-orange-800',
      details: 'Bữa tiệc sang trọng với menu quốc tế và chương trình văn nghệ đặc sắc.'
    },
    {
      id: 'tour',
      title: 'Tour thăm quan Hệ sinh thái',
      description: 'Khám phá các doanh nghiệp và trung tâm logistics hiện đại',
      icon: Camera,
      date: '6 tháng 9, 2025',
      time: '08:00 - 17:00',
      location: 'Các địa điểm tại HCM',
      participants: '100+ tham gia',
      color: 'from-green-600 to-green-800',
      details: 'Tham quan các công ty công nghệ, trung tâm logistics và startup nổi bật.'
    },
    {
      id: 'tourism',
      title: 'Du lịch địa phương',
      description: 'Trải nghiệm văn hóa và ẩm thực độc đáo của HCM',
      icon: Plane,
      date: '6-7 tháng 9, 2025',
      time: 'Cả ngày',
      location: 'HCM & vùng phụ cận',
      participants: '150+ du khách',
      color: 'from-red-600 to-red-800',
      details: 'Tour du lịch văn hóa với các điểm đến nổi tiếng và ẩm thực truyền thống.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Activities Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hoạt động & Sự kiện
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Trải nghiệm đa dạng các hoạt động từ triển lãm, hội nghị đến giao lưu và du lịch
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Các hoạt động chính</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chương trình phong phú với nhiều hoạt động hấp dẫn trong 3 ngày sự kiện
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className={`bg-gradient-to-br ${activity.color} p-6 text-white`}>
                    <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-white/90">{activity.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.participants}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {activity.details}
                    </p>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      Tìm hiểu thêm
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lịch trình tổng quan</h2>
            <p className="text-xl text-gray-600">Cái nhìn toàn cảnh về 3 ngày sự kiện</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ngày 1 - 4/9</h3>
              <p className="text-gray-600">Khai mạc, Diễn đàn công nghệ số, Triển lãm</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ngày 2 - 5/9</h3>
              <p className="text-gray-600">Diễn đàn thương mại, Hội nghị thượng đỉnh, Gala dinner</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                6
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ngày 3 - 6/9</h3>
              <p className="text-gray-600">Tour thăm quan, Du lịch địa phương, Bế mạc</p>
            </div>
          </div>
        </div>
      </section>

      <RegisterCTA />
    </div>
  );
} 