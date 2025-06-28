# Cấu trúc Project ECCDF2025

## Tổng quan
Project đã được cấu trúc lại thành hệ thống multi-page application sử dụng React Router theo đúng yêu cầu từ README.md.

## Cấu trúc thư mục mới

```
src/
├── layouts/
│   └── MainLayout.tsx          # Layout chính với header, navigation và footer
├── pages/
│   ├── HomePage.tsx           # Trang chủ (tách từ App.tsx cũ)
│   ├── SponsorsPage.tsx       # Trang nhà tài trợ
│   ├── ActivitiesPage.tsx     # Trang hoạt động tổng quan
│   └── forums/
│       └── Forum49Page.tsx    # Trang Diễn đàn 4/9
├── App.tsx                    # Routing chính
└── main.tsx                   # Entry point
```

## Các trang đã hoàn thành

### ✅ Hoàn thành
1. **MainLayout.tsx** - Layout chính với:
   - Header với logo GCBES
   - Navigation dropdown menu theo đúng cấu trúc README
   - Footer đầy đủ thông tin

2. **HomePage.tsx** - Trang chủ với:
   - Hero banner với logo chương trình
   - Giới thiệu chung
   - Diễn giả (6 speakers)
   - Các chủ đề (6 chủ đề chính)
   - Các phiên tham luận & hoạt động (5 phiên)
   - Logo nhà tài trợ kim cương và bạch kim

3. **SponsorsPage.tsx** - Trang nhà tài trợ với:
   - Danh sách nhà tài trợ kim cương (4 sponsors)
   - Danh sách nhà tài trợ bạch kim (6 sponsors)
   - Lợi ích khi trở thành đối tác

4. **ActivitiesPage.tsx** - Trang hoạt động với:
   - 6 hoạt động chính từ menu
   - Lịch trình tổng quan 3 ngày
   - Thông tin chi tiết từng hoạt động

5. **Forum49Page.tsx** - Trang Diễn đàn 4/9 với:
   - Chương trình chi tiết
   - Diễn giả chính
   - Agenda đầy đủ

### 🚧 Pages placeholder (sẽ phát triển sau)
- Diễn đàn 5/9
- Hội nghị thượng đỉnh 5/9
- Các trang hoạt động chi tiết
- Trang tài liệu chương trình

## Routing Structure

```
/ - HomePage (trang chủ)
/sponsors - SponsorsPage
/activities - ActivitiesPage
/forums/forum-4-9 - Forum49Page
/forums/forum-5-9 - Placeholder
/forums/summit-5-9 - Placeholder
/activities/exhibition - Placeholder
/activities/conference - Placeholder
/activities/matching - Placeholder
/activities/gala - Placeholder
/activities/tour - Placeholder
/activities/tourism - Placeholder
/documents/* - Placeholder pages
```

## Navigation Menu (theo README.md)

### Cấu trúc menu đã triển khai:
1. **Logo GCBES** ✅
2. **Giới thiệu** → trang chủ ✅
3. **Khám phá** (dropdown) ✅:
   - **Tham luận**:
     - Diễn đàn 4/9 ✅
     - Diễn đàn 5/9 🚧
     - Hội nghị thượng đỉnh 5/9 🚧
   - **Hoạt động**:
     - Triển lãm - Gian hàng 🚧
     - Diễn đàn - Hội nghị 🚧
     - Matching DN 1:1 🚧
     - Tiệc giao lưu & tổng kết 🚧
     - Tour thăm quan Hệ sinh thái 🚧
     - Du lịch địa phương 🚧
   - **Nhà tài trợ** ✅
   - **Tài liệu chương trình**:
     - Giới thiệu 🚧
     - Tham luận 🚧
     - Danh bạ Doanh nghiệp 🚧

## Tech Stack
- React 18 với TypeScript
- React Router v6 cho routing
- Tailwind CSS cho styling
- Lucide React cho icons
- Vite cho build tool

## Responsive Design
- Tất cả pages đều responsive
- Mobile navigation với hamburger menu
- Desktop navigation với dropdown
- Optimized cho mobile, tablet và desktop

## Chạy project

```bash
npm install
npm run dev
```

## Tính năng đã triển khai
✅ Multi-page routing với React Router
✅ Responsive navigation menu
✅ Dropdown menu theo cấu trúc README
✅ Mobile-friendly interface
✅ SEO-friendly structure
✅ Modern UI/UX design
✅ Reusable layout system

## Tiếp theo cần làm
1. Hoàn thiện các placeholder pages
2. Thêm form đăng ký
3. Tích hợp CMS cho nội dung động
4. Tối ưu SEO
5. Thêm animations và interactions
6. Testing và optimization 