# 📝 User Registration System

- **Frontend (Vercel)**: https://ia06-user-registration-api.vercel.app/
- **Backend (Render)**: https://ia06-user-registration-api.onrender.com
- **Database**: MongoDB

<p align="center">
  <img src="frontend/public/image.png" alt="User Registration Demo" width="90%" />
</p>

## ✨ Tính năng nổi bật

- 🔐 **Authentication Flow**: Đăng ký, Đăng nhập (Mock session), và Dashboard bảo mật.
- 🛡️ **Form Validation**: Kiểm tra dữ liệu chặt chẽ từ Client (React Hook Form) đến Server (DTO Validation).
- 🎨 **Modern UI/UX**: Giao diện đẹp mắt với Tailwind CSS, Shadcn UI, Responsive design.
- ⚡ **React Query**: Quản lý trạng thái server tối ưu, caching và loading states.
- 🏗️ **Clean Architecture**: Backend phân chia rõ ràng Controller - Service - Schema.
- 🐳 **Dockerized**: Dễ dàng khởi tạo Database MongoDB với Docker Compose.

---

## 🚀 Hướng dẫn cài đặt (Chạy Local)

**Yêu cầu:** Node.js ≥ 18, Docker & Docker Compose

### 1. Clone dự án

```bash
git clone https://github.com/MinhNguyenCG/ia06-user-registration-api
cd ia06-user-registration-api
```

### 2. Khởi chạy Database (MongoDB)

Dự án sử dụng Docker để host MongoDB local.

```bash
docker-compose up -d
```

_Lệnh này sẽ khởi tạo MongoDB container tại port 27017._

### 3. Cài đặt & Chạy Backend

Mở terminal mới:

```bash
cd backend
npm install

# Tạo file .env (nếu chưa có, tham khảo .env.example)
# Nội dung cơ bản:
# MONGODB_URI=mongodb://admin:admin123@localhost:27017/user_registration?authSource=admin
# PORT=5000

# Chạy server development
npm run start:dev
```

_Backend sẽ chạy tại `http://localhost:5000`_

### 4. Cài đặt & Chạy Frontend

Mở terminal mới:

```bash
cd frontend
npm install

# Chạy client development
npm run dev
```

_Frontend sẽ chạy tại `http://localhost:3000`_

---

## ⚡ Cách dùng

1. **Đăng ký (/register)**:

   - Nhập Email và Password.
   - Hệ thống sẽ gọi API `POST /user/register` để tạo tài khoản trong MongoDB.
   - Sau khi thành công, tự động chuyển hướng sang trang Login.

2. **Đăng nhập (/login)**:

   - Nhập thông tin tài khoản.
   - Hệ thống thực hiện mô phỏng đăng nhập và lưu session vào `localStorage`.
   - Chuyển hướng vào Dashboard.

3. **Dashboard (/home)**:
   - Trang được bảo vệ (Protected Route), chỉ truy cập được khi đã đăng nhập.
   - Hiển thị thông tin người dùng và các chức năng quản lý (Mock UI).
   - Nhấn **Logout** để xóa session và quay lại màn hình đăng nhập.

---

## 🏗️ Kiến trúc dự án

```
ia06-user-registration-api/
├── backend/                 # NestJS Application
│   ├── src/
│   │   ├── user/            # User Module
│   │   │   ├── dto/         # Data Transfer Objects (Validation)
│   │   │   ├── schemas/     # Mongoose Schemas
│   │   │   ├── user.controller.ts  # API Endpoints
│   │   │   └── user.service.ts     # Business Logic
│   │   ├── app.module.ts    # Main Module
│   │   └── main.ts          # Entry point
│   └── test/                # E2E Tests
│
├── frontend/                # Next.js Application
│   ├── app/
│   │   ├── register/        # Register Page (Real API Call)
│   │   ├── login/           # Login Page (Mock Session)
│   │   ├── home/            # Dashboard (Protected)
│   │   └── providers.tsx    # React Query Provider
│   ├── components/
│   │   └── ui/              # Shadcn UI Components
│   └── public/              # Static assets
│
└── docker-compose.yml       # MongoDB Configuration
```

---

## 🔑 Công nghệ chính

### Frontend

- **Next.js 16 (App Router)** + **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **TanStack Query (React Query)**
- **React Hook Form**
- **Shadcn UI** (Radix UI based)

### Backend

- **NestJS 11**
- **Mongoose** (MongoDB ODM)
- **Class Validator** (DTO Validation)

### Infrastructure

- **Docker Compose** (MongoDB)
- **Vercel** (Frontend Deployment)

---

## 📐 Đặc tả Logic

1. **API Proxy & CORS**: Backend được cấu hình `enableCors` cho phép frontend localhost:3000 gọi API.
2. **User Registration**:
   - API nhận `CreateUserDto`.
   - Validate email format và password length.
   - Lưu vào MongoDB (User Schema).
3. **Protected Routes**: Frontend kiểm tra `localStorage` tại `HomePage`. Nếu không có user session -> Redirect về Login.

---

## 🧑‍💻 Đóng góp

Mọi đóng góp đều được hoan nghênh! Vui lòng tạo Pull Request hoặc Open Issue nếu bạn tìm thấy lỗi.

---

**Made with ❤️ using NestJS & Next.js**
