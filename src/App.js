// import logo from "./logo.svg";
// import "./App.css";
// import Logo from "./assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-preview.png"
// import Header from "./components/Header";
// import Body from "./components/Body";
// // import Footer123 from "./components/Footer";


// const App = () => {
//   return (
//     <>
//       <Header />
//       <Body />
//       {/* <Footer123 /> */}
//     </>
//   );
// };

// export default App;
import logo from "./logo.svg";
import "./App.css";
import Logo from "./assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-previeww-removebg-preview.png"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import { Outlet } from 'react-router-dom';
import { Outlet, RouterProvider } from "react-router-dom";

// Nikhil Sir 
const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      {/* <Body /> */}
      {/* <Footer123 /> */}
    </>
  );
};

export default App;
// Rupesh
// const App = () => {
//   return(
//     <>
//       <Header/>
//       <Outlet/>
//       {/* <RouterProvider router={AppRouter} /> */}
//        <Footer/>
//     </>
//   );
// }
// Amish
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       {/* <Body/> */}
//       <Outlet/>
//       <Footer/>
//     </div>
//   );
// }

// Previous
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Body />
//       <Footer />
//     </>
//   );
// };

// export default App;
