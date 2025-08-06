// import Logo from"../assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-previeww-removebg-preview.png"

// const Header = () =>{
//     return(
//       <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img src={Logo} style={{width:"90px"}}/>
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="#">Home🏠</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">About Us😶‍🌫️</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Contact📞</a>
//             </li>    
//             <li className="nav-item">
//               <a className="nav-link" href="#">Cart🛒</a>
//             </li>   
//           </ul>
//         </div>
//       </div>
//     </nav>
//     );
//   };

//   export default Header;

  import Logo from "../assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-previeww-removebg-preview.png";
  import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar p-0 navbar-expand-sm navbar-light">
    {/* <nav className="navbar p-0 navbar-expand-sm bg-warning navbar-light"> */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src={Logo} style={{ width: "90px" }} />
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="">
                <b>Home🛖</b>
                </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">
              <b>About Us😶‍🌫️</b>
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <b>Contact us📞</b>
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <b>Cart🛒</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;