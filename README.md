# SMart E-Commerce Platform

## 1. Project Overview

**SMart** is a full-stack e-commerce platform that allows users to browse, search, and purchase products online. It features user authentication, product management, order processing, coupon management, payment integration, and an admin dashboard for analytics and management.

---

## 2. Technologies Used

- **Frontend:** React, TypeScript, Redux Toolkit, Tailwind CSS, Chart.js, React Router, Stripe.js
- **Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose), Firebase Admin SDK, Stripe, Cloudinary
- **Authentication:** Firebase Authentication (Google, Email/Password)
- **File Storage:** Cloudinary
- **Payments:** Stripe
- **Other:** dotenv, helmet, morgan, express-rate-limit, winston, multer

---

## 3. Features

- User registration and login (Google & Email/Password)
- Product listing, search, filtering, and details
- Cart and checkout with Stripe payment integration
- Order management and order history
- Coupon creation and application
- Admin dashboard with analytics (sales, users, products, revenue)
- Product management (CRUD, featured products)
- Secure API with JWT and Firebase authentication
- Image uploads via Cloudinary
- Responsive UI

---

## 4. Cloning the Project

```sh
git clone https://github.com/shashank1210/e-commerce.git
cd e-commerce
```

The project has two main folders:
- `client` (React frontend)
- `server` (Node.js backend)

---

## 5. Project Setup

This section will guide you through setting up the project on your local machine, including installing dependencies for both the backend and frontend.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (either [local installation](https://docs.mongodb.com/manual/installation/) 
- [Git](https://git-scm.com/) (for cloning the repository)

You will also need accounts for:
- [Firebase](https://console.firebase.google.com/) (for authentication and admin SDK)
- [Cloudinary](https://cloudinary.com/) (for image uploads)
- [Stripe](https://dashboard.stripe.com/) (for payment processing)

---

### 5.1. Clone the Repository

Open your terminal and run:

```sh
git clone https://github.com/shashank1210/e-commerce.git
cd e-commerce
```

---

### 5.2. Backend Setup

1. **Navigate to the backend folder:**

    ```sh
    cd server
    ```

2. **Install backend dependencies:**

    ```sh
    npm install
    ```

    This will install all required Node.js packages as listed in `server/package.json`.

3. **Create the environment file:**

    - Copy the example below and create a `.env` file in the `server` directory.
    - **Do not commit this file to GitHub.**

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_REFRESH_SECRET=your_jwt_refresh_secret
    ACCESS_TOKEN_EXPIRY=15m
    REFRESH_TOKEN_EXPIRY=7d

    # Cloudinary
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    # Stripe
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

4. **Add your Firebase service account JSON:**

    - Download your Firebase Admin SDK private key from the Firebase console.
    - Place the JSON file in the `server` directory.
    - Update the import path in `src/config/firebase.config.ts` if you rename or move the file.

5. **Start the backend server:**

    - For development (with auto-reload):

        ```sh
        npm run dev
        ```

    - For production:

        ```sh
        npm run build
        npm start
        ```

    The backend will start on the port specified in your `.env` file (default: 5000).

---

### 5.3. Frontend Setup

1. **Navigate to the frontend folder:**

    ```sh
    cd ../client
    ```

2. **Install frontend dependencies:**

    ```sh
    npm install
    ```

    This will install all required packages as listed in `client/package.json`.

3. **Create the environment file:**

    - Copy the example below and create a `.env` file in the `client` directory.
    - **Do not commit this file to GitHub.**

    ```
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_firebase_app_id
    VITE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

4. **Start the frontend development server:**

    ```sh
    npm run dev
    ```

    The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

---

### 5.4. Directory Structure

```
smart-ecommerce/
├── client/      # React frontend
│   ├── src/
│   ├── public/
│   └── .env
├── server/      # Node.js backend
│   ├── src/
│   ├── .env
│   └── <firebase-service-account>.json
├── README.md
└── ...
```

---

### 5.5. Notes

- Make sure MongoDB is running locally or that your Atlas URI is correct.
- If you want to access the app from other devices on your network, update the `CLIENT_URL` in your backend `.env` and run the frontend with `--host 0.0.0.0`.
- If you encounter issues, check the Troubleshooting section below.

---

## 6. Creating Third-Party Accounts & Getting Credentials

### 6.1 Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/), create a new project.
2. Enable **Authentication** (Email/Password and Google).
3. Go to **Project Settings** > **Service Accounts** > Generate new private key (download the JSON file).
4. Go to **Project Settings** > **General** > Get your Firebase config for the frontend.

### 6.2 Cloudinary

1. Sign up at [Cloudinary](https://cloudinary.com/).
2. Go to Dashboard and note your **Cloud Name**, **API Key**, and **API Secret**.

### 6.3 MongoDB

- Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or run MongoDB locally.
- Get your **MongoDB connection URI**.

### 6.4 Stripe

1. Sign up at [Stripe](https://dashboard.stripe.com/).
2. Get your **Secret Key** and **Publishable Key** from the Developers > API Keys section.

---

## 7. Creating Environment Files

### 7.1 Backend (`server/.env`)

Create a `.env` file in the `server` directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

- Place your downloaded Firebase service account JSON in the `server` directory and update the import path in `src/config/firebase.config.ts` if needed.

### 7.2 Frontend (`client/.env`)

Create a `.env` file in the `client` directory:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

## 8. Running and Building the Project

### 8.1 Backend

```sh
cd server
npm run dev      # For development (with nodemon)
# or
npm run build    # Build TypeScript
npm start        # Run built JS
```

### 8.2 Frontend

```sh
cd client
npm run dev      # For development (Vite)
# or
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 9. Additional Notes

- **Never commit your `.env` files or credentials to GitHub.** Add `.env` to your `.gitignore`.
- If you change the Firebase service account JSON filename or location, update the import path in `server/src/config/firebase.config.ts`.
- For production, set `NODE_ENV=production` and use secure credentials.
- Make sure MongoDB, Stripe, Cloudinary, and Firebase credentials are correct and active.
- For local development, ensure MongoDB is running or use Atlas.

---

## 10. Troubleshooting

- **CORS Issues:** Make sure `CLIENT_URL` in your backend `.env` matches your frontend URL.
- **MongoDB Connection:** Check your `MONGO_URI` and that MongoDB is running.
- **Firebase Errors:** Ensure your service account JSON is correct and not committed to GitHub.
- **Stripe Errors:** Use test keys for development.

---

## 11. License

This project is for educational purposes.  
Replace this section with your license if needed.

---

## 12. Contact

For questions or contributions, open an issue or pull request on GitHub.
