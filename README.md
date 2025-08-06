# EatFit - Food Delivery Application

A modern, full-featured food delivery application built with React.js, similar to Swiggy/Zomato, offering seamless restaurant browsing, food ordering, and delivery services.

## 🚀 Features

### ✅ Completed Features

- **🏠 Homepage with Restaurant Listings** - Browse restaurants with beautiful cards and carousel
- **🛒 Shopping Cart System** - Add/remove items, quantity management, order summary
- **🔍 Advanced Search & Filters** - Real-time search with suggestions, cuisine filters, price range, ratings
- **📱 Responsive Design** - Mobile-first approach, works perfectly on all devices
- **👤 User Authentication** - Login/Signup with demo account support
- **🍽️ Restaurant Menu Pages** - Detailed menu with item descriptions, images, and cart integration
- **📞 Contact Page** - Professional contact form with business information
- **ℹ️ About Page** - Company information, team details, and mission
- **📋 Order Management** - Complete cart functionality with order summary
- **🎨 Modern UI/UX** - Bootstrap 5, hover effects, animations, and professional styling

### 🎯 Key Functionalities

1. **Restaurant Discovery**
   - Browse restaurants with images, ratings, and delivery information
   - Filter by cuisine type, price range, ratings, and delivery time
   - Search functionality with autocomplete suggestions

2. **Menu & Ordering**
   - Detailed restaurant menus with item descriptions and prices
   - Add items to cart with quantity controls
   - Real-time cart updates with item count in header
   - Order summary with taxes and delivery fees

3. **User Management**
   - User registration and login system
   - Demo account for testing (email: demo@eatfit.com, password: demo123)
   - User profile management and authentication state

4. **Responsive Experience**
   - Mobile-optimized navigation with collapsible menu
   - Touch-friendly buttons and controls
   - Adaptive layouts for different screen sizes

## 🛠️ Tech Stack

- **Frontend**: React.js 18.3.1
- **Styling**: Bootstrap 5.0.1
- **Routing**: React Router DOM 6.24.1
- **State Management**: React Context API
- **UI Components**: Custom React components
- **Carousel**: React Slick 0.30.2
- **Icons & Images**: Swiggy API integration for restaurant data

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eatfit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Navigation with auth and cart
│   ├── Body.js          # Main homepage layout
│   ├── Cart.js          # Shopping cart functionality
│   ├── Menu.js          # Restaurant menu pages
│   ├── Contact.js       # Contact form and info
│   ├── About.js         # Company information
│   ├── Filter.js        # Search filters
│   ├── Searchbar.js     # Search functionality
│   ├── AuthModal.js     # Login/Signup modal
│   ├── Login.js         # Login form
│   ├── Signup.js        # Registration form
│   └── ...              # Other components
├── context/             # React Context for state management
│   ├── CartContext.js   # Shopping cart state
│   └── AuthContext.js   # Authentication state
├── const/               # Configuration and constants
├── assets/              # Images and static files
├── App.js               # Main app component
└── index.js             # App entry point
```

## 🎮 How to Use

### For Users:
1. **Browse Restaurants**: View available restaurants on the homepage
2. **Search & Filter**: Use the search bar and filters to find specific cuisines or restaurants
3. **View Menu**: Click on any restaurant to view their menu
4. **Add to Cart**: Click "Add to Cart" on menu items
5. **Manage Cart**: View and modify your cart items
6. **User Account**: Sign up or use demo account to access user features

### Demo Account:
- **Email**: demo@eatfit.com
- **Password**: demo123

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar filters
- **Tablet**: Adaptive layout with collapsible filters
- **Mobile**: Touch-optimized interface with mobile navigation

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with Bootstrap 5
- **Animations**: Smooth hover effects and transitions
- **Loading States**: Spinners and skeleton loading for better UX
- **Error Handling**: User-friendly error messages and validation
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 🌟 Notable Implementations

### Cart Management
- **Context API**: Global cart state management
- **Persistent Storage**: Cart items persist across sessions
- **Real-time Updates**: Instant cart count updates in header
- **Quantity Controls**: Easy increment/decrement functionality

### Authentication System
- **Secure Login**: Form validation and error handling
- **Demo Account**: Pre-configured account for testing
- **User Profile**: User information management
- **Protected Routes**: Cart and user-specific features

### Search & Filter System
- **Real-time Search**: Instant search results with debouncing
- **Multiple Filters**: Cuisine, price, rating, delivery time filters
- **Search History**: Remembers recent searches
- **Autocomplete**: Smart suggestions based on popular searches

## 🚧 Future Enhancements

- **Payment Integration**: Stripe/PayPal integration for actual payments
- **Order Tracking**: Real-time order status and delivery tracking
- **Reviews & Ratings**: User reviews and restaurant ratings
- **Favorites**: Save favorite restaurants and dishes
- **Push Notifications**: Order updates and promotional notifications
- **Admin Panel**: Restaurant management dashboard
- **Analytics**: User behavior and order analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer Notes

### React Hooks Usage
- **useState**: Component state management
- **useEffect**: Side effects and API calls
- **useContext**: Global state management
- **useReducer**: Complex state logic in cart management

### API Integration
- **Swiggy API**: Restaurant and menu data
- **Error Handling**: Graceful fallbacks for API failures
- **Loading States**: User feedback during data fetching

### Performance Optimizations
- **Lazy Loading**: Components loaded on demand
- **Debounced Search**: Optimized search performance
- **Memoization**: Preventing unnecessary re-renders

---

**EatFit** - Delivering happiness, one meal at a time! 🍽️