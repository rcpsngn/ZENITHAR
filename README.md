# 🚀 ZENITHAR

ZENITHAR is a fullstack finance management application built with:

- 🐍 Django (Backend API)
- 🔐 JWT Authentication
- 🗄 MySQL / SQLite Support
- ⚛ React Native (Expo) Frontend
- 🌐 Web + Mobile Support

---

# 📌 Project Structure

ZENITHAR/
│
├── backend/        → Django REST API
│   ├── accounts/   → Authentication system
│   ├── finance/    → Transaction management
│   └── zenithar/   → Core settings
│
└── frontend/       → Expo React Native App
    └── src/

---

# 🔐 Authentication System

ZENITHAR uses JWT Authentication.

### Endpoints:

POST /api/auth/register/  
POST /api/auth/login/  
POST /api/auth/refresh/

---

# 💰 Finance API

Authenticated users can manage their own transactions.

### Endpoints:

GET    /api/finance/transactions/  
POST   /api/finance/transactions/  
PUT    /api/finance/transactions/{id}/  
DELETE /api/finance/transactions/{id}/  

---

# ⚙️ Backend Setup

## 1️⃣ Go to backend folder

cd backend

## 2️⃣ Create virtual environment

python -m venv venv

## 3️⃣ Activate venv

Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

## 4️⃣ Install dependencies

pip install -r requirements.txt

## 5️⃣ Run migrations

python manage.py makemigrations  
python manage.py migrate

## 6️⃣ Create superuser

python manage.py createsuperuser

## 7️⃣ Start server

python manage.py runserver

Backend runs at:

http://127.0.0.1:8000/

Admin panel:

http://127.0.0.1:8000/admin/

---

# 📱 Frontend Setup (Expo)

## 1️⃣ Go to frontend

cd frontend

## 2️⃣ Install dependencies

npm install

## 3️⃣ Start project

npx expo start

Press:

- w → Web
- a → Android
- i → iOS

---

# 🌐 API Base URL

Frontend connects to:

http://127.0.0.1:8000/api/

If using physical device, change API URL in:

frontend/src/api/api.js

Example:

http://YOUR_LOCAL_IP:8000/api/

---

# 🗄 Database

Default: SQLite  

You can switch to MySQL inside:

backend/zenithar/settings.py

Example:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'zenithar',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

---

# 🔥 Features

✔ JWT Authentication  
✔ User-based data isolation  
✔ Finance transaction system  
✔ Admin panel  
✔ RESTful API  
✔ Mobile App  
✔ Web App  
✔ Scalable architecture  

---

# 🏗 Production Deployment (Recommended)

Backend:
- Render
- Railway
- DigitalOcean
- AWS

Frontend:
- Vercel (Web)
- Expo EAS (Mobile build)

---

# 🧠 Future Improvements

- Dashboard analytics (charts)
- Dark mode UI
- Role-based permissions
- Budget planning module
- AI spending analysis
- Docker support
- CI/CD pipeline

---

# 👤 Author

ZENITHAR Project

---

# 📄 License

This project is open-source.
